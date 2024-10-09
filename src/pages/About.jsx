import React, { useState } from 'react';
import AboutSwiper from '../components/AboutSwiper';

// import images
import about1 from '../assets/about1.jpg';
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';

const About = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    // You can add form validation or API call here to submit the email.
    setSubmitted(true); // Show the confirmation message after submitting
    console.log(`Email submitted: ${email}`);
  };

  return (
    <div>
      <AboutSwiper/>
      <div className="container mt-5">
        {/* Product Overview */}
        <section className="product-overview">
          <h1 className="fw-bold fs-1 text-primary text-center mb-5">About Our Products</h1>
          <div className="row">
            <div className="col-md-6">
              <img src={about1} alt="Product" className="img-fluid rounded-circle" />
            </div>
            <div className="col-md-6 my-auto">
              <p className="lead">Our products are crafted with the highest quality materials and go through a rigorous quality control process to ensure that you receive only the best. Whether you're looking for innovation, durability, or style, our range covers it all.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features mt-5">
          <h2 className="fw-bold text-center text-success mb-4">Product Features</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-award fs-1 text-primary"></i>
              <h5 className="mt-3">High Quality</h5>
              <p>All products are made from premium materials and undergo strict quality checks.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-shield-lock fs-1 text-success"></i>
              <h5 className="mt-3">Secure Shopping</h5>
              <p>We prioritize your security with encrypted payment gateways and trusted transactions.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-box-seam fs-1 text-warning"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>Get your products delivered quickly with our reliable shipping partners.</p>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="customer-reviews mt-5">
          <h2 className="fw-bold text-center text-warning mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={review1} alt="Customer 1" className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
              <p className="italic">"The best purchase I've made this year!"</p>
              <h6>- Jane Doe</h6>
            </div>
            <div className="col-md-4 text-center">
              <img src={review2} alt="Customer 2" className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
              <p className="italic">"Excellent quality and fast delivery!"</p>
              <h6>- John Smith</h6>
            </div>
            <div className="col-md-4 text-center">
              <img src={review3} alt="Customer 3" className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
              <p className="italic">"Great customer service and reliable products!"</p>
              <h6>- Sarah Lee</h6>
            </div>
          </div>
        </section>

       {/* Newsletter Signup Section */}
        <section className="newsletter mt-5">
          <h2 className="fw-bold text-center text-info mb-4">Stay Updated</h2>
          {submitted ? (
            <div className="alert alert-success text-center">
              Thank you for subscribing!
            </div>
          ) : (
       <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
        <div className="form-group d-flex mb-4" style={{ maxWidth: '50%', width: '100%' }}>
          <input
            type="email"
            className="form-control rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderRadius: '0', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} // Remove space between
          />
          <button 
            type="submit" 
            className="btn btn-primary rounded" 
            style={{ marginLeft: '-1px', borderRadius: '0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
          >
          Subscribe
          </button>
        </div>
        </form>
        )}
        </section>
      </div>
    </div>
  );
};

export default About;
