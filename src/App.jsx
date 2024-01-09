import { useState, useEffect } from "react";
import abi from "/home/ajdin/ChaiDapp/vite-project/src/contractJson/chai.json";
import { ethers } from "ethers";
import "./App.css";
import Memos from "./componenets/Memos";
import Buy from "./componenets/Buy";
import teaImage from "./images/Tea.png";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xfC33A59A91633f4a90501f9a44B2707654FdfbF2"; //Address Deployment Place
      const contractABI = abi.abi; //Fetching the Abi from the Abi .From the Abi to the Abi :)

      /* MetaMask Part */
      try {
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        );

        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);
  return (
    <div style={{ backgroundColor: "#000000", height: "100%" }}>
      <img src={teaImage} className="img-fluid" alt=".." width="100%" />
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>
      Connected account : {account}
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
