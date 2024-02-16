module.exports = {
  create: async function (req, res) {
    try {
      const newPost = await Post.create(req.body).fetch();
      return res.status(201).json(newPost);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "An error occurred while creating the post." });
    }
  },

  find: async function (req, res) {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving posts." });
    }
  },

  findOne: async function (req, res) {
    try {
      const postId = req.params.id;
      const post = await Post.findOne({ postId: postId });

      if (!post) {
        return res.status(404).json({ error: "Post not found." });
      }

      return res.status(200).json(post);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving the post." });
    }
  },

  update: async function (req, res) {
    try {
      const postId = req.params.id;

      if (req.body.like) {
        // Handle like logic here
      try {
      const postId = req.param('id');
      const updatedPost = await Post.updateOne({ id: postId }).set({
        likes: req.param('likes') + 1,
      });
      return res.ok(updatedPost);
       } catch (error) {
      return res.serverError(error);
         }
      }

      if (req.body.dislike) {
        // Handle dislike logic here
        try {
          const postId = req.param("id");
          const updatedPost = await Post.updateOne({ id: postId }).set({
            likes: req.param("likes") - 1,
          });
          return res.ok(updatedPost);
        } catch (error) {
          return res.serverError(error);
        }
      }

      // Update other post properties if needed
      const updatedPost = await Post.updateOne({ postId: postId }).set(
        req.body
      );

      if (!updatedPost) {
        return res.status(404).json({ error: "Post not found." });
      }

      return res.status(200).json(updatedPost);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "An error occurred while updating the post." });
    }
  },

  delete: async function (req, res) {
    try {
      const postId = req.params.id;
      const deletedPost = await Post.destroyOne({ postId: postId });

      if (!deletedPost) {
        return res.status(404).json({ error: "Post not found." });
      }

      return res.status(200).json(deletedPost);
    } catch (err) {
      return res.status(500)
        .json({ error: "An error occurred while deleting the post." });
    }
  },
};
