import React from 'react';
//import { Clock } from './Clock';
//import { UserGreeting, GuestGreeting } from './Greetings';

import ToDoList from './01_ToDoList';

const App = () => {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
};

export default App;

// function App() {
//   const isLoggedIn = true;
//   return (
//     <div>
//       {/* Pass different interval values to each Clock */}
//       <Clock interval={1000} />
//       <Clock interval={3000} />
//       <Clock interval={5000} />
//       {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
//     </div>
//   );
// }

// export default App;
