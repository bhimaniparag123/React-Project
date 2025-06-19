import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ name, email, Age, profilePicture, phone, address, jobTitle, company, website }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p className="email"><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Age:</strong> {Age}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Company:</strong> {company}</p>
      {website && (
        <p>
          <strong>Website:</strong>{' '}
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      )}
    </div>
  );
};

export default UserProfileCard;