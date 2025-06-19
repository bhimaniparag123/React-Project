import React from 'react';
import './App.css';
import UserProfileCard from './Components/UserProfileCard';

function App() {
  return (
    <div className="App">
      <div className="card-row">
        <UserProfileCard
          name="Jane Doe"
          email="jane.doe@example.com"
          Age="25"
          profilePicture="https://randomuser.me/api/portraits/women/44.jpg"
          phone="+1234567890"
          address="123 Main St, Cityville"
          jobTitle="Frontend Developer"
          company="Tech Corp"
          
        />

        <UserProfileCard
          name="John Smith"
          email="john.smith@test.in"
          Age="30"
          profilePicture="https://randomuser.me/api/portraits/men/32.jpg"
          phone="+1987654321"
          address="456 Elm St, Townsville"
          jobTitle="Backend Engineer"
          company="DevWorks"
        />

        <UserProfileCard
          name="Alice Johnson"
          email="alice.j@test.in"
          Age="28"
          profilePicture="https://randomuser.me/api/portraits/women/65.jpg"
          phone="+1122334455"
          address="789 Oak St, DevCity"
          jobTitle="Full Stack Developer"
          company="CodeBase"
        />

        <UserProfileCard
          name="blindlyround Johnson"
          email="Johnson.b@gmail.com"
          Age="58"
          profilePicture="https://randomuser.me/api/portraits/men/0.jpg"
          phone="+35465756242"
          address="469 kulu St, Orgej"
          jobTitle="laravel Developer"
          company="Codeinfotech"
        />

        <UserProfileCard
          name="bidon each"
          email="bidon.each@test.in"
          Age="65"
          profilePicture="https://randomuser.me/api/portraits/men/82.jpg"
          phone="+35465756242"
          address="469 kulu St, Orgej"
          jobTitle="laravel Developer"
          company="Codeinfotech"
        />

        <UserProfileCard
          name="bidon each"
          email="bidon.each@test.in"
          Age="65"
          profilePicture="https://randomuser.me/api/portraits/men/82.jpg"
          phone="+35465756242"
          address="469 kulu St, Orgej"
          jobTitle="laravel Developer"
          company="Codeinfotech"
        />

        <UserProfileCard
          name="bidon each"
          email="bidon.each@test.in"
          Age="65"
          profilePicture="https://randomuser.me/api/portraits/men/82.jpg"
          phone="+35465756242"
          address="469 kulu St, Orgej"
          jobTitle="laravel Developer"
          company="Codeinfotech"
        />
      </div>
    </div>
  );
}
 
export default App;