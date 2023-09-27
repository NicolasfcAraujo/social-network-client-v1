import { useAppSelector } from "../../utils/redux/store"
import ProfilePhoto from "../ProfilePhoto"

const ContactHeader = () => {

  const { currentContact } = useAppSelector((state) => state.user)

  return (
    <header className=" border-b p-4">
      <div className=" flex">
        <ProfilePhoto/>
        <div className=" pl-4">
          <h1 className=" font-semibold">{ currentContact.name }</h1>
          <h2 className=" text-xs">{ currentContact.email }</h2>
        </div>
      </div>
    </header>
  )
}

export default ContactHeader