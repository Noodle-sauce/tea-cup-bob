/*NOTE: Problem with withdrawing function to accoutn Im not sure why*/
//
//
// import React, { useState } from "react";
// import "./WithdrawFunds.css";
// import withdrawAllFunds from "./withdrawFunds";

// const WithdrawFunds = ({ state }) => {
//   const [withdrawalStatus, setWithdrawalStatus] = useState(null);

//   const handleWithdrawal = async () => {
//     if (state.contract && state.signer) {
//       try {
//         const success = await withdrawAllFunds(state.contract, state.signer);

//         if (success) {
//           console.log("Funds withdrawn successfully!");
//           setWithdrawalStatus("success");
//         } else {
//           console.error("Failed to withdraw funds.");
//           setWithdrawalStatus("failed");
//         }
//       } catch (error) {
//         console.error("Error handling withdrawal:", error);
//         setWithdrawalStatus("failed");
//       }
//     }
//   };

//   return (
//     <div className="withdraw-funds-container">
//       <button onClick={handleWithdrawal} className="withdraw-button">
//         Withdraw All Funds
//       </button>
//       {withdrawalStatus === "success" && (
//         <p className="success-message">Funds withdrawn successfully!</p>
//       )}
//       {withdrawalStatus === "failed" && (
//         <p className="error-message">Failed to withdraw funds.</p>
//       )}
//     </div>
//   );
// };

// export default WithdrawFunds;
