// api/models/Media.js

module.exports = {
  attributes: {
    type: {
      type: "string",
      isIn: ["image", "video"],
      required: true,
    },
   
    story: {
      model: "story",
    },
  },
};
