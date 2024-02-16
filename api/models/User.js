module.exports = {
  tableName: "user",
  attributes: {
    userId: {
      type: "number",
      required: true,
    },

    lName: {
      type: "string",
      allowNull: true,
    },

    fName: {
      type: "string",
      allowNull: false,
    },

    password: {
      type: "string",
      required: true,
      allowNull: false,
    },

    mobile: {
      type: "number",
      required: true,
    },

    zipcode: {
      type: "number",
      required: true,
      allowNull: false,
      unique:true,
    },

    blogs: {
      collection: "blog",
      via: "userId",
    },
  },
};