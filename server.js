const express = require('express');
const cors = require('cors');

//import all router
const productRouter = require('./routers/productRouter');
const reviewRouter = require('./routers/reviweRouter');

const app = express();

const corOptions = {
    origin: 'https://localhost:8081'
}

//application level middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//application router
app.use('/api/product',productRouter)
app.use('/api/review',reviewRouter)


//testing api
app.get('/', async (req,res) => {
    res.send({message : 'Hello API'});
});

//port 
const PORT = process.env.PORT || 3000;

//application listen
app.listen(PORT , () => {
    console.log(`application running on port ${PORT}`);
})