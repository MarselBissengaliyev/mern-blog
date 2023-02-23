import CommentModel from "../models/Comment.js";
import PostModel from "../models/Post.js"


export const create = async (req, res) => {
    try {
        const doc = new CommentModel({
            text: req.body.text,
            user: req.userId,
            post: req.params.id
        });

        const comment = await doc.save();
        const post = await PostModel.findById(comment.post._id);
        await post.update({
            comments: [...post.comments, comment],
            commentsCount: post.comments.length + 1
        });

        res.json(comment);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось создать комментарий",
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const postId = req.params.id;

        let comments = await CommentModel
            .find({ post: postId })
            .sort({ 'createdAt': -1 })
            .populate('user')
            .populate('post')
            .exec();

        res.json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось все получить комментарии",
        });
    }
}