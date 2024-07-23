const products = [
    {
       id: 'redshoes',
       description: 'Red shoes',
       price: 9.99, 
       reviews: []
    },
    {
       id: 'bluejeans',
       description: 'Blue jeans',
       price: 19.99, 
       reviews: []
    }
]

function getAllProducts () {
    return products
}

function getProductsByPrice(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice)
}

function getProductById(id) {
    return products.find(product => product.id === id)
}

function addProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price, 
        reviews: []
    }
    products.push(newProduct)
    return newProduct
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addProduct
}