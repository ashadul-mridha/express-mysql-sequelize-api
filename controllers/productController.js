const db = require('../models');
//create main model
const Product = db.products;
const Review = db.reviews;


//create product 
const addProduct = async (req,res) => {
    try {
        let info = {
            title: req.body.title,
            price:req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }

        const product = await Product.create(info);
        console.log(product);
        res.status(200).send(product);
        
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;        
    }
}

//get all data 
const getAllProduct = async (req,res) => {
    try {
        const product = await Product.findAll({
            attributes : [
                'title',
                'price'
            ]
        })
        res.status(200).send(product);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;        
    }
}

//get all data 
const getPublishedProduct = async (req,res) => {
    try {
        const products = await Product.findAll({ where : {published : true}})
        res.status(200).send(products);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;        
    }
}

//get single data by using id
const getOneProuct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findOne({ where : {id: id}})
        res.status(200).send(product);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;
    }
}

//Update single data by using id
const updateOneProuct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.update( req.body , { where : {id: id}})
        res.status(200).send(product);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;
    }
}

//Update single data by using id
const deleteProuct = async (req,res) => {
    try {
        const {id} = req.params;
        await Product.destroy({ where : {id: id}})
        res.status(200).send('Product Delete Successfully');
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;
    }
}


//get all data  with review useing has many relation
const getProductWithReview = async (req,res) => {
    try {
        const products = await Product.findAll({
            include:[{
                model: Review
            }],
            where : {id : 1}
        })
        res.status(200).send(products);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;        
    }
}

module.exports = {
    addProduct,
    getAllProduct,
    getPublishedProduct,
    getProductWithReview,
    getOneProuct,
    updateOneProuct,
    deleteProuct
}