import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct'; // Use your product hook to fetch the product data
import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  // const { id, name, brand, categories, price, description, image } = useParams();
  const { id } = useParams();
  const { product, isLoading, isError } = useProduct();

  const {AddtoCart}=useCart()

  // Find the product by ID (assuming product is an array)
  const selectedProduct = Array.isArray(product)
    ? product.find((item) => item.id === Number(id))
    : null;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError || !selectedProduct) {
    return <h2>Product not found</h2>;
  }

    // Debugging image URL
    // const productImage = require(`../assets/${selectedProduct.image}`).default;
    console.log('Image URL:', selectedProduct.image);

  return (
    <>
    <div></div>
    <div className="container">
      {/* <img src={selectedProduct.image} className="card-img-top" alt={selectedProduct.name} style={{width:'100%', height:'250px'}}/> */}
      <img 
        src={selectedProduct.image} // Use require to resolve image path
        className="card-img-top rounded" 
        alt={selectedProduct.name} 
        style={{ width: '100%', height: '500px' }}
        onError={(e) => { e.target.onerror = null; e.target.src='/assets/default.jpg'; }} // Fallback image
      />
      <h1>{selectedProduct.name}</h1>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      <button className='btn btn-success rounded-pill' onClick={()=>AddtoCart(selectedProduct)}>Add To Cart</button>
      <Link to="/payment" className='btn btn-warning'>Pay Now</Link>
    </div>
  </>
  );
};

export default ProductDetails;

