import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import { FormEvent, useState } from "react"
import axios from "axios"
import { useAppSelector } from "../../utils/redux/store"

const Signup = () => {

  const [ name, setName ] = useState<string>()
  const [ email, setEmail ] = useState<string>()
  const [ password, setPassword ] = useState<string>()
  const [ confirm, setConfirm ] = useState<string>()
  const [ error, setError ] = useState<boolean>(false)
  const [ serverError, setServerError ] = useState<boolean>(false)
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const navigate = useNavigate()
  const { isLogged } = useAppSelector(state => state.user)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    if (password === confirm) {
      axios.post(`${process.env.REACT_APP_API_URL}/user/create`, {
        name: name,
        email: email,
        password: password
      }).then((res) => {
        navigate("/login")
      }).catch((error) => {
        setIsLoading(false)
        setServerError(true)
        setTimeout(() => {
          setServerError(error)
        }, 5000);
      })
    } else {
      setIsLoading(false)
      setError(true)
      setTimeout(() => {
        setError(error)
      }, 5000);
    }
  }

  return (
    <>
      <Header/>
      <main className=" center-div h-screen">
        <aside className=" lg:relative lg:right-32">
          <img className="relative w-3/4 z-10" src="login-illustration.svg" alt="" />
        </aside>
        <div className=" bg-white p-8 h-screen border fixed right-0 md:max-w-sm md:w-full w-screen z-20">
          <form onSubmit={handleSubmit} className=" flex flex-col justify-between h-full">

            <div>
              <h1 className=" font-semibold text-3xl mb-8 center-div md:hidden">LightREF</h1>
              <div className=" flex justify-between text-xl">
                <h1 className=" text-xl">Sign Up</h1>
                {isLogged &&
                  <Link to={"/"}><i className="fa-solid fa-xmark"></i></Link>
                }
              </div>

              <div className=" flex flex-col pt-6">
                <label htmlFor="NAME" className=" input-label">Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" id="NAME" className=" input"/>
              </div>

              <div className=" flex flex-col">
                <label htmlFor="EMAIL" className=" input-label">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="EMAIL" className=" input"/>
              </div>

              <div className=" flex flex-col">
                <label htmlFor="PASSWORD" className=" input-label">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" minLength={8} id="PASSWORD" className=" input"/>
              </div>

              <div className=" flex flex-col">
                <label htmlFor="CONFIRM" className={` input-label`}>Confirm Password</label>
                <input onChange={(e) => setConfirm(e.target.value)} type="password" id="CONFIRM" className={` input ${error ? "border border-red-600" : ""}`}/>
              </div>

              <div className=" text-gray-400 text-center text-sm pb-4">
                <p>Already have an account? <span className=" text-yellow-600"><Link to={"/login"}>Login</Link></span></p>
              </div>

              {error &&
                <div className=" w-full bg-red-300 text-red-600 border border-red-600 rounded p-4 text-sm opacity-75">
                  Please, to confirm, use the same passwords!
                </div>
              }
              {serverError &&
                <div className=" w-full bg-red-300 text-red-600 border border-red-600 rounded p-4 text-sm opacity-75">
                  Something went wrong, please try again!
                </div>
              }
            </div>

            

            <Button type="submit" color="#eab308" textColor="#a16207" width="100%" text={isLoading ? "Loading" : "Log In"} func={() => console.log("Signup")}/>
          </form>
        </div>
      </main>
    </>
  )
}

export default Signup