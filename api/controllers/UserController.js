const bcrypt = require("bcrypt");

module.exports = {
  create : async function(req, res) {
    try {
      const { firstName, lastName,mobile,address, zipCode, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);
      
          const userData = req.body;
          userData.createdAt = new Date().now / 1000;
        
        const zipCodeRegex = /^\d{5}(-\d{4})?$/;
        if (!zipCodeRegex.test(zipCode)) {
          return res.badRequest("Invalid ZIP code");
      }
      
  

      const newUser = await User.create(
        {
          firstName,
          lastName,
          zipCode: zipCodeRegex,
          address,
          password: hashedPassword,
        },userData).fetch();

      return res.json(newUser);
    } catch (error) {
      console.error(error);
        return res.status(404).json({ message: "Something went wrong"});
    }

  },
 

   sendPost:async function(req, res) {
    try {
      const { title, text, userId } = req.body;

      const newPost = await post.create({
        title,
        text,
        user: userId, 
      }).fetch();

      return res.json(newPost);
    } catch (error) {
      console.error(error);
      return res.status(400).json("Do not send post ");
    }
  },

  login: async function(req, res) {
    try {
      const { mobile , password } = req.body;

      const user = await user.findOne({ mobile });

      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

     

      return res.json({ message: "Login successful", user });
    } catch (error) {
      console.error(error);
      return res.err("Something went wrong");
    }
  },
};
