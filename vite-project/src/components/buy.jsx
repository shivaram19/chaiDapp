import React,{ useState } from 'react'
// import { ethers } from 'ethers'
import { ethers } from "ethers"
// const ethers = require("hardhat")
// const { ethers } = require("hardhat")
import { parseUnits } from "ethers"

const Buy = ({ state }) => {
  const [ name, setName ] = useState("")
  const [ message,setMessage ] = useState("")



  // const buyChai = async (event) => {
  //   event.preventDefault();
  //   const { contract } = state;
  //   const name = document.querySelector("#name").value;
  //   const message = document.querySelector("#message").value;
  //   //const amount = document.querySelector("#amount").value;
  //   const amount = { value: parseUnits("0.05","ether") }
  //   const transaction = await contract.buyChai(name, message, amount)
  //   await transaction.wait();
  //   alert("Transaction is successul");
  //   window.location.reload();
  // }

  const buyChai = async (event) => {
    event.preventdefault()
    console.log("!")
    const { contract } = state
    console.log("2")
    const amount = { value: parseUnits("0.05", "ether") }
    console.log("3")
    const transaction = await contract.buyChai(name,message,amount)
    await transaction.wait();
    alert("transaction is done")
    window.location.reload();
  }
  // console.log(name,message)
  return (
    <div className="buy">
      <form onSubmit={buyChai} >
        <label> name:</label>
        <input type='text'
          placeholder='shivaram'  
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Message: </label>
        <input type='text' 
          placeholder='coffee is good'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Pay" />
      </form>
    </div>

    // <div className="center">
    //   <h1>Thanks</h1>
    //   <form onSubmit={buyChai}>
    //     <div className="inputbox">
    //       <input type="text" required="required" id="name" />
    //       <span>Name</span>
    //     </div>
    //     <div className="inputbox">
    //       <input type="text" required="required" id="message" />
    //       <span>Message</span>
    //     </div>
    //     <div className="inputbox">
    //       <input type="submit" value="Pay" disabled={!state.contract} />
    //     </div>
    //   </form>

    // </div>
  )
}

export default Buy;