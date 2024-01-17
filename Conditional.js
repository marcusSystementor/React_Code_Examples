import { useState } from "react";
import "./style.css";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1>Välkommen till appen</h1>
      <div className="content">
        {isLoggedIn ? (
          <p>Du är inloggad!</p>
        ) : (
          <p>Snälla logga in för att komma åt vår app</p>
        )}
        <div className="button">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conditional;
