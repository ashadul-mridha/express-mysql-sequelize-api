const db = require('../models');
//create main model
const Review = db.reviews;
const Product = db.products;


//create Review 
const addReview = async (req,res) => {
    try {
        let data = {
            rating: req.body.rating,
            description: req.body.description,
            product_id: 1 //this product id came from user and its product id and for testing purpose we use static value
        }

        const review = await Review.create(data);
        console.log(review);
        res.status(200).send(review);
        
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;        
    }
}

//get all data with belongs to relation
const getAllReview = async (req,res) => {
    try {
        const review = await Review.findAll({
            include:[{
                model: Product
            }],
         })
        res.status(200).send(review);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;        
    }
}

//get single data by using id
const getOneReview = async (req,res) => {
    try {
        const {id} = req.params;
        const review = await Review.findOne({ where : {id: id}})
        res.status(200).send(review);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;
    }
}

//Update single data by using id
const updateOneReview = async (req,res) => {
    try {
        const {id} = req.params;
        const review = await Review.update( req.body , { where : {id: id}})
        res.status(200).send(review);
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;
    }
}

//Update single data by using id
const deleteReview = async (req,res) => {
    try {
        const {id} = req.params;
        await Review.destroy({ where : {id: id}})
        res.status(200).send('Review Delete Successfully');
    } catch (error) {
        const err = new Error(error.message);
        // throw new err;
    }
}

module.exports = {
    addReview,
    getAllReview,
    getOneReview,
    updateOneReview,
    deleteReview
}