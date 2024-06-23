import express from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    getProjectsByFrontliner,
    escalateProject,
    updateProjectsDueDates,
    storeDocuments,
    sanctionProject,
    updateFieldVisit,
    getProjectWithFrontliner
} from '../controllers/projectController.js';

const router = express.Router();

// Create a new project
router.post('/projects', createProject);

// Get all projects
router.get('/projects', getAllProjects);

// Get a project by ID
router.get('/projects/:id', getProjectById);

// Update a project by ID
router.put('/projects/:id', updateProjectById);

// Get projects by frontliner
router.get('/projects/frontliner/:id', getProjectsByFrontliner);

// Delete a project by ID
router.delete('/projects/:id', deleteProjectById);

router.post('/projects/escalate/:id', escalateProject)

router.post('/update-due-dates', updateProjectsDueDates);

router.post('/projects/upload-docs', storeDocuments);

router.post("/projects/sanctioned/:id", sanctionProject);

// Update the field visit
router.post('/projects/field-visit/:id', updateFieldVisit);

router.get('/projects/get-project/populate-fontlier', getProjectWithFrontliner);

export default router;
