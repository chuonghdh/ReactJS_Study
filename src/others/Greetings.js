import React from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
  
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

// Correct named exports
export { UserGreeting, GuestGreeting };