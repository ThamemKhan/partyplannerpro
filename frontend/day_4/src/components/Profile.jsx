import './Profile.css';
import { useState } from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// import SaveIcon from '@mui/icons-material/SaveIcon';
import { IoSaveOutline } from "react-icons/io5";
import profile from "../assets/profile.png"
import NavBar from './NavBar';
function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Sandy');
  const [email, setEmail] = useState('Sandy@example.com');
  const [mobile, setMobile] = useState('987654321');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can perform any client-side data validation here before updating the state
    console.log('Changes saved!');
  };

  return (
    <>
        <NavBar/>
      <div className="profile">
        <div className="pimg">
          <div className="profile_container">
            <div className="profile-header">
                <img src={profile} width={"90px"}></img>
              <h1>{username}</h1>
              <div className="underline" style={{ marginLeft: "50px", marginBottom: "0px" }}></div>
            </div>
            <div className="profile-details">
              <div className="user-info">
                <table>
                  <tbody>
                    <tr>
                      <td><h3>Username</h3></td>
                      <td>
                        <h4
                          id="username"
                          contentEditable={isEditing}
                          className={isEditing ? 'editable' : ''}
                          onBlur={(e) => setUsername(e.target.textContent)}
                        >
                          {username}
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td><h3>Email</h3></td>
                      <td>
                        <h4
                          id="email"
                          contentEditable={isEditing}
                          className={isEditing ? 'editable' : ''}
                          onBlur={(e) => setEmail(e.target.textContent)}
                        >
                          {email}
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td><h3>Mobile Number</h3></td>
                      <td>
                        <h4
                          id="mobile"
                          contentEditable={isEditing}
                          className={isEditing ? 'editable' : ''}
                          onBlur={(e) => setMobile(e.target.textContent)}
                        >
                          {mobile}
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {isEditing ? (
                <button className="save-button" onClick={handleSaveClick}>
                  <IoSaveOutline/>
                </button>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  <ModeEditOutlineIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;