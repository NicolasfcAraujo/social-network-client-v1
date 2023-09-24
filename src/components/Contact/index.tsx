import ProfilePhoto from "../ProfilePhoto"

const Contact = () => {
  return (
    <article className=" w-full h-24 rounded p-4 border flex mb-4 cursor-pointer bg-white hover:bg-gray-50">
      <div>
        <ProfilePhoto/>
      </div>
      <div className=" pl-4">
        <h1 className=" font-semibold text-sm">Contact Name</h1>
        <h2 className=" text-xs">Contact Email</h2>
      </div>
    </article>
  )
}

export default Contact