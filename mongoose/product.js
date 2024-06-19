const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection Sucessful")
    })
    .catch(err => {
        console.log("Connection Failed")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

});

productSchema.methods.greet = function () {
    console.log("Hello")
    console.log(`- from ${this.name}`)
}

const findProduct =async () => {
    const foundProduct = Product.findOne({name: 'bike helmet'});
    foundProduct.greet();
}
findProduct();


const Product = mongoose.model('Product', productSchema);

// const bike = new Product({name: 'Mountain Bike', price: 599})
// bike.save()
//     .then(data => {
//         console.log("Sucessfull")
//         console.log(data)
//     })
//     .catch(e => {
//         console.log("ERROR")
//         console.log(e)
//     })