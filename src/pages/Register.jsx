import {useState} from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// import images
import register from '../assets/register.png'

const Register = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // using the create user functionality from store 
  const {createUser}=useAuth()
  const navigate=useNavigate()

  // handling the form submission
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await createUser({email,password})
      navigate("/login")
    } catch (error) {
      toast.error("user not registered")
    }
  }
  
  return (
    <div className="container p-5">
      <div className="row border border-primary p-3 shadow">
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          {/* form content */}
          <form className='row' onSubmit={handleSubmit}>
            <h3 className='fw-bold fs-3 text-success'>REGISTER</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tenetur pariatur amet repellendus exercitationem cupiditate ducimus facilis, assumenda repellat et totam hic dignissimos sunt ut illo nam tempore harum. Sapiente!</p>
            <div className="mb-5">
              <label htmlFor="email" className="form-label fw-bold fs-4">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Enter Your Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label fw-bold fs-4">Password</label>
              <input type="text" className="form-control" id="password" placeholder="Enter Your Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
        {/* col-2 strat */}
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          <img src={register} alt="" className='img-fluid img-thumbnail'/>
          </div>
          {/* col-2 end */}
      </div>
    </div>
  )
}

export default Register
