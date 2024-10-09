import {useState} from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// import images
import register2 from '../assets/register2.png'

const ResetPassword = () => {
    // state to hold the email given by user
    const [email,setEmail]=useState('')

    const {resetPassword}=useAuth()
    const navigate=useNavigate()
    
  // handling the form submission
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await resetPassword(email)
      navigate("/login")
    } catch (error) {
      toast.error("Email is not verified")
    }
  }

  return (
    <div className="container p-5">
      <div className="row border border-primary p-3 shadow">
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          <img src={register2} alt="" className='img-fluid img-thumbnail'/>
        </div>
       <div className="col-sm-12 col-12 col-md-6 col-lg-6">
        {/* form content */}
            <form className='row' onSubmit={handleSubmit}>
                <h3 className='fw-bold fs-3 text-success'>ResetPassword</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tenetur pariatur amet repellendus exercitationem cupiditate ducimus facilis, assumenda repellat et totam hic dignissimos sunt ut illo nam tempore harum. Sapiente!</p>
                <div className="mb-5">
                    <label htmlFor="email" className="form-label fw-bold fs-4">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <button className='btn btn-primary' type='submit'>sendEmail</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
