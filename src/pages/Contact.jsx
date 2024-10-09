// import { useState } from 'react';

// // const [selectedState, setSelectedState] = useState("Choose...");

// const Contact = () => {
//   return (
//     <div className=''>
//       <div className="row">
//         <div className="col-6 col-md-6 col-sm-6 col-lg-6">
//           <h1 className='fw-bold fs-5'>Contact US</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//             Quidem iste ipsa nemo odit pariatur aspernatur eaque? 
//             Earum possimus alias nihil recusandae, 
//             rerum delectus perspiciatis autem non tempora a aperiam ullam.</p>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15252.608976077769!2d81.28491615!3d17.114071449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1727076425756!5m2!1sen!2sin" 
//             width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
//             </iframe>
//         </div>
//         <div className="col-6 col-md-6 col-sm-6 col-lg-6">
//           <div className='row g-3'>
//             <div className="col">
//               <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
//             </div>
//             <div className="col">
//               <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
//             </div>
//             <form className="row">
//               <div className="col-md-6">
//                 <label htmlFor="inputEmail4" className="form-label">Email</label>
//                 <input type="email" className="form-control" id="inputEmail4" />
//               </div>
//               <div className="col-12">
//                 <label htmlFor="inputAddress" className="form-label">Address</label>
//                 <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
//               </div>
//               <div className="col-12">
//                 <label htmlFor="inputAddress2" className="form-label">Address 2</label>
//                 <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="inputCity" className="form-label">City</label>
//                 <input type="text" className="form-control" id="inputCity" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="inputState" className="form-label">State</label>
//                 <select 
//                 id="inputState" 
//                 className="form-select"
//                 defaultValue="Choose..."
//                 >
//                   <option value="Choose...">Choose...</option>
//                   <option value="Andhra Pradesh">Andhra Pradesh</option>
//                   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Haryana">Haryana</option>
//                   <option value="Punjab">Punjab</option>
//                   <option value="Kashmir">Kashmir</option>
//                   <option value="Rajasthan">Rajasthan</option>
//                   <option value="Uttar Pradesh">Uttar Pradesh</option>
//                   <option value="Bhutan">Bhutan</option>
//                   <option value="Ranchi">Ranchi</option>
//                   <option value="Telangana">Telangana</option>
//                   <option value="Maharastra">Maharastra</option>
//                   <option value="Goa">Goa</option>
//                   <option value="Karnataka">Karnataka</option>
//                   <option value="Madhya Pradesh">Madhya Pradesh</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                   <option value="Kerala">Kerala</option>
//                   <option value="West Bengal">West Bengal</option>
//                   <option value="UtteraKhan">UtteraKhan</option>
//                   <option value="Gujarath">Gujarath</option>
//                   <option value="Assam">Assam</option>
//                   <option value="Nagaland">Nagaland</option>
//                   <option value="Manipur">Manipur</option>
//                   <option value="Meghalaya">Meghalaya</option>
//                   <option value="Mayanmaar">Mayanmaar</option>
//                   <option value="Andaman Nicobar Island">Andaman Nicobar Island</option>
//                   <option value="Lakshadeep">Lakshadeep</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="inputZip" className="form-label">Zip</label>
//                 <input type="text" className="form-control" id="inputZip" />
//               </div>
//               <div className="col-12">
//                 <div className="form-check">
//                   <input className="form-check-input" type="checkbox" id="gridCheck" />
//                   <label className="form-check-label" htmlFor="gridCheck">
//                   Check me out
//                 </label>
//               </div>
//             </div>
//             <div className="col-12">
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//            </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: 'Choose...',
    zip: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to the server
    console.log(formData);
  };

  return (
    <div className='container border shadow mt-3'>
      <div className="row">
        <div className="col-lg-6">
          <h1 className='fw-bold fs-1 text-center'>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quidem iste ipsa nemo odit pariatur aspernatur eaque? 
            Earum possimus alias nihil recusandae, 
            rerum delectus perspiciatis autem non tempora a aperiam ullam.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15252.608976077769!2d81.28491615!3d17.114071449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1727076425756!5m2!1sen!2sin" 
            width="100%" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div className="col-lg-6 mt-auto">
          <form className='row g-3' onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                name="phone"
                placeholder="123-456-7890"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select
                id="inputState"
                className="form-select"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option value="Choose...">Choose...</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Punjab">Punjab</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Telangana">Telangana</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Goa">Goa</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="West Bengal">West Bengal</option>
                <option value="UtteraKhan">UtteraKhan</option>
                <option value="Gujarath">Gujarath</option>
                <option value="Assam">Assam</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mayanmaar">Mayanmaar</option>
                <option value="Andaman Nicobar Island">Andaman Nicobar Island</option>
                <option value="Lakshadeep">Lakshadeep</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputSubject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="inputSubject"
                name="subject"
                placeholder="Your subject here"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="inputMessage"
                name="message"
                rows="2"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
