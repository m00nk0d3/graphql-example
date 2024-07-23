const productsModel = require('./products.model')
module.exports = {
    Query: {
        products: () => productsModel.getAllProducts(),
        getProductsInPriceRange: (_, { minPrice, maxPrice }) => {
            return productsModel.getProductsByPrice(minPrice, maxPrice);
        },
    }
}