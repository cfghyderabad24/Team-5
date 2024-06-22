import Project from '../models/project.models.js';
import GeneralManager from './../models/generalManager.model.js';

// Create a new project
export const createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send();
        }
        res.status(200).send(project);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a project by ID
export const updateProjectById = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!project) {
            return res.status(404).send();
        }
        res.status(200).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a project by ID
export const deleteProjectById = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).send();
        }
        res.status(200).send(project);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getProjectsByFrontliner = async (req, res) => {
    try {
        const id = req.params.id;
        const projects = await Project.find({ assignedTo: id });
        if (!projects) {
            return res.status(200).json({ message: 'No projects found' });
        }
        return res.status(200).json(projects);
    } catch (error) {
        return error;
    }
}

export const escalateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send();
        }
        const sm = await GeneralManager.updateOne({_id: "6676d2392c2026b01af56ead"}, {
            $push: {
                projects: project._id
            }
        })
        res.status(200).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
}
}

export const updateProjectsDueDates = async (req, res) => {
    try {
        const projects = await Project.find({});

        for (const project of projects) {
            if (project.cycle === 'Jan') {
                project.dueDates = {
                    annualReviewVisit: { date: new Date('2024-11-15'), status: 'None' },
                    aerSubmission: { date: new Date('2024-12-10'), status: 'None' },
                    disbursalDate: { date: new Date('2024-01-31'), status: 'None' },
                    monitoringEvaluationVisit: { date: new Date('2024-12-25'), status: 'None' },
                    drsSubmissionApproval: { date: new Date('2024-01-25'), status: 'None' },
                    drsSubmissionFinance: { date: new Date('2024-01-25'), status: 'None' }
                };
            } else if (project.cycle === 'July') {
                project.dueDates = {
                    annualReviewVisit: { date: new Date('2024-05-15'), status: 'None' },
                    aerSubmission: { date: new Date('2024-06-10'), status: 'None' },
                    disbursalDate: { date: new Date('2024-07-31'), status: 'None' },
                    monitoringEvaluationVisit: { date: new Date('2024-06-25'), status: 'None' },
                    drsSubmissionApproval: { date: new Date('2024-07-25'), status: 'None' },
                    drsSubmissionFinance: { date: new Date('2024-07-25'), status: 'None' }
                };
            } else {
                throw new Error(`Invalid cycle specified for project with ID ${project._id}`);
            }

            // Save the updated project
            await project.save();
        }

        res.status(200).json({ message: 'Projects updated with due dates successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
