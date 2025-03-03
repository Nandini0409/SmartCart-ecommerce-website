const Product = require('../database/productModel')

const getProducts = async (req, res) => {
  console.log('request was sent')
  try {
    const category = req.params.id
    let products = []
    if(category === 'allProduct'){
      products = await Product.find()
    }
    else{
      products = await Product.find({category : category})
    }
    return res.status(200).json(products)
  }
  catch (e) {
    console.log(e)
    return res.status(500).send({ message: e.message })
  }
}

module.exports = getProducts