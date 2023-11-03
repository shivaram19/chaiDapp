const hre = require("hardhat")
async function main() {
  // first line under this is fecthcing the artifacts from the smartcontracts :::::: fetching bytecode and ABI
  const Chai = await hre.ethers.getContractFactory("chai");
  // creating an instance of the smartcontract
  const chai = await Chai.deploy();

  await chai.waitForDeployment();
  console.log("deployed contact address is " ,`${chai.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x951870a07Ae28Fb5CEE90256333329b600870fbd

// 0xec5c814d2A4bA89a17D9a80cf4243B0fb59fD56A --latest deployed contact address 