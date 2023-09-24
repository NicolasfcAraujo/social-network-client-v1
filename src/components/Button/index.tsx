export interface IButton {
  type: "button" | "submit",
  color: string,
  textColor: string,
  text: string,
  width: string,
  func: () => void
}

const Button = ({ type, color, text, textColor, width, func }: IButton) => {
  return (
    <button type={type} onClick={func} className=" center-div py-2 rounded"
      style={{
        background: color,
        width: width,
        color: textColor
      }}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  color: "#FFF",
  text: "Button",
  textColor: "black",
  width: "100%",
  func: () => console.log("button")
}

export default Button