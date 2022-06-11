const {body, validationResult} = require('express-validator');
const Author = require('../models/author.js');

// Handle Author create on post

exports.author_create_post = [
    // validate and sanitize fields.
    body('username').trim().isLength({min: 1}).escape().withMessage('Username must be specified').isAlphanumeric().withMessage('Username has non-alphanumeric characters'),
    body('password').trim().isLength({min: 6}).escape().withMessage('Password must be specified').isAlphanumeric().withMessage('Password has non-alphanumeric characters'),

    (req, res, next) => {
        // extract validation errors from the request
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            // Resend the sanitized values/errors messages
            res.json({ author: req.body, errors: errors.array() });
            return;
        } 
        else {
            // The submitted data is valid. 
            // Create an Author object with escaped and trimmed data. 

            let author = new Author({
                username: req.body.username,
                password: req.body.password
            });

            author.save(function (error) {
                //if (err) {return next(err);}
                if (error) {return "There is an error";}
                // Successful - send a flash message
                // res.json({message: "Author successfully created"});
                res.json(author);
            })
        }

    }
];