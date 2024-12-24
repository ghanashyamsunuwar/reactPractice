import './App.css'
import MainFile from './practise/Hooks/HOC/MainFile'
import PropsDrilling from './practise/Hooks/PropsDrilling'
import UseCallbackPrac from './practise/Hooks/UseCallbackPrac'
import Usecontext from './practise/Hooks/UseContext/Usecontext'
import UseMemoPrac from './practise/Hooks/UseMemoPrac'
import UsereducePrac from './practise/Hooks/UseReducePrac'
import UseRefPrac from './practise/Hooks/useRefPrac'
import Maps from './practise/Maps'
import SpreadOperator from './practise/SpreadOperator'

function App() {

  return (
    <>
    {/* <SpreadOperator/> */}
       <Maps/>
       <UseRefPrac/>
       <UsereducePrac/>
       <UseMemoPrac/>
       <UseCallbackPrac/>
       <Usecontext/>
       <MainFile/>
       <PropsDrilling/>

    </>
  )
}

export default App
// import React, { useState } from 'react';

// const App = () => {
//   // Initial state with users and their hobbies
//   const [users, setUsers] = useState([
//     { id: 1, name: 'Alice', hobbies: ['Reading', 'Cycling'] },
//     { id: 2, name: 'Bob', hobbies: ['Cooking', 'Swimming'] },
//   ]);

//   // Function to add a new hobby to a user
//   const addHobby = (userId, newHobby) => {
//     setUsers(users.map(user =>
//       user.id === userId
//         ? { ...user, hobbies: [...user.hobbies, newHobby] }
//         : user
//     ));
//   };

//   return (
//     <div>
//       <h1>Users and Hobbies</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <h2>{user.name}</h2>
//             <ul>
//               {user.hobbies.map((hobby, index) => (
//                 <li key={index}>{hobby}</li>
//               ))}
//             </ul>
//             <button onClick={() => addHobby(user.id, 'New Hobby')}>Add Hobby</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
