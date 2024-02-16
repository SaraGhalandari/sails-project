// api/models/Story.js
module.exports = {
  attributes: {
    title: {
      type: "string",
      required: true,
    },
  
    author: {
      model: "user",
    },
    media: {
      collection: "media",
      via: "story",
    },
  },
};
