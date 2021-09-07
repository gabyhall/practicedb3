const {Router} = require('express');
const postRouter = Router();
const {createPost, listPosts, listByTag} = require('./posts.controllers')

postRouter.post('/posts', createPost);
postRouter.get('/posts', listPosts);
postRouter.get('/posts/:tag', listByTag);

module.exports = postRouter;