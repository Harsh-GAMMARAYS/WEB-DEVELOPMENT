const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Connection Successful")
    })
    .catch(err => {
        console.log("Connection Failed")
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [
        { type: Schema.Types.ObjectId, ref: 'Product' }
    ]
});


const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);


// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Tomato Melon', price: 2.99, season: 'Winter'},
//     {name: 'Goddess Watermelon', price: 10.99, season: 'Spring'}
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({name: 'Full Belly Farms', city: 'Bathinda, PB'});
//     const melon = await Product.findOne({ name: 'Goddess Melon' });
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }


const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Goddess Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))