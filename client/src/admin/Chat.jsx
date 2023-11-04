// import React, { useState } from 'react';
// import './Dashboard'; // Import your CSS file
// import Sidebar from './Sidebar';
// import Header from './Header';

// const ChatPage = () => {
//   const [selectedChat, setSelectedChat] = useState(null);

//   return (
//     <div className="chat-page">
//         <Header/>
//         <Sidebar/>
//       <div className="chat-sidebar">
//         <div className="chat-header">WhatsApp Chat</div>
//         <div className="chat-accounts">
//           {/* List of chat accounts */}
//           <div
//             className={`chat-account ${selectedChat === 'contact1' ? 'active' : ''}`}
//             onClick={() => setSelectedChat('contact1')}
//           >
//             Contact 1
//           </div>
//           <div
//             className={`chat-account ${selectedChat === 'contact2' ? 'active' : ''}`}
//             onClick={() => setSelectedChat('contact2')}
//           >
//             Contact 2
//           </div>
//           {/* Add more chat accounts as needed */}
//         </div>
//       </div>
//       <div className="chat-messages">
//         {/* Display chat messages here */}
//         {selectedChat && (
//           <div className="chat-header">Chat with {selectedChat}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatPage;
