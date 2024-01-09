const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //Fetching artifacts Byte code and ABI string part
  const chai = await Chai.deploy();

  await chai.deployed();

  console.log(`Chai deployed to: ${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
