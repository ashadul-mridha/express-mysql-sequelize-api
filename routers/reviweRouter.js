const router = require('express').Router();

const {
    addReview,
    getAllReview,
    getOneReview,
    updateOneReview,
    deleteReview
} = require('../controllers/reviewController.js');


//add Review
router.post('/addReview', addReview);
//get all Reviews
router.get('/allReview' , getAllReview);
//get one single Review
router.get('/:id' , getOneReview);
//update one single Review
router.put('/:id' , updateOneReview);
//delete one single Review
router.delete('/:id' , deleteReview);

module.exports = router;