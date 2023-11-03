import './App.css'
import React,{ useEffect, useState } from 'react'
import abi from './contractJSON/chai.json'
import { ethers } from "ethers"
import Buy from './components/buy'
import Memos from './components/memos'

function App() {

  const [account, setAccount] = useState("account not connected yet")
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x07b294Ffd91F72D8815Eac6984BC72b45096c454"
      const contractABI = abi.abi
      // Metamask 
      // 1.Inorder to perform transactions in the goerli network 
      // 2.metamask consits of infura api which connects to the blockchain
      try {
        const { ethereum } = window
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })
        // window.ethereum.enable("accounts changed",() => {
        //   window.location.reload()
        // })
        setAccount(account);
        let signer = null;

        let provider;

        if (window.ethereum == null) {

          console.log("MetaMask not installed; using read-only defaults")
          // provider = ethers.getDefaultProvider()

        } else {

          provider = new ethers.BrowserProvider(window.ethereum)
          signer = await provider.getSigner();
        }
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner() ;
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        setState({ provider, signer, contract })
  
      } catch (err) {
        alert(err)
      }
    }
    template();
  },[])

  return (
    <>
     <div className="App">
      COONECTED ACCOUNT : { account }
      <Buy state = { state } ></Buy>

      {/* <Memos state={state} ></Memos> */}
     </div>
    </>
  )
}

export default App
