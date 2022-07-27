const router = require('express').Router();

// import all router controller
const {
    addProduct,
    getAllProduct,
    getPublishedProduct,
    getProductWithReview,
    getOneProuct,
    updateOneProuct,
    deleteProuct
} = require('../controllers/productController');

//add product
router.post('/addProduct', addProduct);
//get all products
router.get('/allProduct' , getAllProduct);
//get all pushlish products
router.get('/allPublishedProduct' , getPublishedProduct);
//get all pushlish products
router.get('/allProductWithReview' , getProductWithReview);
//get one single product
router.get('/:id' , getOneProuct);
//update one single product
router.put('/:id' , updateOneProuct);
//delete one single product
router.delete('/:id' , deleteProuct);

module.exports = router;