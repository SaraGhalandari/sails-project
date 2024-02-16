module.exports = {
  tableName: "blog",
  attributes: {
    blogId: {
      type: "number",
      required: true,
    },
    sponser: {
      type: "string",
    },

    posts: {
      collection: "post",
      via: "blogId",
    },

    userId: {
      model: "user",
      required: true,
    },
  },
};