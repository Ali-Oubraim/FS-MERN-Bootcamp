// YESTERDAY I FINISH THE CHALLENGE OF Day 16
// AND NOW I WORKING ON PRODUCT MANAGEMENT API CHALLENGE 
// TODAY I WILL FINISH IT INCHAALAH TO MOVE TO THE NEXT CHALLENGE 

const express = require('express');
const app = express();

app.use(express.json());
// app.use(express.urlencoded());
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

// app.use(express.body)
app.get('/products',(req,res)=>{
    res.json(products);
})

app.get('/products/search',(req,res)=>{
    // const {q,maxPrice,minPrice} = req.query;
    let productsfound = products;   
    req.query.maxPrice
    if (req.query.q) {
        const q = req.query.q;
        productsfound = productsfound.filter((p)=>p.name.toLowerCase().includes(q.toLowerCase()));
    }

    if (req.query.maxPrice) {
        const maxPrice = req.query.maxPrice;
        productsfound = productsfound.filter(p=>p.price<=maxPrice);
    }

    if (req.query.minPrice) {
        const minPrice = req.query.minPrice;
        productsfound = productsfound.filter(p=>p.price>=minPrice);
    }
    
    if (productsfound.length) {
        res.json(productsfound);
    } else {
        res.json({'Error':'Products Not Found !!'});
    }

})
app.get('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const foundProduct = products.find((p)=>p.id===id);
    if(foundProduct){
        res.json(foundProduct);
    }else{
        res.json({'Warning':'Product Not Found !!'});
    }
})

app.post('/products',(req,res)=>{
    // const getBody = req.body;
    const id = products.length+1;
    // const check = {('name' in newProduct),'price' in newProduct}
    // if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price')) {
    //     let newProduct = {id:id,name:req.body.name,price:req.body.price};
    //     // res.json({'Message':'Product Added Successfuly !'});  
    //     res.json(products);
    //     console.log(newProduct);
    //     products.push(newProduct);
    // } else {
    //     res.json({'Error':'The Data Most Have a Name and Price !'});
    // }
    if(req.body.name && req.body.price){
        const newProduct = {id:id,name:req.body.name,price:req.body.price};
        products.push(newProduct);
        res.json(products);
        // console.log(products);
    }else{
        res.json({'Error':'Please Enter Name and Price !'})
    }
    // res.json({'Error':'Please Enter Name and Price !'});
    // console.log(newProduct);
})

app.put('/products/:id',(req,res)=>{
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const foundProduct = products.find((p)=>p.id===id);
        if(foundProduct){
            if(req.body.name)
            {
                foundProduct.name = req.body.name;
            }
            if (req.body.price) {
                foundProduct.price = req.body.price;
            }
            products.forEach((p,i) => {
                if(p.id===foundProduct.id){
                    products[i] = foundProduct;
                }
            });
            res.json(products);
        }else{
            res.json({'Warning':'Product Not Found !!'});
        }
    }else{
        res.json({"Error":"Id Not Found !!"});
    }
})
app.delete('/products/:id',(req,res)=>{
    // console.log('0️⃣\t1️⃣\t2️⃣3️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟');
    if (req.params.id) {
        const newProducts = [];
        // res.json({"Success":"Product found !"});
        products.forEach((p) => {
            if (p.id!==parseInt(req.params.id)) {
                newProducts.push(p);
            }
        //    console.log(p);
        });
        products = newProducts;
        res.json(products);
    }else{
        res.json({"Error":"Product not found !"});
    }
})
app.listen(3000,()=>{
    console.log('server Running..');
})








