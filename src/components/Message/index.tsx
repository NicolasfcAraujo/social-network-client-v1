interface IMessage {
  text: string,
  sender: boolean
}

const Message = ({text, sender}: IMessage) => {
  return (
    <article className={` w-full flex my-2 ${sender ? "justify-end" : "justify-start" }`}>
      {sender === false &&
        <div className=" bg-gray-500 w-2">
          <div className=" w-full h-full bg-white rounded-tr-full"></div>
        </div>
      }
      <div className={`  p-4 w-fit ${sender ? " rounded-b rounded-tl bg-yellow-500 text-yellow-950": " rounded-b rounded-tr bg-gray-500"}`}>
        <p>{text}</p>
      </div>
      {sender === true &&
        <div className=" bg-yellow-500 w-2">
          <div className=" w-full h-full bg-white rounded-tl-full"></div>
        </div>
      }
    </article>
  )
}

Message.defaultProps = {
  text: "Default text for test the message component",
  sender: true
}

export default Message