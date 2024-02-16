module.exports = {
  tableName: "post",
  attributes: {
    postId: {
      type: "number",
      required: true,
      allowNull: false,
    },

    title: {
      type: "string",
    },

    text: {
      type: "string",
    },

    blogId: {
      model: "blog",
      required: true,
      },
    
    likes: {
      type: "number",
      defaultsTo: 0,
      },
    
    dislikes: {
      type: "number",
      defaultsTo: 0,
    },
  },
};