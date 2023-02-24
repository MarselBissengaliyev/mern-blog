import CommentModel from "../models/Comment.js";
import PostModel from "../models/Post.js";

export const create = async (req, res) => {
  try {
    const doc = new CommentModel({
      text: req.body.text,
      user: req.userId,
      post: req.params.id,
    });

    const comment = await doc.save();
    const commentsCount = await CommentModel.find({post: comment.post._id}).count();

    await PostModel.findByIdAndUpdate(comment.post._id, {
      $push: { comments: comment._id },
      commentsCount,
    });

    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать комментарий",
    });
  }
};

export const getAll = async (req, res) => {
  try {
      let comments = await CommentModel
          .find({ post: req.params.id })
          .sort({ 'createdAt': -1 })
          .populate('user')
          .populate('post')
          .exec();

      res.json(comments);
  } catch (err) {
      console.log(err);
      res.status(500).json({
          message: "Не удалось получить комментарий",
      });
  }
}