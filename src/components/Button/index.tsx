export interface IButton {
  type: "button" | "submit",
  color: string,
  text: string,
  width: string,
  function: () => void | null
}

const Button = (props: IButton) => {
  return (
    <button type={props.type} onClick={props.function} className=" center-div py-2 rounded"
      style={{
        background: `${props.color}`,
        width: `${props.width}`
      }}
    >
      {props.text}
    </button>
  )
}

export default Button