import Button from "../Button"
import Contact from "../Contact"
import ProfilePhoto from "../ProfilePhoto"

const Contacts = () => {
  return (
    <section className=" h-screen md:w-80 border">
      <div className=" h-36 border-b p-4 flex flex-col justify-between">
        <div className=" flex">
          <ProfilePhoto width="64px" height="64px"/>
          <div className=" pl-4">
            <h1 className=" font-semibold">NOME</h1>
            <h2 className=" text-xs text-gray-700">EMAIL</h2>
          </div>
        </div>
        <Button textColor="#b91c1c" />
      </div>
      <div className=" p-4 overflow-y-scroll" style={{ height: "calc(100vh - 144px)" }}>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
      </div>
    </section>
  )
}

export default Contacts