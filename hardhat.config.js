require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

//0xfC33A59A91633f4a90501f9a44B2707654FdfbF2
/* It worked it was deployed I dont know how but it was deployed 
1-MAKE SURE YOU HAVE TEST NET MONEY!!!
*/