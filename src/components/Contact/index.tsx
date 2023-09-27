import { changeCurrentContact } from "../../utils/redux/features/userSlice"
import { useAppDispatch, useAppSelector } from "../../utils/redux/store"
import ProfilePhoto from "../ProfilePhoto"
import socket from "../../utils/socket"

interface IContact {
  id: number,
  name: string,
  email: string,
  photoPath: string,
}

const Contact = ({ id, name, email, photoPath }: IContact) => {

  const dispatch = useAppDispatch()
  const { id: senderId } = useAppSelector(state => state.user)

  const handleClick = () => {
    socket.emit("join_room", `room-${senderId}-${id}`)
    dispatch(changeCurrentContact({ name: name, email: email, id: id }))
  }

  return (
    <article onClick={handleClick} className=" w-full h-24 rounded p-4 border flex mb-4 cursor-pointer bg-white hover:bg-gray-50">
      <div>
        <ProfilePhoto/>
      </div>
      <div className=" pl-4">
        <h1 className=" font-semibold text-sm">{name}</h1>
        <h2 className=" text-xs">{email}</h2>
      </div>
    </article>
  )
}

Contact.defaultProps = {
  name: "nome",
  email: "email",
  photoPath: "login-illustration.svg"
}

export default Contact