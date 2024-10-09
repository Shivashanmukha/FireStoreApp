import React from 'react'
import useCart from '../hooks/useCart'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Cart = () => {
  const {cartItems, increment, decrement, removeItem, Total, clearCart}=useCart()

  const handlePayNow = () => {
    if (cartItems.length === 0) {
      // Show toast notification if cart is empty
      toast.error('Please add items to the cart before proceeding to payment!');
    }
  };

  return (
    <div className='container'>
      {/* cart header section start */}
      <h3 className='text-center fw-bold display-6 my-2'>Shopping Cart</h3>
      {/* cart header section end */}
      
      {/* cart-items start */}
      {(cartItems.length==0)?(<h3>Cart is Empty</h3>):(
        <>
          <div className="row">
            {
              cartItems.map((item)=>{
                return   <div className='col-12 col-sm-12 col-md-3 col-lg-3' key={item.id}>
                <div className="card shadow" id='product-card' style={{width:'100%', height:'100%'}}>
                  <img src={item.image} className="card-img-top" alt="..." style={{width:'100%', height:'250px'}} />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"><span className='fw-bold'>Brand:</span>{item.brand}</p>
                    <p className="card-text fw-bold">{item.name}</p>
                    <p className="card-text"><span className='fw-bold'>Description:</span>{item.description}</p>
                    <p className="card-text"><span className='fw-bold'>Ratings:</span>{item.rating}</p>
                    <p className="card-text">${item.price}</p>
                    
                    {/* button functionality start */}
                    <div className='d-flex justify-content-around'>
                      {/* increment and decrement btn start */}
                     <div className="btn-group" role="group">
                      <button type="button" className="btn btn-danger" onClick={()=>decrement(item.id)}>-</button>
                      <span className='btn btn-warning'>{item.quantity}</span>
                      <button type="button" className="btn btn-success" onClick={()=>increment(item.id)}>+</button>
                     </div>
                     {/* remove button start */}
                     <div className='remove-container'>
                      <button type="button" className='btn btn-danger' onClick={()=>removeItem(item.id)}>Delete</button>
                      </div>
                      {/* remove button end */}
                    </div>
                    {/* increment and decrement btn end */}

                  </div>
                </div>
              </div>
              })
            }
          </div>
        </>)}
        {/* cart-items end */}

        {/* cart-total */}
        {/* {cartItems.length>0 && <p>{Total}</p>} */}
        {cartItems.length>0 ? <p>Total: $ {Total.toFixed(2)}/-</p>:<p>Total:00.00</p>}
        {/* <Link to="/payment" className='btn btn-warning'>Pay Now</Link> */}
        {/* Pay Now Button - disables if cart is empty */}
        {cartItems.length > 0 ? (
          <Link to="/payment" className='btn btn-warning'>Pay Now</Link>
            ) : (
          <button className='btn btn-warning' onClick={handlePayNow}>Pay Now</button>
        )}
        <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
