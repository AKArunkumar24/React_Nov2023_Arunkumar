import React, { useState } from 'react';

const Profile = () => {
  const initialProfile = {
    username: 'Arunn',
    email: 'ak29arunkumar@gmail.com',
    avatar: 'https://templates-for-printing.com/wp-content/uploads/2020/11/A-Capital-Letter-Pink-with-black-contours.jpg',
    bio: 'We are a leading provider of Beauty products.',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    
    console.log('Updated Profile:', profile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#FFC0CB', padding: '20px' }}>
      <img
        src={profile.avatar}
        alt="User Avatar"
        style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '20px auto' }}
      />
      <h2>{profile.username}</h2>

      {isEditing ? (
        <>
         
          <div style={{ border: '1px solid #fff', padding: '10px', margin: '10px' }}>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
            />
          </div>

         
          <div style={{ border: '1px solid #fff', padding: '10px', margin: '10px' }}>
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
          </div>
        </>
      ) : (
        <>
        
          <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <p>Name: {profile.username}</p>
          </div>

         
          <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <p>Email: {profile.email}</p>
          </div>
        </>
      )}

      <p>{profile.bio}</p>

      {isEditing ? (
        
        <div style={{ marginTop: '20px' }}>
          <button style={{ backgroundColor: '#fff', padding: '10px', cursor: 'pointer' }} onClick={handleSaveClick}>
            Save Profile
          </button>
        </div>
      ) : (
        
        <div style={{ marginTop: '20px' }}>
          <button style={{ backgroundColor: '#fff', padding: '10px', cursor: 'pointer' }} onClick={handleEditClick}>
            Edit Profile
          </button>
        </div>
      )}

      <div style={{ marginTop: '50px', backgroundColor: 'pink', padding: '10px', color: 'Black' }}>
        <h3>Contact Us</h3>
        <p>Email: info@glammart.com</p>

        <h3>Follow Us</h3>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://s.yimg.com/fz/api/res/1.2/7wmcqjtgVFiMeMxLOlW3sw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/e9d6381f-6a16-39d9-b6f9-1467838c022c/t_500x300" alt="Instagram" style={{ width: '30px', marginRight: '10px' }} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png" alt="Twitter" style={{ width: '30px', marginRight: '10px' }} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" alt="Facebook" style={{ width: '30px' }} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
