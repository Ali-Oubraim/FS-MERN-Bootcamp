const fs = require('fs/promises');
const POSTS = require('../blogs.json');

const getAll=()=>{
    try {
        return POSTS;
    } catch (error) {
        throw new Error({message:"Somthing happen when reading data !"+error});
    }
}
// console.log(getAll());

const getById = (id) =>{
   
    const foundPost = POSTS.find(p=>p.id===parseInt(id));
    if (!foundPost) {
    throw new Error("Post Not Exist !!");
    }
    return foundPost;
  
}

// console.log(getById(33));
const create = (post) => {
    const newPost = {id:parseInt(POSTS[POSTS.length-1].id)+1,...post,createdDate:new Date().toLocaleString()};
    POSTS.push(newPost);
    savePosts(POSTS);
    return POSTS;
}

// console.log(create({name:'post 2',description:'here is some text',createdDate:new Date().toLocaleDateString()}));

const update = (id,post)=>{

        const updatePost = getById(id);

        if (!updatePost){
            return updatePost;
        }else{
        const index = POSTS.findIndex(p=>p.id===updatePost.id);
        
        POSTS[index]  = {...updatePost,...post,udatedDate:new Date().toLocaleString()};

        savePosts(POSTS);

        return POSTS;
    }
}

// update(7,{name:"Post N 7",description:"Here is some NEW TEXT"});

const remove = async (id)=>{
   const index = POSTS.findIndex(p=>p.id===parseInt(id));
   if (index===-1) {
        throw new Error({message:"Post Not Found !!"});
   }else{

    POSTS.splice(index,1);
    savePosts(POSTS);
    return POSTS;
   }

}

// console.log(remove(7));

async function savePosts(data) {
    await fs.writeFile('./blogs.json',JSON.stringify(data,null,2));
}

module.exports = {
getAll,getById,create,update,remove
};

