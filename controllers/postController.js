const Post = require('../models/post.js');

// Display the the index page
exports.post_index = function(req, res) {
    res.send('The index page is not implemented yet');
};

// Display the list of all posts
exports.post_list = function(req, res) {
    res.send('Not implemented yet');
};

// Display the datails of specific post.
exports.post_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Post detail: ' + req.params.id);
};

// Display Post create form.
exports.post_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Post create GET');
};

// Handle Post create on POST.
exports.post_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Post create POST');
};

// Display Post delete form on GET.
exports.post_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Post delete GET');
};

// Handle Post delete on POST.
exports.post_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Post delete POST');
};

// Display post update form on GET.
exports.post_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Post update GET');
};

// Handle post update on POST.
exports.post_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Post update POST');
};

// Handle post publish on POST.
exports.post_publish_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Post publish POST');
};

