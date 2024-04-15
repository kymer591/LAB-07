import { useState } from "react";

export const Button = () => {

  function handleClick() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    alert("El valor aleatorio es: " + randomValue);
  }

  return (
    <button onClick={handleClick}>
    </button>
  );
};
