module.exports={
  createStory: async function (req, res) {
    try {
      const { title } = req.body;
      const {author}= req.session.userId;

      const createdStory = await Story.create({
        title,
        author,
      }).fetch();

      // media uploads
      const mediaFiles = req.file("media");
      if (mediaFiles) {
        const media = await Promise.all(
          mediaFiles.map(async (file) => {
            const uploadedMedia = await media.create({
              type: file.type.startsWith("image") ? "image" : "video",
              story: createdStory.id,
            }).fetch();
            return uploadedMedia;
          })
        );

        createdStory.media = media;
        await createdStory.save();
      }

      return res.created(createdStory);
    } catch (err) {
      console.error(err);
      return res.status(400).json({message:"upload failed!"});
    }
  },
};
