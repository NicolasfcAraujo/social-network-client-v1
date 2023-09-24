import ProfilePhoto from "../ProfilePhoto"

const ContactHeader = () => {
  return (
    <header className=" border-b p-4">
      <div className=" flex">
        <ProfilePhoto/>
        <div className=" pl-4">
          <h1 className=" font-semibold">Contact Name</h1>
          <h2 className=" text-xs">Contact Email</h2>
        </div>
      </div>
    </header>
  )
}

export default ContactHeader