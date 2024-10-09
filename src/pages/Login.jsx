import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'

// import images
import register1 from '../assets/register1.png'

const Login = () => {
  // const Navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // using the create user functionality from store 
  const {userLogin}=useAuth()
  const navigate=useNavigate()

  // handling the form submission
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      let success=await userLogin({email,password})
      // navigate("/login")
      if(success){
        navigate("/FireStoreApp")
      }
    } catch (error) {
      toast.error("Failed to login")
    }
  }

  return (
    <div className="container p-5">
      <div className="row border border-primary p-3 shadow">
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          {/* form content */}
          <form className='row' onSubmit={handleSubmit}>
            <h3 className='fw-bold fs-3 text-success'>LOGIN</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tenetur pariatur amet repellendus exercitationem cupiditate ducimus facilis, assumenda repellat et totam hic dignissimos sunt ut illo nam tempore harum. Sapiente!</p>
            <div className="mb-5">
              <label htmlFor="email" className="form-label fw-bold fs-4">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label fw-bold fs-4">Password</label>
              <input type="text" className="form-control" id="password" placeholder="Enter Your Password" value={password} required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary">SIGNIN</button>
              <NavLink type="button" className="nav-link btn btn-primary p-2" to={'/register'}>REGISTER</NavLink>
              <NavLink type="button" className="nav-link btn btn-primary p-2" to={'/reset'}>ResetPassword</NavLink>
            </div>
          </form>
        </div>
        {/* col-2 strat */}
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          <img src={register1} alt="" className='img-fluid img-thumbnail'/>
          </div>
          {/* col-2 end */}
      </div>
    </div>
  )
}

export default Login
