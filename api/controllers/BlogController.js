module.exports = {
  create: async function (req, res) {
    try {
      const blog = await blog.create(req.body).fetch();
      return res.status(201).json(blog);
    } catch (error) {
      return res.json(error);
    }
  },

  findOne: async function (req, res) {
    try {
        const blog = await Blog.findOne({ postId: req.params.postId });
      if (!blog) {
        return res.notFound("Blog not found");
      }
      return res.json(blog);
    } catch (error) {
      return res.status(500).json({error:"not found here"});
    }
  },

  findAll: async function (req, res) {
    try {
      const blogs = await Blog.find();
      return res.json(blogs);
    } catch (error) {
      return res.serverError(error);
    }
  },

  update: async function (req, res) {
    try {
      const updatedBlog = await Blog.updateOne({
        postId: req.params.postId,
      }).set(req.body);
      if (!updatedBlog) {
        return res.notFound("Blog not found");
      }
      return res.json(updatedBlog);
    } catch (error) {
      return res.serverError(error);
    }
  },

  delete: async function (req, res) {
    try {
      const deletedBlog = await Blog.destroyOne({ postId: req.params.postId });
      if (!deletedBlog) {
        return res.notFound("Blog not found");
      }
      return res.json(deletedBlog);
    } catch (error) {
      return res.status(404);
    }
  },
};
