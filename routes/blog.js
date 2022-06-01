const express = require('express');
const router = express.Router();

//AUTHOR ROUTES

// Require controller modules 
const author_controller = require('../controllers/authorController');
const post_controller = require('../controllers/postController');
// GET request for creating an author, this must come before routes that display Author (uses id).
router.get('/author/create', author_controller.author_create_post);

// POST ROUTES 

// GET blog home page.

router.get('/', post_controller.post_index);

// GET request for creating post, this must come before the route that displays a Post (uses id).
