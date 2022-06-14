const express = require('express');
const router = express.Router();
const cors = require('cors');

//AUTHOR ROUTES

// Require controller modules 
const author_controller = require('../controllers/authorController');
const post_controller = require('../controllers/postController');
// GET request for creating an author, this must come before routes that display Author (uses id).
router.post('/author/create', cors(), author_controller.author_create_post);

// LOGIN ROUTES

// router.post('/login', author_controller.author_login);

// POST ROUTES 

// GET blog home page.

router.get('/', post_controller.post_index);

// GET request for creating post, this must come before the route that displays a Post (uses id).
router.get('/post/create', post_controller.post_create_get);
router.post('/post/create', post_controller.post_create_post);

router.get('/post/:id/update', post_controller.post_update_get);
router.post('/post/:id/update', post_controller.post_update_post);

router.get('/post/:id/delete', post_controller.post_delete_get);
router.post('/post/:id/delete', post_controller.post_delete_post);

router.post('/post/:id/publish', post_controller.post_publish_post);

router.post('/post/publish', post_controller.post_publish_post);

router.get('/posts', post_controller.post_list);

router.get('/post/:id', post_controller.post_detail);

module.exports = router;


