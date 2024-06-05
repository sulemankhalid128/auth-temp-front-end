import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserRoles, useLoginMutation } from "../../../generated";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const navigate = useNavigate()
 const[login, {data, loading, error}] = useLoginMutation({
  onError({ message }) {
    if (message.toLowerCase() === 'Invalid Authorization Token - No Token Provided in Headers') {
      return alert(message + " Login Error!");
    }

    return alert(message);
  },

  onCompleted(data) {
    if (data) {
      const { login: { token, userId, roles } } = data;
      if (token) {
        localStorage.setItem('token', token)
        navigate('/main')
        // const isAdmin = roles.find((role) => role.role === UserRoles.Admin || role.role === UserRoles.BrandManager)
        // const isOperator = roles.find((role) => role.role === UserRoles.Operator)

       
      }
    }
  },
 })
 const {handleSubmit, register, formState:{errors}}= useForm<FormValues>()

 const handleLogin = (data:FormValues) =>{
  debugger
  login({variables:{login:{...data}}})
 }
// useEffect(() => {
//  if(data){
//     debugger
//  }
// }, [data])

  return (
    <div
    className="h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center items-center"
  >
    <div
      className="max-w-md p-6 bg-white rounded-lg shadow-md w-dvw"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
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
            type="text"
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
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Don't have an account? 
        <Link
          to="/auth/registration"
          className="text-blue-500 hover:text-blue-700"
        >
          Register here
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Login;
