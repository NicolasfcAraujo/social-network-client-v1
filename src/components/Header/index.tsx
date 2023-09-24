import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-screen bg-transparent h-16 px-8 md:flex md:items-center md:visible hidden">
      <Link to={"/"} className=" font-semibold text-3xl">Social Network</Link>
    </header>
  )
}

export default Header