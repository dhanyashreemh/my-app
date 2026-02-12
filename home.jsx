import { useState } from "react";
import Button from "../components/button";

function Home() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button label="submit" onClick={handleClick} />
      <p>{message}</p>
    </div>
  );
}

export default Home;
