const MessageInput = () => {
  return (
    <div className=" p-4 border-t">
      <form className=" flex w-full">
        <div className=" grow">
          <input type="text" className=" bg-gray-200 rounded-l px-4 py-2 w-full outline-none focus:outline-yellow-500 focus:outline-offset-0" placeholder="Send a message..."/>
        </div>
        <button className=" w-28 bg-yellow-500 rounded-r">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
    
  )
}

export default MessageInput