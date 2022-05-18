import React from "react";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Welcome {user.get("username")}</h3>
    </div>
  );
}

export const Header = () => {
  return App();
};
