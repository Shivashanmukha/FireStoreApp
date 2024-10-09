import React from 'react'
import useCart from '../hooks/useCart';

const ProductCard = ({data}) => {
  const { id, name, brand, categories, price, description, image } = data;
  console.log(data)

  const {AddtoCart}=useCart()

  return (
    <>
    {/* <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
      <div className="card shadow" id='product-card'>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className='btn btn-success rounded-pill'>Add To Cart</button>
        </div>
      </div>
    </div>
     */}

    {/* <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
    <div className="card shadow" id={`product-card-${id}`}>
      <img src="..." className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Brand:</strong> {brand}<br />
          <strong>Categories:</strong> {categories.join(', ')}<br />
          <strong>Price:</strong> {price.toFixed(2)}<br />
          <strong>Description:</strong> 
          {description}
        </p>
        <button className='btn btn-success rounded-pill'>Add To Cart</button>
      </div>
    </div>
  </div> */}


  <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
    <div className="card shadow" id='product-card' style={{width:'100%', height:'530px'}}>
      <img src={image} className="card-img-top" alt={name} style={{width:'100%', height:'250px'}}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Brand:</strong> {brand}<br />
          {/* <strong>Categories:</strong> {Array.isArray(categories) ? categories.join(', ') : 'No categories'}<br /> */}
          <strong>Price:</strong> ${price}<br />
          <strong>Description:</strong> {description}
        </p>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success rounded-pill' onClick={()=>AddtoCart(data)}>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default ProductCard
