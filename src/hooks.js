import { useState } from "react";

function useFlip() {
  const [isUp, setIsUp] = useState(true);
  function flipCard() {
    setIsUp((isUp) => !isUp);
  }
  return [isUp, flipCard];
}

export default useFlip;
