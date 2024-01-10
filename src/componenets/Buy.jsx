import React from "react";
import "./Buy.css";
import { ethers } from "ethers";

const Buy = ({ state }) => {
  const handleBuyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = { value: ethers.utils.parseEther("0.001") }; // static
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("TRANSACTION SUCCESS!");
  };

  return (
    <div className="buy-container">
      <form onSubmit={handleBuyChai}>
        <label htmlFor="name" className="input-label">
          Name:
          <input type="text" id="name" className="input-field" />
        </label>

        <label htmlFor="message" className="input-label">
          Message:
          <input type="text" id="message" className="input-field" />
        </label>
        <button type="submit" className="pay-button">
          Pay
        </button>
      </form>
    </div>
  );
};

export default Buy;
