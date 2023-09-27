import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IUser {
  isLogged: boolean,
  id: number | "",
  name: string,
  email: string,
  profilePhotoPath: string,
  currentContact: { email: string, name: string, id: number | "" }
}

const initialState: IUser = {
  isLogged: false,
  id: "",
  name: "",
  email: "",
  profilePhotoPath: "",
  currentContact: { email: "", name: "", id: "" }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<{ id: number, name: string, email:string }>) => {
      state.isLogged = true
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
    },
    logout: (state) => {
      state.isLogged = false
      state.id = ""
      state.name = ""
      state.email = ""
      state.profilePhotoPath = ""
      window.location.replace("/login")
    },
    changeCurrentContact: (state, action: PayloadAction<{ name: string, email: string, id: number | "" }>) => {
      state.currentContact = {name: action.payload.name, email: action.payload.email, id: action.payload.id}
    }
  }
})

export const {
  changeUser,
  logout,
  changeCurrentContact
} = userSlice.actions

export default userSlice.reducer