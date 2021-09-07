const Post = require('./posts.model');

exports.createPost = async (req, res) => {
    try {
        const post = new Post({
           user: req.body.user,
           title: req.body.title,
           text: req.body.text,
            tag: req.body.tag,
            date: new Date(),
        });
        const savedPost = await post.save();
        res.status(200).send({post: savedPost, message: "post created"})
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.listPosts = async (req, res) => {
    try {
        const list = await Post.find();
        res.status(200).send({list, message: "here are all the posts"})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listByTag = async (req, res) => {
    try {
        const searchTag = req.params.tag;
        const list = await Post.find({
            tag: searchTag,
        });
        res.status(200).send({list, message: "all posts with this tag"})
    } catch (error) {
        res.status(500).send(error)
    }
}