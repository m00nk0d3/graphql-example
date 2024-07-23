const productsModel = require('./products.model')
module.exports = {
    Query: {
        products: () => productsModel.getAllProducts(),
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.minPrice, args.maxPrice);
        },
        product: (_, args) => {
            return productsModel.getProductById(args.id)
        }
    },
    Mutation : {
        addNewProduct: (_, args) => {
            return productsModel.addProduct(args.id, args.description, args.price)
        }
    }
}