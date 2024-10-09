import React, { useState } from 'react';
import useProduct from '../hooks/useProduct';
import ProductCard from '../components/ProductCard';
import MySwiper from '../components/Swiper';

// import images
import about from '../assets/about.jpg';
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';



const Home = () => {
  // let data=useContext(AuthContexts)
  // console.log(data)
  const { product, isLoading, isError } = useProduct();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Ensure 'product' is defined and is an array before applying slice
  // let Productdata=product.slice(4,8)
  let Productdata = Array.isArray(product) ? product.slice(0, 4) : [];
  console.log(product)

  if (isLoading) {
    return <h2 className="fw-bold text-center fs-3 my-3">Loading...</h2>;
  }
  
  if (isError) {
    return <h2 className="fw-bold text-center fs-3 my-3">Error...</h2>;
  }


  // reviews section
  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing product! It exceeded my expectations.',
      image: review1  // Image URL
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Really good quality. Worth the price!',
      image: review2  // Image URL
    },
    {
      name: 'Alice Brown',
      rating: 3,
      comment: 'It’s good, but I expected better packaging.',
      image: review3  // Image URL
    },
  ];

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    // You can add form validation or API call here to submit the email.
    setSubmitted(true); // Show the confirmation message after submitting
    console.log(`Email submitted: ${email}`);
  };

  return (
    <div>
      <MySwiper/>
      <div className="container">
        <h1 className="fw-bold fs-1 text-primary text-center my-5">
          <u>ABOUT</u>
        </h1>
  
        <div className="row">
          <div className="col-12 col-md-6 my-auto">
            <div>
              <h5>About</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus amet, quaerat sunt rem beatae odit suscipit fugiat labore repellat placeat non sint modi atque architecto corrupti dolorem eius? Nam, ullam!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus amet, quaerat sunt rem beatae odit suscipit fugiat labore repellat placeat non sint modi atque architecto corrupti dolorem eius? Nam, ullam!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus amet, quaerat sunt rem beatae odit suscipit fugiat labore repellat placeat non sint modi atque architecto corrupti dolorem eius? Nam, ullam!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus amet, quaerat sunt rem beatae odit suscipit fugiat labore repellat placeat non sint modi atque architecto corrupti dolorem eius? Nam, ullam!</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-4">
              <img src={about} alt="About Us" className="img-fluid" style={{width:'100%'}}/>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <h1 className='fw-bold text-danger text-center'><u>SHOP</u></h1>
        <div className="row" id='home'>
          {Productdata.map((items)=>{
            return <ProductCard key={items.id} data={items}/>
            })}
          {/* {Productdata.map((item) => (
          <ProductCard key={item.id} data={item} />
            ))} */}
        </div>
      </div>

      {/* review section */}
      <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Customer Reviews</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 text-center">
              <div className="card-body">
                {/* Circle Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="img-fluid mb-3"
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    objectFit: 'cover' 
                  }}
                />
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} style={{ color: '#f39c12' }}>★</span>
                    ))}
                </p>
                <p className="card-text">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container mt-5">
      <h2 className="text-center">Subscribe to our Newsletter</h2>
      <p className='font-item-center' style={{ 
        fontStyle: 'italic', 
        textAlign: 'center', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi dicta aut aspernatur similique, ipsa, 
    labore nam unde alias quidem culpa necessitatibus beatae nesciunt rerum cumque eos ullam repellat. Ratione.
    </p>
      {submitted ? (
        <div className="alert alert-success text-center">
          Thank you for subscribing!
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
        <div className="form-group d-flex mb-4" style={{ maxWidth: '400px', width: '100%' }}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderRadius: '0', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} // Remove space between
          />
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ marginLeft: '-1px', borderRadius: '0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
          >
          Submit
          </button>
        </div>
      </form>
      )}
    </div>
  </div>
  );
};

export default Home;
