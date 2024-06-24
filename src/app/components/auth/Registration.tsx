import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateuserMutation } from '../../../generated'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type FormValues ={
  fullName:string,
  phoneNumber:string,
  email:string,
  password:string,
  confirmPassword:string
}

const Registration = () => {
  const {register, handleSubmit, formState:{errors}, watch} = useForm<FormValues>()
  const[createUser, {loading}]= useCreateuserMutation()
  const navigate = useNavigate()
  const password = watch('password');
  
  const handleRegistration = async(data:any) =>{
    debugger
    const {confirmPassword, ...result} = data
    const user = await createUser({variables:{userInput:{...result,role:'OPERATOR'}}})
    debugger
    if(user?.data?.createUser){
      const {token} = user?.data?.createUser
      toast.success("Success Notification!", {
        position: "top-right",
        autoClose: 5000, // 5 seconds
      });
      localStorage.setItem('token', token)
        navigate('/main')
    }
  }
  return (
    <div
    className="h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center items-center"
  >
    <ToastContainer />
    <div
      className="max-w-md p-6 bg-white rounded-lg shadow-md w-dvw"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Register</h1>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700"
          >
            Full Name
          </label>
          <input
          {...register('fullName',{
            required:{value:true, message:"Full Name must Entered!"}
          })}
            type="text"
            id="fullName"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <small className="text-red-500">{errors?.fullName?.message || ''}</small>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700"
          >
            Phone Number
          </label>
          <input
          {...register('phoneNumber',{
            required:{value:true, message:"Full Name must Entered!"}
          })}
            type="tel"
            id="phone"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <small className="text-red-500">{errors?.phoneNumber?.message || ''}</small>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700"
          >
            Email
          </label>
          <input
           {...register("email",{
            required:{value:true, message:"Email must Enter!"},
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address"
            }
          })}
            type="email"
            id="email"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <small className="text-red-500">{errors?.email?.message || ''}</small>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700"
          >
            Password
          </label>
          <input
            {...register("password",{
              required:{value:true,message:"Password must be enter!"},
              minLength:{value:4, message:"Password must be more then 4 chach!"}
  
            })}
            type="password"
            id="password"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <small className="text-red-500">{errors?.password?.message || ''}</small>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword",{
              required:{value:true,message:"Password must be enter!"},
              validate:(value) => password === value || 'Password must match!'
  
            })}
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <small className="text-red-500">{errors?.confirmPassword?.message || ''}</small>
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Already have an account? 
        <Link
          to="/auth/login"
          className="text-blue-500 hover:text-blue-700"
        >
          Login here
        </Link>
      </p>
    </div>
    
  </div>
  )
}

export default Registration