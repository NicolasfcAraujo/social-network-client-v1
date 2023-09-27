import { useEffect, useState } from "react"
import { logout } from "../../utils/redux/features/userSlice"
import { useAppDispatch, useAppSelector } from "../../utils/redux/store"
import Button from "../Button"
import Contact from "../Contact"
import ProfilePhoto from "../ProfilePhoto"
import axios from "axios"
import { userType } from "../../utils/types"

const Contacts = () => {

  const [ search, setSearch ] = useState<string>("")
  const [ contacts, setContacts ] = useState<userType[]>([])

  const { name, email, id } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_URL}/user`).then((res) => {
      const allContacts = res.data.filter((contact: userType) => contact.id != id).map((contact: userType) => {
        return {
          id: contact.id,
          name: contact.name,
          email: contact.email
        }
      })
      setContacts([...allContacts])
    }).catch((error) => {
      console.log("contacts error")
    })
  }, [])

  return (
    <section className=" h-screen md:w-80 border">
      <div className=" h-36 border-b p-4 flex flex-col justify-between">
        <div className=" flex">
          <ProfilePhoto width="64px" height="64px"/>
          <div className=" pl-4">
            <h1 className=" font-semibold">{name}</h1>
            <h2 className=" text-xs text-gray-700">{email}</h2>
          </div>
        </div>
        <Button textColor="#b91c1c" text="Log Out" func={() => dispatch(logout())}/>
      </div>
      <div className=" center-div px-4 pt-4">
        <form className=" w-full">
          <input onChange={(e) => setSearch(e.target.value)} className=" input text-sm" placeholder="Search for someone's email..."/>
        </form>
      </div>
      <div className=" p-4 overflow-y-scroll" style={{ height: "calc(100vh - 144px)" }}>
        {contacts.filter(contact => {
          if (search == "" || contact.email.includes(search)) {
            return true
          } else {
            return false
          }
        }).map((contact) => {
          return(
            <Contact id={contact.id} name={contact.name} email={contact.email}/>
          )
        })}
      </div>
    </section>
  )
}

export default Contacts