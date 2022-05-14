import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
<div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compresshttps&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              autoFocus={true}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Mariama" name="name" />
          <label>Email</label>
          <input type="email" placeholder="mariama.alii98@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
