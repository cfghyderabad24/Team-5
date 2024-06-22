import express from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    getProjectsByFrontliner
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

export default router;
