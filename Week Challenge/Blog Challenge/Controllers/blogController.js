const Post = require('../Models/post.js');

const getAll = (req,res)=>{
    res.status(200).json(Post.getAll());
}

const getById = (req,res)=>{
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({message:'Please Make Sure Your Giving A Number Id'});
        return;
    }
    res.status(200).json(Post.getById(id));
}

const create =(req,res)=>{
    const newPost = req.body;
    
    if (!newPost.hasOwnProperty('name') || !newPost.hasOwnProperty('description')) {
        res.status(400).json({message:'Name and Description are Required !!'});
        return;
    }

    res.status(200).json(Post.create(newPost));

}

const update =(req,res)=>{
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({message:'Please Make Sure Your Giving A Number Id'});
        return;
    }

    const updatePost = req.body;

    if (!updatePost.name && !updatePost.description) {
        res.status(400).json({warning:"Only Name and Description Are Allowed To Update !"});
        return;
    }
    const updated = {name:updatePost.name,description:updatePost.description};

    res.status(200).json(Post.update(id,updated));
}

const remove = async (req,res)=>{

    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.status(400).json({message:'Please Make Sure Your Giving A Number Id'});
        return;
    }

    res.status(200).json(await Post.remove(id));
}

module.exports = {
    getAll,getById,create,update,remove
};
