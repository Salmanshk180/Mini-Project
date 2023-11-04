// import React, { useState } from 'react';
// import './Dashboard'; // Import your CSS file
// import Header from './Header'; // Import the Header component
// import Sidebar from './Sidebar'; // Import the Sidebar component

// const UserAccountPage = () => {
//   const [userDetails, setUserDetails] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'johndoe@example.com',
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//     // Handle saving the updated user details here (e.g., send to a server)
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   return (
//     <div className="user-account-page">
//       <Header /> {/* Add the Header component here */}
//       <div className="page-content">
//         <Sidebar />
//         <div className="profile-details">
//           <h1>User Profile</h1>
//           {isEditing ? (
//             <div className="edit-profile">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={userDetails.firstName}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={userDetails.lastName}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="email"
//                 value={userDetails.email}
//                 onChange={handleInputChange}
//               />
//               {/* Add more input fields for additional user details */}
//               <button onClick={handleSaveClick}>Save</button>
//             </div>
//           ) : (
//             <div className="view-profile">
//               <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
//               <p>Email: {userDetails.email}</p>
//               {/* Display additional user details here */}
//               <button onClick={handleEditClick}>Edit Profile</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserAccountPage;
