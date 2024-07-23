const products = [
    {
       id: 'redshoes',
       description: 'Red shoes',
       price: 9.99, 
    },
    {
       id: 'bluejeans',
       description: 'Blue jeans',
       price: 19.99, 
    }
]

function getAllProducts () {
    return products
}

function getProductsByPrice(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice)
}

module.exports = {
    getAllProducts,
    getProductsByPrice
}