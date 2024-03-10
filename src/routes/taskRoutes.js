const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const taskController = require('../controllers/taskController');

//creating a new task
router.post("/",authenticateToken, taskController.createTask);

//GET all tasks for Logged in users
router.get("/", authenticateToken, taskController.getAllTasks)

//GET a specific Task by ID
router.get("/:id", authenticateToken, taskController.getTaskById)

//UPDATE a task by ID
router.put("/:id", authenticateToken, taskController.updateTask)

//DELETE a task
router.delete("/:id", authenticateToken, taskController.deleteTask)

module.exports = router;