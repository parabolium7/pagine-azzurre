import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import dotenv from 'dotenv'
import Web3 from 'web3'
import HDWalletProvider from '@truffle/hdwallet-provider'
import contract from './ABI/abi.js'
import { isAuth } from '../utils.js'

dotenv.config();

const paymentRouter = express.Router()

paymentRouter.post(
  '/', isAuth, 
  expressAsyncHandler( async (req, res) => {
    let response = "NULLA"
    const buyer = await User.find({ email : req.user.email })
    const seller = await User.find({ _id : req.body.item[0].seller._id })
    console.log(seller[0].account)
    const buyerPbKey = buyer[0].account
    const buyerPvKey = buyer[0].accountKey
    const valsToSend = (req.body.item.reduce((a, c) => a + c.priceVal * c.qty, 0)) * 100
    const InfuraUrl = process.env.INFURA_URL
    const provider = new HDWalletProvider(buyerPvKey, InfuraUrl)
    const web3 = new Web3(provider)
    const id = 5
    const deployedNetwork = contract.networks[id]
    const sContractInstance = new web3.eth.Contract(contract.abi, deployedNetwork.address)
    console.log("Vals to send", valsToSend)
    sContractInstance.methods.transfer(seller[0].account, valsToSend).send({from: buyerPbKey })
      .then( resp=> {
        console.log(resp.transactionHash)
        if(typeof resp.transactionHash === 'string') response = res
      })
      .catch( err => console.log("ERROR PAYMENT:", err))
    res.send(response.event)
  })
)

export default paymentRouter