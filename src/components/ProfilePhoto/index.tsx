export interface IProfilePhoto {
  width: string,
  height: string,
  imagePath: string
}

const ProfilePhoto = ({ width, height, imagePath }:IProfilePhoto) => {
  return (
    <div className=" border bg-red-400 rounded-full overflow-hidden " style={{
      width: width,
      height: height
    }}>
      <img src={imagePath} alt="profile photo" />
    </div>
  )
}

ProfilePhoto.defaultProps = {
  width: "56px",
  height: "56px",
  imagePath: "login-illustration.svg"
}

export default ProfilePhoto