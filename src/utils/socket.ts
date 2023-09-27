import { io } from "socket.io-client";

const URL = process.env.REACT_APP_SERVER_URL as string
const socket = io(URL, { autoConnect: false })

export default socket