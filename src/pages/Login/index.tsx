import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"

const Login = () => {
  return (
    <>
      <Header/>
      <main className=" center-div h-screen">
        <aside className=" lg:relative lg:right-32">
          <img className="relative w-3/4 z-10" src="login-illustration.svg" alt="" />
        </aside>
        <div className=" bg-white p-8 h-screen border fixed right-0 md:max-w-sm md:w-full w-screen z-20">
            <form className=" flex flex-col justify-between h-full">

              <div>
                <h1 className=" font-semibold text-3xl mb-8 center-div md:hidden">Social Network</h1>
                <div className=" flex justify-between text-xl">
                  <h1 className=" text-xl">Log In</h1>
                  <Link to={"/"}><i className="fa-solid fa-xmark"></i></Link>
                </div>

                <div className=" flex flex-col pt-6">
                  <label htmlFor="EMAIL" className=" input-label">Email</label>
                  <input type="text" id="EMAIL" className=" input"/>
                </div>

                <div className=" flex flex-col">
                  <label htmlFor="PASSWORD" className=" input-label">Password</label>
                  <input type="text" id="PASSWORD" className=" input"/>
                </div>

                <div className=" text-gray-400 text-center text-sm">
                  <p>Are you new here? <span className=" text-yellow-600"><Link to={"/signup"}>Sign Up</Link></span></p>
                </div>
              </div>

              <Button type="submit" color="#eab308" textColor="#a16207" width="100%" text="Log In" func={() => console.log("Log in")}/>
            </form>
        </div>
      </main>
    </>
  )
}

export default Login