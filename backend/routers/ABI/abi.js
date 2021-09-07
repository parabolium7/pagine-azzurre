export default {
  "contractName": "Valazco",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokenMinting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "Owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokenMinting\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"constant\":true,\"inputs\":[],\"name\":\"Owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/german/Work/valazaco_token/contracts/Valazco.sol\":\"Valazco\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/german/Work/valazaco_token/contracts/Valazco.sol\":{\"keccak256\":\"0x892853e6d508b91a4a818d258720e76f591867b0ad9ce6120e85dca1a3ed65cb\",\"urls\":[\"bzz-raw://3e2009c43dc1e28191126695c832879b743dc3dee3729aebcb89a23358c0a5cd\",\"dweb:/ipfs/QmcGpFXEx8gr6JvU1W2jfoWYR5Yvb8mFkeGAsRVA5PtWvL\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600381526020017f56414c000000000000000000000000000000000000000000000000000000000081525060009080519060200190620000a09291906200020d565b506040518060400160405280600d81526020017f56616c617a636f20546f6b656e0000000000000000000000000000000000000081525060019080519060200190620000ee9291906200020d565b5060028060006101000a81548160ff021916908360ff160217905550632faf080060038190555060035460056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6003546040518082815260200191505060405180910390a3620002bc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025057805160ff191683800117855562000281565b8280016001018555821562000281579182015b828111156200028057825182559160200191906001019062000263565b5b50905062000290919062000294565b5090565b620002b991905b80821115620002b55760008160009055506001016200029b565b5090565b90565b61121980620002cc6000396000f3fe6080604052600436106100a75760003560e01c806395d89b411161006457806395d89b4114610303578063a0712d6814610393578063a9059cbb146103e6578063b4a99a4e14610459578063cae9ca51146104b0578063dd62ed3e146105ba576100a7565b806306fdde03146100ac578063095ea7b31461013c57806318160ddd146101af57806323b872dd146101da578063313ce5671461026d57806370a082311461029e575b600080fd5b3480156100b857600080fd5b506100c161063f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014857600080fd5b506101956004803603604081101561015f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106dd565b604051808215151515815260200191505060405180910390f35b3480156101bb57600080fd5b506101c46107cf565b6040518082815260200191505060405180910390f35b3480156101e657600080fd5b50610253600480360360608110156101fd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061081a565b604051808215151515815260200191505060405180910390f35b34801561027957600080fd5b50610282610aaa565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102aa57600080fd5b506102ed600480360360208110156102c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610abd565b6040518082815260200191505060405180910390f35b34801561030f57600080fd5b50610318610b06565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035857808201518184015260208101905061033d565b50505050905090810190601f1680156103855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561039f57600080fd5b506103cc600480360360208110156103b657600080fd5b8101908080359060200190929190505050610ba4565b604051808215151515815260200191505060405180910390f35b3480156103f257600080fd5b5061043f6004803603604081101561040957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d47565b604051808215151515815260200191505060405180910390f35b34801561046557600080fd5b5061046e610ed0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104bc57600080fd5b506105a0600480360360608110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561051a57600080fd5b82018360208201111561052c57600080fd5b8035906020019184600183028401116401000000008311171561054e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ef6565b604051808215151515815260200191505060405180910390f35b3480156105c657600080fd5b50610629600480360360408110156105dd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611129565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600560008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460035403905090565b6000610865600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111b0565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061092e600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111b0565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109f7600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111ca565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b505050505081565b60003373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4f6e6c79204f776e65722063616e206d696e740000000000000000000000000081525060200191505060405180910390fd5b610cb2600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111ca565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d01600354836111ca565b6003819055507f909d77c91ef8b08f09673a08260bad8ed7d1bba2280dd2f9877e9f2c20a8443b826040518082815260200191505060405180910390a160019050919050565b6000610d92600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111b0565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e1e600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111ca565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110b757808201518184015260208101905061109c565b50505050905090810190601f1680156110e45780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561110657600080fd5b505af115801561111a573d6000803e3d6000fd5b50505050600190509392505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211156111bf57600080fd5b818303905092915050565b60008183019050828110156111de57600080fd5b9291505056fea265627a7a72315820d9fc9cefcbcdf0d855edbf536c0130e2a982802e4fc637b7a8c92e6607b1265264736f6c63430005100032",
  "deployedBytecode": "0x6080604052600436106100a75760003560e01c806395d89b411161006457806395d89b4114610303578063a0712d6814610393578063a9059cbb146103e6578063b4a99a4e14610459578063cae9ca51146104b0578063dd62ed3e146105ba576100a7565b806306fdde03146100ac578063095ea7b31461013c57806318160ddd146101af57806323b872dd146101da578063313ce5671461026d57806370a082311461029e575b600080fd5b3480156100b857600080fd5b506100c161063f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014857600080fd5b506101956004803603604081101561015f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106dd565b604051808215151515815260200191505060405180910390f35b3480156101bb57600080fd5b506101c46107cf565b6040518082815260200191505060405180910390f35b3480156101e657600080fd5b50610253600480360360608110156101fd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061081a565b604051808215151515815260200191505060405180910390f35b34801561027957600080fd5b50610282610aaa565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102aa57600080fd5b506102ed600480360360208110156102c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610abd565b6040518082815260200191505060405180910390f35b34801561030f57600080fd5b50610318610b06565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035857808201518184015260208101905061033d565b50505050905090810190601f1680156103855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561039f57600080fd5b506103cc600480360360208110156103b657600080fd5b8101908080359060200190929190505050610ba4565b604051808215151515815260200191505060405180910390f35b3480156103f257600080fd5b5061043f6004803603604081101561040957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d47565b604051808215151515815260200191505060405180910390f35b34801561046557600080fd5b5061046e610ed0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104bc57600080fd5b506105a0600480360360608110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561051a57600080fd5b82018360208201111561052c57600080fd5b8035906020019184600183028401116401000000008311171561054e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ef6565b604051808215151515815260200191505060405180910390f35b3480156105c657600080fd5b50610629600480360360408110156105dd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611129565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600560008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460035403905090565b6000610865600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111b0565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061092e600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111b0565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109f7600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111ca565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b505050505081565b60003373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4f6e6c79204f776e65722063616e206d696e740000000000000000000000000081525060200191505060405180910390fd5b610cb2600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111ca565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d01600354836111ca565b6003819055507f909d77c91ef8b08f09673a08260bad8ed7d1bba2280dd2f9877e9f2c20a8443b826040518082815260200191505060405180910390a160019050919050565b6000610d92600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111b0565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e1e600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111ca565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110b757808201518184015260208101905061109c565b50505050905090810190601f1680156110e45780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561110657600080fd5b505af115801561111a573d6000803e3d6000fd5b50505050600190509392505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211156111bf57600080fd5b818303905092915050565b60008183019050828110156111de57600080fd5b9291505056fea265627a7a72315820d9fc9cefcbcdf0d855edbf536c0130e2a982802e4fc637b7a8c92e6607b1265264736f6c63430005100032",
  "sourceMap": "1621:2497:0:-;;;1906:264;8:9:-1;5:2;;;30:1;27;20:12;5:2;1906:264:0;1945:10;1937:5;;:18;;;;;;;;;;;;;;;;;;1965:14;;;;;;;;;;;;;;;;;:6;:14;;;;;;;;;;;;:::i;:::-;;1989:22;;;;;;;;;;;;;;;;;:4;:22;;;;;;;;;;;;:::i;:::-;;2032:1;2021:8;;:12;;;;;;;;;;;;;;;;;;2058:9;2043:12;:24;;;;2095:12;;2077:8;:15;2086:5;;;;;;;;;;;2077:15;;;;;;;;;;;;;;;:30;;;;2143:5;;;;;;;;;;;2122:41;;2139:1;2122:41;;;2150:12;;2122:41;;;;;;;;;;;;;;;;;;1621:2497;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "1621:2497:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4101:8;;;1698:19;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1698:19:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1698:19:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3009:204;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3009:204:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3009:204:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2176:110;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2176:110:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3219:352;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3219:352:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3219:352:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1723:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1723:21:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2292:118;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2292:118:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2292:118:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1672:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1672:20:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1672:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2694:309;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2694:309:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2694:309:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2416:272;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2416:272:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2416:272:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1781:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1781:20:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3728:328;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3728:328:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3728:328:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;3728:328:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;3728:328:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;3728:328:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3728:328:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3577:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3577:145:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3577:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1698:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3009:204::-;3072:12;3127:6;3096:7;:19;3104:10;3096:19;;;;;;;;;;;;;;;:28;3116:7;3096:28;;;;;;;;;;;;;;;:37;;;;3169:7;3148:37;;3157:10;3148:37;;;3178:6;3148:37;;;;;;;;;;;;;;;;;;3202:4;3195:11;;3009:204;;;;:::o;2176:110::-;2220:4;2259:8;:20;2276:1;2259:20;;;;;;;;;;;;;;;;2243:12;;:36;2236:43;;2176:110;:::o;3219:352::-;3296:12;3337:31;3345:8;:14;3354:4;3345:14;;;;;;;;;;;;;;;;3361:6;3337:7;:31::i;:::-;3320:8;:14;3329:4;3320:14;;;;;;;;;;;;;;;:48;;;;3406:42;3414:7;:13;3422:4;3414:13;;;;;;;;;;;;;;;:25;3428:10;3414:25;;;;;;;;;;;;;;;;3441:6;3406:7;:42::i;:::-;3378:7;:13;3386:4;3378:13;;;;;;;;;;;;;;;:25;3392:10;3378:25;;;;;;;;;;;;;;;:70;;;;3473:29;3481:8;:12;3490:2;3481:12;;;;;;;;;;;;;;;;3495:6;3473:7;:29::i;:::-;3458:8;:12;3467:2;3458:12;;;;;;;;;;;;;;;:44;;;;3532:2;3517:26;;3526:4;3517:26;;;3536:6;3517:26;;;;;;;;;;;;;;;;;;3560:4;3553:11;;3219:352;;;;;:::o;1723:21::-;;;;;;;;;;;;;:::o;2292:118::-;2352:12;2383:8;:20;2392:10;2383:20;;;;;;;;;;;;;;;;2376:27;;2292:118;;;:::o;1672:20::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2694:309::-;2738:12;2779:10;2770:19;;:5;;;;;;;;;;;:19;;;2762:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2846:38;2854:8;:20;2863:10;2854:20;;;;;;;;;;;;;;;;2876:7;2846;:38::i;:::-;2823:8;:20;2832:10;2823:20;;;;;;;;;;;;;;;:61;;;;2909:30;2917:12;;2931:7;2909;:30::i;:::-;2894:12;:45;;;;2954:21;2967:7;2954:21;;;;;;;;;;;;;;;;;;2992:4;2985:11;;2694:309;;;:::o;2416:272::-;2475:12;2522:37;2530:8;:20;2539:10;2530:20;;;;;;;;;;;;;;;;2552:6;2522:7;:37::i;:::-;2499:8;:20;2508:10;2499:20;;;;;;;;;;;;;;;:60;;;;2584:29;2592:8;:12;2601:2;2592:12;;;;;;;;;;;;;;;;2606:6;2584:7;:29::i;:::-;2569:8;:12;2578:2;2569:12;;;;;;;;;;;;;;;:44;;;;2649:2;2628:32;;2637:10;2628:32;;;2653:6;2628:32;;;;;;;;;;;;;;;;;;2677:4;2670:11;;2416:272;;;;:::o;1781:20::-;;;;;;;;;;;;;:::o;3728:328::-;3817:12;3872:6;3841:7;:19;3849:10;3841:19;;;;;;;;;;;;;;;:28;3861:7;3841:28;;;;;;;;;;;;;;;:37;;;;3914:7;3893:37;;3902:10;3893:37;;;3923:6;3893:37;;;;;;;;;;;;;;;;;;3963:7;3940:47;;;3988:10;4000:6;4016:4;4023;3940:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3940:88:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3940:88:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3940:88:0;;;;4045:4;4038:11;;3728:328;;;;;:::o;3577:145::-;3654:14;3687:7;:19;3695:10;3687:19;;;;;;;;;;;;;;;:28;3707:7;3687:28;;;;;;;;;;;;;;;;3680:35;;3577:145;;;;:::o;194:115::-;250:6;281:1;276;:6;;268:15;;;;;;301:1;297;:5;293:9;;194:115;;;;:::o;73:::-;129:6;155:1;151;:5;147:9;;179:1;174;:6;;166:15;;;;;;73:115;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\n//Safe Math Interface\n\ncontract SafeMath {\n\n    function safeAdd(uint a, uint b) internal pure returns (uint c) {\n        c = a + b;\n        require(c >= a);\n    }\n\n    function safeSub(uint a, uint b) internal pure returns (uint c) {\n        require(b <= a);\n        c = a - b;\n    }\n\n    function safeMul(uint a, uint b) internal pure returns (uint c) {\n        c = a * b;\n        require(a == 0 || c / a == b);\n    }\n\n    function safeDiv(uint a, uint b) internal pure returns (uint c) {\n        require(b > 0);\n        c = a / b;\n    }\n}\n\n\n//ERC Token Standard #20 Interface\n\ncontract ERC20Interface {\n    function totalSupply() public view returns (uint);\n    function balanceOf(address tokenOwner) public view returns (uint balance);\n    function allowance(address tokenOwner, address spender) public view returns (uint remaining);\n    function transfer(address to, uint tokens) public returns (bool success);\n    function approve(address spender, uint tokens) public returns (bool success);\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\n    function mint(uint amount) public returns (bool success);\n\n    event Transfer(address indexed from, address indexed to, uint tokens);\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\n    event TokenMinting(uint amount);\n}\n\n\n//Contract function to receive approval and execute function in one call\n\ncontract ApproveAndCallFallBack {\n    function receiveApproval(address from, uint256 tokens, address token, bytes memory data) public;\n}\n\n//Actual token contract\n\ncontract Valazco is ERC20Interface, SafeMath {\n    string public symbol;\n    string public  name;\n    uint8 public decimals;\n    uint private _totalSupply;\n    address public Owner;\n\n    mapping(address => uint) balances;\n    mapping(address => mapping(address => uint)) allowed;\n\n    constructor() public {\n        Owner = msg.sender;\n        symbol = \"VAL\";\n        name = \"Valazco Token\";\n        decimals = 2;\n        _totalSupply = 800000000;\n        balances[Owner] = _totalSupply;\n        emit Transfer(address(0), Owner, _totalSupply);\n    }\n\n    function totalSupply() public view returns (uint) {\n        return _totalSupply  - balances[address(0)];\n    }\n\n    function balanceOf(address tokenOwner) public view returns (uint balance) {\n        return balances[tokenOwner];\n    }\n\n    function transfer(address to, uint tokens) public returns (bool success) {\n        balances[msg.sender] = safeSub(balances[msg.sender], tokens);\n        balances[to] = safeAdd(balances[to], tokens);\n        emit Transfer(msg.sender, to, tokens);\n        return true;\n    }\n\n    function mint(uint _amount) public returns (bool success) {\n        require(Owner == msg.sender, \"Only Owner can mint\");\n        balances[msg.sender] = safeAdd(balances[msg.sender], _amount);\n        _totalSupply = safeAdd(_totalSupply, _amount);\n        emit TokenMinting(_amount);\n        return true;\n    }\n\n    function approve(address spender, uint tokens) public returns (bool success) {\n        allowed[msg.sender][spender] = tokens;\n        emit Approval(msg.sender, spender, tokens);\n        return true;\n    }\n\n    function transferFrom(address from, address to, uint tokens) public returns (bool success) {\n        balances[from] = safeSub(balances[from], tokens);\n        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);\n        balances[to] = safeAdd(balances[to], tokens);\n        emit Transfer(from, to, tokens);\n        return true;\n    }\n\n    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {\n        return allowed[tokenOwner][spender];\n    }\n\n    function approveAndCall(address spender, uint tokens, bytes memory data) public returns (bool success) {\n        allowed[msg.sender][spender] = tokens;\n        emit Approval(msg.sender, spender, tokens);\n        ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, address(this), data);\n        return true;\n    }\n\n    function () external payable {\n        revert();\n    }\n}\n",
  "sourcePath": "/Users/german/Work/valazaco_token/contracts/Valazco.sol",
  "ast": {
    "absolutePath": "/Users/german/Work/valazaco_token/contracts/Valazco.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        186
      ],
      "ERC20Interface": [
        174
      ],
      "SafeMath": [
        96
      ],
      "Valazco": [
        514
      ]
    },
    "id": 515,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 96,
        "linearizedBaseContracts": [
          96
        ],
        "name": "SafeMath",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 22,
              "nodeType": "Block",
              "src": "137:51:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8,
                      "src": "147:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 13,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 11,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "151:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 12,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "155:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "151:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "147:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 15,
                  "nodeType": "ExpressionStatement",
                  "src": "147:9:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 17,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8,
                          "src": "174:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 18,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3,
                          "src": "179:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "174:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        532,
                        533
                      ],
                      "referencedDeclaration": 532,
                      "src": "166:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "166:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21,
                  "nodeType": "ExpressionStatement",
                  "src": "166:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 23,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeAdd",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "90:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "90:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "98:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "98:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "89:16:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "129:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "129:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "128:8:0"
            },
            "scope": 96,
            "src": "73:115:0",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 44,
              "nodeType": "Block",
              "src": "258:51:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 35,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "276:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "281:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "276:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 32,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        532,
                        533
                      ],
                      "referencedDeclaration": 532,
                      "src": "268:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 36,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "268:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37,
                  "nodeType": "ExpressionStatement",
                  "src": "268:15:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 42,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 38,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "293:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 39,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "297:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 40,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27,
                        "src": "301:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "297:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "293:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 43,
                  "nodeType": "ExpressionStatement",
                  "src": "293:9:0"
                }
              ]
            },
            "documentation": null,
            "id": 45,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeSub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "211:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "219:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "219:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "210:16:0"
            },
            "returnParameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "250:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "249:8:0"
            },
            "scope": 96,
            "src": "194:115:0",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "379:65:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 54,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "389:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 57,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "393:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "397:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "393:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "389:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59,
                  "nodeType": "ExpressionStatement",
                  "src": "389:9:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 69,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 61,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "416:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "421:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "416:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 68,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 66,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 64,
                              "name": "c",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52,
                              "src": "426:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 65,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47,
                              "src": "430:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "426:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49,
                            "src": "435:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "426:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "416:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        532,
                        533
                      ],
                      "referencedDeclaration": 532,
                      "src": "408:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "408:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "408:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "332:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "340:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "331:16:0"
            },
            "returnParameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "371:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:8:0"
            },
            "scope": 96,
            "src": "315:129:0",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 94,
              "nodeType": "Block",
              "src": "514:50:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "532:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 84,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "536:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "532:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 82,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        532,
                        533
                      ],
                      "referencedDeclaration": 532,
                      "src": "524:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "524:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "524:14:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 88,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "548:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "552:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77,
                        "src": "556:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "552:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "548:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 93,
                  "nodeType": "ExpressionStatement",
                  "src": "548:9:0"
                }
              ]
            },
            "documentation": null,
            "id": 95,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeDiv",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 75,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 95,
                  "src": "467:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 95,
                  "src": "475:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:16:0"
            },
            "returnParameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 95,
                  "src": "506:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:8:0"
            },
            "scope": 96,
            "src": "450:114:0",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 515,
        "src": "48:518:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 174,
        "linearizedBaseContracts": [
          174
        ],
        "name": "ERC20Interface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 101,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "655:2:0"
            },
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 99,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "679:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 98,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "678:6:0"
            },
            "scope": 174,
            "src": "635:50:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 108,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 108,
                  "src": "709:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "708:20:0"
            },
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 108,
                  "src": "750:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "750:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "749:14:0"
            },
            "scope": 174,
            "src": "690:74:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 117,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 110,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "788:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "788:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 112,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "808:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "787:37:0"
            },
            "returnParameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "846:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "846:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "845:16:0"
            },
            "scope": 174,
            "src": "769:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 126,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 126,
                  "src": "885:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "885:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 126,
                  "src": "897:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "897:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "884:25:0"
            },
            "returnParameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 126,
                  "src": "926:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:14:0"
            },
            "scope": 174,
            "src": "867:73:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 135,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 128,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 135,
                  "src": "962:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 127,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "962:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 130,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 135,
                  "src": "979:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 129,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "979:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:30:0"
            },
            "returnParameters": {
              "id": 134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 133,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 135,
                  "src": "1008:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 132,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1007:14:0"
            },
            "scope": 174,
            "src": "945:77:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 146,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 137,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "1049:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 136,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 139,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "1063:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 141,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "1075:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1048:39:0"
            },
            "returnParameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "1104:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1104:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1103:14:0"
            },
            "scope": 174,
            "src": "1027:91:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 153,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 148,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 153,
                  "src": "1137:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 147,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1136:13:0"
            },
            "returnParameters": {
              "id": 152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 151,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 153,
                  "src": "1166:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 150,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1166:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1165:14:0"
            },
            "scope": 174,
            "src": "1123:57:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 161,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 161,
                  "src": "1201:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1201:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 157,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 161,
                  "src": "1223:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1223:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 159,
                  "indexed": false,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 161,
                  "src": "1243:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 158,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1200:55:0"
            },
            "src": "1186:70:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 169,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 163,
                  "indexed": true,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 169,
                  "src": "1276:26:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1276:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 165,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 169,
                  "src": "1304:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 164,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1304:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 167,
                  "indexed": false,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 169,
                  "src": "1329:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1329:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1275:66:0"
            },
            "src": "1261:81:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 173,
            "name": "TokenMinting",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 171,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 173,
                  "src": "1366:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1365:13:0"
            },
            "src": "1347:32:0"
          }
        ],
        "scope": 515,
        "src": "605:776:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 186,
        "linearizedBaseContracts": [
          186
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 185,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 176,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "1521:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 175,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1521:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 178,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "1535:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1535:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 180,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "1551:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 179,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1551:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 182,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "1566:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1520:64:0"
            },
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1591:0:0"
            },
            "scope": 186,
            "src": "1496:96:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 515,
        "src": "1458:136:0"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 187,
              "name": "ERC20Interface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 174,
              "src": "1641:14:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Interface_$174",
                "typeString": "contract ERC20Interface"
              }
            },
            "id": 188,
            "nodeType": "InheritanceSpecifier",
            "src": "1641:14:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 189,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 96,
              "src": "1657:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$96",
                "typeString": "contract SafeMath"
              }
            },
            "id": 190,
            "nodeType": "InheritanceSpecifier",
            "src": "1657:8:0"
          }
        ],
        "contractDependencies": [
          96,
          174
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 514,
        "linearizedBaseContracts": [
          514,
          96,
          174
        ],
        "name": "Valazco",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 192,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1672:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 191,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1672:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 194,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1698:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 193,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1698:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 196,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1723:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 195,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "1723:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 198,
            "name": "_totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1750:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 197,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1750:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 200,
            "name": "Owner",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1781:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 199,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1781:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 204,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1808:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 203,
              "keyType": {
                "id": 201,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1816:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1808:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 202,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1827:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 210,
            "name": "allowed",
            "nodeType": "VariableDeclaration",
            "scope": 514,
            "src": "1847:52:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 209,
              "keyType": {
                "id": 205,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1855:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1847:44:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 208,
                "keyType": {
                  "id": 206,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1874:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1866:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 207,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1885:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 248,
              "nodeType": "Block",
              "src": "1927:243:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 213,
                      "name": "Owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "1937:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 214,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 529,
                        "src": "1945:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1945:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1937:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 217,
                  "nodeType": "ExpressionStatement",
                  "src": "1937:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 218,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 192,
                      "src": "1965:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "56414c",
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1974:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_6a96595ccfcb78ff3e886e67a3c94a0c6c8fe147c51512c4f9b5e8aa8d636f07",
                        "typeString": "literal_string \"VAL\""
                      },
                      "value": "VAL"
                    },
                    "src": "1965:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 221,
                  "nodeType": "ExpressionStatement",
                  "src": "1965:14:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 194,
                      "src": "1989:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "56616c617a636f20546f6b656e",
                      "id": 223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1996:15:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_b119522934c0c7c07b9a47dd774e47015190421e9c8fe7818edf662967eb0e5d",
                        "typeString": "literal_string \"Valazco Token\""
                      },
                      "value": "Valazco Token"
                    },
                    "src": "1989:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 225,
                  "nodeType": "ExpressionStatement",
                  "src": "1989:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 226,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 196,
                      "src": "2021:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2032:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "2021:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 229,
                  "nodeType": "ExpressionStatement",
                  "src": "2021:12:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 230,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "2043:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "383030303030303030",
                      "id": 231,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2058:9:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_800000000_by_1",
                        "typeString": "int_const 800000000"
                      },
                      "value": "800000000"
                    },
                    "src": "2043:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 233,
                  "nodeType": "ExpressionStatement",
                  "src": "2043:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 234,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2077:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 236,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 235,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 200,
                        "src": "2086:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2077:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 237,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "2095:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2077:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 239,
                  "nodeType": "ExpressionStatement",
                  "src": "2077:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2139:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 241,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2131:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2131:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 244,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 200,
                        "src": "2143:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 245,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 198,
                        "src": "2150:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 240,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 161,
                      "src": "2122:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2122:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 247,
                  "nodeType": "EmitStatement",
                  "src": "2117:46:0"
                }
              ]
            },
            "documentation": null,
            "id": 249,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1917:2:0"
            },
            "returnParameters": {
              "id": 212,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1927:0:0"
            },
            "scope": 514,
            "src": "1906:264:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 262,
              "nodeType": "Block",
              "src": "2226:60:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 254,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "2243:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 255,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2259:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 259,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 257,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2276:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2268:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2268:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2259:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2243:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 253,
                  "id": 261,
                  "nodeType": "Return",
                  "src": "2236:43:0"
                }
              ]
            },
            "documentation": null,
            "id": 263,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2196:2:0"
            },
            "returnParameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 252,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "2220:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 251,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2220:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2219:6:0"
            },
            "scope": 514,
            "src": "2176:110:0",
            "stateMutability": "view",
            "superFunction": 101,
            "visibility": "public"
          },
          {
            "body": {
              "id": 274,
              "nodeType": "Block",
              "src": "2366:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 270,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 204,
                      "src": "2383:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 272,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 271,
                      "name": "tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 265,
                      "src": "2392:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2383:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 269,
                  "id": 273,
                  "nodeType": "Return",
                  "src": "2376:27:0"
                }
              ]
            },
            "documentation": null,
            "id": 275,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 265,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 275,
                  "src": "2311:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2311:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2310:20:0"
            },
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 268,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 275,
                  "src": "2352:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 267,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2352:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2351:14:0"
            },
            "scope": 514,
            "src": "2292:118:0",
            "stateMutability": "view",
            "superFunction": 108,
            "visibility": "public"
          },
          {
            "body": {
              "id": 317,
              "nodeType": "Block",
              "src": "2489:199:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 284,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2499:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 287,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 285,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "2508:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 286,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2508:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2499:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 289,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 204,
                            "src": "2530:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 292,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 290,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 529,
                              "src": "2539:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 291,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2539:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2530:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 293,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 279,
                          "src": "2552:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 288,
                        "name": "safeSub",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "2522:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2522:37:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2499:60:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 296,
                  "nodeType": "ExpressionStatement",
                  "src": "2499:60:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 297,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2569:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 299,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 298,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 277,
                        "src": "2578:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2569:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 301,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 204,
                            "src": "2592:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 303,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 302,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 277,
                            "src": "2601:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2592:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 279,
                          "src": "2606:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 300,
                        "name": "safeAdd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "2584:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 305,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2584:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2569:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 307,
                  "nodeType": "ExpressionStatement",
                  "src": "2569:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 309,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "2637:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 310,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2637:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 311,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 277,
                        "src": "2649:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 312,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 279,
                        "src": "2653:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 308,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 161,
                      "src": "2628:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2628:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 314,
                  "nodeType": "EmitStatement",
                  "src": "2623:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2677:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 283,
                  "id": 316,
                  "nodeType": "Return",
                  "src": "2670:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 318,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 277,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 318,
                  "src": "2434:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 276,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2434:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 279,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 318,
                  "src": "2446:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 278,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2446:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2433:25:0"
            },
            "returnParameters": {
              "id": 283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 282,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 318,
                  "src": "2475:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 281,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:14:0"
            },
            "scope": 514,
            "src": "2416:272:0",
            "stateMutability": "nonpayable",
            "superFunction": 126,
            "visibility": "public"
          },
          {
            "body": {
              "id": 359,
              "nodeType": "Block",
              "src": "2752:251:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 326,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 200,
                          "src": "2770:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 327,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 529,
                            "src": "2779:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2779:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2770:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c79204f776e65722063616e206d696e74",
                        "id": 330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2791:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a09964176cf5c864655ef5cc93dda46b9e7edf25c8000b3d7756dd88873c2a83",
                          "typeString": "literal_string \"Only Owner can mint\""
                        },
                        "value": "Only Owner can mint"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a09964176cf5c864655ef5cc93dda46b9e7edf25c8000b3d7756dd88873c2a83",
                          "typeString": "literal_string \"Only Owner can mint\""
                        }
                      ],
                      "id": 325,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        532,
                        533
                      ],
                      "referencedDeclaration": 533,
                      "src": "2762:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2762:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 332,
                  "nodeType": "ExpressionStatement",
                  "src": "2762:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 333,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2823:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 336,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 334,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "2832:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 335,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2832:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2823:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 338,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 204,
                            "src": "2854:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 341,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 339,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 529,
                              "src": "2863:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 340,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2863:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2854:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 342,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 320,
                          "src": "2876:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 337,
                        "name": "safeAdd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "2846:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 343,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2846:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2823:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 345,
                  "nodeType": "ExpressionStatement",
                  "src": "2823:61:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 346,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "2894:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 348,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 198,
                          "src": "2917:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 349,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 320,
                          "src": "2931:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 347,
                        "name": "safeAdd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "2909:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2909:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2894:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 352,
                  "nodeType": "ExpressionStatement",
                  "src": "2894:45:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 354,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 320,
                        "src": "2967:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 353,
                      "name": "TokenMinting",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 173,
                      "src": "2954:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2954:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 356,
                  "nodeType": "EmitStatement",
                  "src": "2949:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2992:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 324,
                  "id": 358,
                  "nodeType": "Return",
                  "src": "2985:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 360,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 320,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "2708:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 319,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2708:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2707:14:0"
            },
            "returnParameters": {
              "id": 324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 323,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "2738:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 322,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2738:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2737:14:0"
            },
            "scope": 514,
            "src": "2694:309:0",
            "stateMutability": "nonpayable",
            "superFunction": 153,
            "visibility": "public"
          },
          {
            "body": {
              "id": 387,
              "nodeType": "Block",
              "src": "3086:127:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 369,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "3096:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 373,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 370,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 529,
                            "src": "3104:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 371,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3104:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3096:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 374,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 372,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 362,
                        "src": "3116:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3096:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 375,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 364,
                      "src": "3127:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3096:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "3096:37:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 379,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "3157:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 380,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3157:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 381,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 362,
                        "src": "3169:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 382,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 364,
                        "src": "3178:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 378,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "3148:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3148:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 384,
                  "nodeType": "EmitStatement",
                  "src": "3143:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3202:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 368,
                  "id": 386,
                  "nodeType": "Return",
                  "src": "3195:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 388,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 362,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 388,
                  "src": "3026:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3026:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 364,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 388,
                  "src": "3043:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 363,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3043:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3025:30:0"
            },
            "returnParameters": {
              "id": 368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 367,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 388,
                  "src": "3072:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 366,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3072:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3071:14:0"
            },
            "scope": 514,
            "src": "3009:204:0",
            "stateMutability": "nonpayable",
            "superFunction": 135,
            "visibility": "public"
          },
          {
            "body": {
              "id": 446,
              "nodeType": "Block",
              "src": "3310:261:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 399,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "3320:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 401,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 400,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "3329:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3320:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 403,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 204,
                            "src": "3345:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 405,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 390,
                            "src": "3354:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3345:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 406,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 394,
                          "src": "3361:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 402,
                        "name": "safeSub",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "3337:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3337:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3320:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 409,
                  "nodeType": "ExpressionStatement",
                  "src": "3320:48:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 410,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "3378:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 414,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 411,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 390,
                          "src": "3386:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3378:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 415,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 412,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "3392:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3392:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3378:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 417,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 210,
                              "src": "3414:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 419,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 418,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 390,
                              "src": "3422:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3414:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 422,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 420,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 529,
                              "src": "3428:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 421,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3428:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3414:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 423,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 394,
                          "src": "3441:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 416,
                        "name": "safeSub",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "3406:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3406:42:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3378:70:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 426,
                  "nodeType": "ExpressionStatement",
                  "src": "3378:70:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 427,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "3458:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 429,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 428,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 392,
                        "src": "3467:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3458:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 204,
                            "src": "3481:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 433,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 432,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 392,
                            "src": "3490:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3481:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 434,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 394,
                          "src": "3495:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 430,
                        "name": "safeAdd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "3473:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3473:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3458:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 437,
                  "nodeType": "ExpressionStatement",
                  "src": "3458:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 439,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "3526:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 440,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 392,
                        "src": "3532:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 394,
                        "src": "3536:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 438,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 161,
                      "src": "3517:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3517:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 443,
                  "nodeType": "EmitStatement",
                  "src": "3512:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 444,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3560:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 398,
                  "id": 445,
                  "nodeType": "Return",
                  "src": "3553:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 447,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 390,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 447,
                  "src": "3241:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3241:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 392,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 447,
                  "src": "3255:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 391,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 394,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 447,
                  "src": "3267:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 393,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3267:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3240:39:0"
            },
            "returnParameters": {
              "id": 398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 397,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 447,
                  "src": "3296:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 396,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3296:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3295:14:0"
            },
            "scope": 514,
            "src": "3219:352:0",
            "stateMutability": "nonpayable",
            "superFunction": 146,
            "visibility": "public"
          },
          {
            "body": {
              "id": 462,
              "nodeType": "Block",
              "src": "3670:52:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 456,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "3687:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 458,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 457,
                        "name": "tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 449,
                        "src": "3695:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3687:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 460,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 459,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 451,
                      "src": "3707:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3687:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 455,
                  "id": 461,
                  "nodeType": "Return",
                  "src": "3680:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 463,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 449,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 463,
                  "src": "3596:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 448,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3596:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 451,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 463,
                  "src": "3616:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3616:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3595:37:0"
            },
            "returnParameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 454,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 463,
                  "src": "3654:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3654:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3653:16:0"
            },
            "scope": 514,
            "src": "3577:145:0",
            "stateMutability": "view",
            "superFunction": 117,
            "visibility": "public"
          },
          {
            "body": {
              "id": 505,
              "nodeType": "Block",
              "src": "3831:225:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 481,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 474,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "3841:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 478,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 475,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 529,
                            "src": "3849:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 476,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3849:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3841:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 479,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 477,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 465,
                        "src": "3861:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3841:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 480,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 467,
                      "src": "3872:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3841:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 482,
                  "nodeType": "ExpressionStatement",
                  "src": "3841:37:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 484,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "3902:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 485,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3902:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 486,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 465,
                        "src": "3914:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 487,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 467,
                        "src": "3923:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 483,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "3893:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3893:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 489,
                  "nodeType": "EmitStatement",
                  "src": "3888:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 494,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 529,
                          "src": "3988:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 495,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3988:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 496,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 467,
                        "src": "4000:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 498,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 549,
                            "src": "4016:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Valazco_$514",
                              "typeString": "contract Valazco"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Valazco_$514",
                              "typeString": "contract Valazco"
                            }
                          ],
                          "id": 497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4008:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4008:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 500,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 469,
                        "src": "4023:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 491,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 465,
                            "src": "3963:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 490,
                          "name": "ApproveAndCallFallBack",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "3940:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ApproveAndCallFallBack_$186_$",
                            "typeString": "type(contract ApproveAndCallFallBack)"
                          }
                        },
                        "id": 492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3940:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ApproveAndCallFallBack_$186",
                          "typeString": "contract ApproveAndCallFallBack"
                        }
                      },
                      "id": 493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "receiveApproval",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 185,
                      "src": "3940:47:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory) external"
                      }
                    },
                    "id": 501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3940:88:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 502,
                  "nodeType": "ExpressionStatement",
                  "src": "3940:88:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4045:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 473,
                  "id": 504,
                  "nodeType": "Return",
                  "src": "4038:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 506,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 465,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "3752:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3752:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 467,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "3769:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 466,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3769:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 469,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "3782:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 468,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3782:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3751:49:0"
            },
            "returnParameters": {
              "id": 473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 472,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 506,
                  "src": "3817:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 471,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3817:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3816:14:0"
            },
            "scope": 514,
            "src": "3728:328:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 512,
              "nodeType": "Block",
              "src": "4091:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 509,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        534,
                        535
                      ],
                      "referencedDeclaration": 534,
                      "src": "4101:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4101:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 511,
                  "nodeType": "ExpressionStatement",
                  "src": "4101:8:0"
                }
              ]
            },
            "documentation": null,
            "id": 513,
            "implemented": true,
            "kind": "fallback",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 507,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4071:2:0"
            },
            "returnParameters": {
              "id": 508,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4091:0:0"
            },
            "scope": 514,
            "src": "4062:54:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 515,
        "src": "1621:2497:0"
      }
    ],
    "src": "0:4119:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/german/Work/valazaco_token/contracts/Valazco.sol",
      "exportedSymbols": {
        "ApproveAndCallFallBack": [
          186
        ],
        "ERC20Interface": [
          174
        ],
        "SafeMath": [
          96
        ],
        "Valazco": [
          514
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            96
          ],
          "name": "SafeMath",
          "scope": 515
        },
        "children": [
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "safeAdd",
              "scope": 96,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 23,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2,
                        "name": "ElementaryTypeName",
                        "src": "90:4:0"
                      }
                    ],
                    "id": 3,
                    "name": "VariableDeclaration",
                    "src": "90:6:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 23,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4,
                        "name": "ElementaryTypeName",
                        "src": "98:4:0"
                      }
                    ],
                    "id": 5,
                    "name": "VariableDeclaration",
                    "src": "98:6:0"
                  }
                ],
                "id": 6,
                "name": "ParameterList",
                "src": "89:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 23,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 7,
                        "name": "ElementaryTypeName",
                        "src": "129:4:0"
                      }
                    ],
                    "id": 8,
                    "name": "VariableDeclaration",
                    "src": "129:6:0"
                  }
                ],
                "id": 9,
                "name": "ParameterList",
                "src": "128:8:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8,
                              "type": "uint256",
                              "value": "c"
                            },
                            "id": 10,
                            "name": "Identifier",
                            "src": "147:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "+",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 11,
                                "name": "Identifier",
                                "src": "151:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 12,
                                "name": "Identifier",
                                "src": "155:1:0"
                              }
                            ],
                            "id": 13,
                            "name": "BinaryOperation",
                            "src": "151:5:0"
                          }
                        ],
                        "id": 14,
                        "name": "Assignment",
                        "src": "147:9:0"
                      }
                    ],
                    "id": 15,
                    "name": "ExpressionStatement",
                    "src": "147:9:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                532,
                                533
                              ],
                              "referencedDeclaration": 532,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 16,
                            "name": "Identifier",
                            "src": "166:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 17,
                                "name": "Identifier",
                                "src": "174:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 18,
                                "name": "Identifier",
                                "src": "179:1:0"
                              }
                            ],
                            "id": 19,
                            "name": "BinaryOperation",
                            "src": "174:6:0"
                          }
                        ],
                        "id": 20,
                        "name": "FunctionCall",
                        "src": "166:15:0"
                      }
                    ],
                    "id": 21,
                    "name": "ExpressionStatement",
                    "src": "166:15:0"
                  }
                ],
                "id": 22,
                "name": "Block",
                "src": "137:51:0"
              }
            ],
            "id": 23,
            "name": "FunctionDefinition",
            "src": "73:115:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "safeSub",
              "scope": 96,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 45,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 24,
                        "name": "ElementaryTypeName",
                        "src": "211:4:0"
                      }
                    ],
                    "id": 25,
                    "name": "VariableDeclaration",
                    "src": "211:6:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 45,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 26,
                        "name": "ElementaryTypeName",
                        "src": "219:4:0"
                      }
                    ],
                    "id": 27,
                    "name": "VariableDeclaration",
                    "src": "219:6:0"
                  }
                ],
                "id": 28,
                "name": "ParameterList",
                "src": "210:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 45,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 29,
                        "name": "ElementaryTypeName",
                        "src": "250:4:0"
                      }
                    ],
                    "id": 30,
                    "name": "VariableDeclaration",
                    "src": "250:6:0"
                  }
                ],
                "id": 31,
                "name": "ParameterList",
                "src": "249:8:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                532,
                                533
                              ],
                              "referencedDeclaration": 532,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 32,
                            "name": "Identifier",
                            "src": "268:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 27,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 33,
                                "name": "Identifier",
                                "src": "276:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 25,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 34,
                                "name": "Identifier",
                                "src": "281:1:0"
                              }
                            ],
                            "id": 35,
                            "name": "BinaryOperation",
                            "src": "276:6:0"
                          }
                        ],
                        "id": 36,
                        "name": "FunctionCall",
                        "src": "268:15:0"
                      }
                    ],
                    "id": 37,
                    "name": "ExpressionStatement",
                    "src": "268:15:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 30,
                              "type": "uint256",
                              "value": "c"
                            },
                            "id": 38,
                            "name": "Identifier",
                            "src": "293:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 25,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 39,
                                "name": "Identifier",
                                "src": "297:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 27,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 40,
                                "name": "Identifier",
                                "src": "301:1:0"
                              }
                            ],
                            "id": 41,
                            "name": "BinaryOperation",
                            "src": "297:5:0"
                          }
                        ],
                        "id": 42,
                        "name": "Assignment",
                        "src": "293:9:0"
                      }
                    ],
                    "id": 43,
                    "name": "ExpressionStatement",
                    "src": "293:9:0"
                  }
                ],
                "id": 44,
                "name": "Block",
                "src": "258:51:0"
              }
            ],
            "id": 45,
            "name": "FunctionDefinition",
            "src": "194:115:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "safeMul",
              "scope": 96,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 73,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 46,
                        "name": "ElementaryTypeName",
                        "src": "332:4:0"
                      }
                    ],
                    "id": 47,
                    "name": "VariableDeclaration",
                    "src": "332:6:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 73,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 48,
                        "name": "ElementaryTypeName",
                        "src": "340:4:0"
                      }
                    ],
                    "id": 49,
                    "name": "VariableDeclaration",
                    "src": "340:6:0"
                  }
                ],
                "id": 50,
                "name": "ParameterList",
                "src": "331:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 73,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 51,
                        "name": "ElementaryTypeName",
                        "src": "371:4:0"
                      }
                    ],
                    "id": 52,
                    "name": "VariableDeclaration",
                    "src": "371:6:0"
                  }
                ],
                "id": 53,
                "name": "ParameterList",
                "src": "370:8:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 52,
                              "type": "uint256",
                              "value": "c"
                            },
                            "id": 54,
                            "name": "Identifier",
                            "src": "389:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "*",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 47,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 55,
                                "name": "Identifier",
                                "src": "393:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 49,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 56,
                                "name": "Identifier",
                                "src": "397:1:0"
                              }
                            ],
                            "id": 57,
                            "name": "BinaryOperation",
                            "src": "393:5:0"
                          }
                        ],
                        "id": 58,
                        "name": "Assignment",
                        "src": "389:9:0"
                      }
                    ],
                    "id": 59,
                    "name": "ExpressionStatement",
                    "src": "389:9:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                532,
                                533
                              ],
                              "referencedDeclaration": 532,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 60,
                            "name": "Identifier",
                            "src": "408:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 47,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 61,
                                    "name": "Identifier",
                                    "src": "416:1:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 62,
                                    "name": "Literal",
                                    "src": "421:1:0"
                                  }
                                ],
                                "id": 63,
                                "name": "BinaryOperation",
                                "src": "416:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "/",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 52,
                                          "type": "uint256",
                                          "value": "c"
                                        },
                                        "id": 64,
                                        "name": "Identifier",
                                        "src": "426:1:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 47,
                                          "type": "uint256",
                                          "value": "a"
                                        },
                                        "id": 65,
                                        "name": "Identifier",
                                        "src": "430:1:0"
                                      }
                                    ],
                                    "id": 66,
                                    "name": "BinaryOperation",
                                    "src": "426:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 49,
                                      "type": "uint256",
                                      "value": "b"
                                    },
                                    "id": 67,
                                    "name": "Identifier",
                                    "src": "435:1:0"
                                  }
                                ],
                                "id": 68,
                                "name": "BinaryOperation",
                                "src": "426:10:0"
                              }
                            ],
                            "id": 69,
                            "name": "BinaryOperation",
                            "src": "416:20:0"
                          }
                        ],
                        "id": 70,
                        "name": "FunctionCall",
                        "src": "408:29:0"
                      }
                    ],
                    "id": 71,
                    "name": "ExpressionStatement",
                    "src": "408:29:0"
                  }
                ],
                "id": 72,
                "name": "Block",
                "src": "379:65:0"
              }
            ],
            "id": 73,
            "name": "FunctionDefinition",
            "src": "315:129:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "safeDiv",
              "scope": 96,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 95,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 74,
                        "name": "ElementaryTypeName",
                        "src": "467:4:0"
                      }
                    ],
                    "id": 75,
                    "name": "VariableDeclaration",
                    "src": "467:6:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 95,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 76,
                        "name": "ElementaryTypeName",
                        "src": "475:4:0"
                      }
                    ],
                    "id": 77,
                    "name": "VariableDeclaration",
                    "src": "475:6:0"
                  }
                ],
                "id": 78,
                "name": "ParameterList",
                "src": "466:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 95,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 79,
                        "name": "ElementaryTypeName",
                        "src": "506:4:0"
                      }
                    ],
                    "id": 80,
                    "name": "VariableDeclaration",
                    "src": "506:6:0"
                  }
                ],
                "id": 81,
                "name": "ParameterList",
                "src": "505:8:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                532,
                                533
                              ],
                              "referencedDeclaration": 532,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 82,
                            "name": "Identifier",
                            "src": "524:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 77,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 83,
                                "name": "Identifier",
                                "src": "532:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 84,
                                "name": "Literal",
                                "src": "536:1:0"
                              }
                            ],
                            "id": 85,
                            "name": "BinaryOperation",
                            "src": "532:5:0"
                          }
                        ],
                        "id": 86,
                        "name": "FunctionCall",
                        "src": "524:14:0"
                      }
                    ],
                    "id": 87,
                    "name": "ExpressionStatement",
                    "src": "524:14:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 80,
                              "type": "uint256",
                              "value": "c"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "548:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "/",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 75,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 89,
                                "name": "Identifier",
                                "src": "552:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 77,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 90,
                                "name": "Identifier",
                                "src": "556:1:0"
                              }
                            ],
                            "id": 91,
                            "name": "BinaryOperation",
                            "src": "552:5:0"
                          }
                        ],
                        "id": 92,
                        "name": "Assignment",
                        "src": "548:9:0"
                      }
                    ],
                    "id": 93,
                    "name": "ExpressionStatement",
                    "src": "548:9:0"
                  }
                ],
                "id": 94,
                "name": "Block",
                "src": "514:50:0"
              }
            ],
            "id": 95,
            "name": "FunctionDefinition",
            "src": "450:114:0"
          }
        ],
        "id": 96,
        "name": "ContractDefinition",
        "src": "48:518:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            174
          ],
          "name": "ERC20Interface",
          "scope": 515
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "scope": 174,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 97,
                "name": "ParameterList",
                "src": "655:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 101,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 98,
                        "name": "ElementaryTypeName",
                        "src": "679:4:0"
                      }
                    ],
                    "id": 99,
                    "name": "VariableDeclaration",
                    "src": "679:4:0"
                  }
                ],
                "id": 100,
                "name": "ParameterList",
                "src": "678:6:0"
              }
            ],
            "id": 101,
            "name": "FunctionDefinition",
            "src": "635:50:0"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "scope": 174,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenOwner",
                      "scope": 108,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 102,
                        "name": "ElementaryTypeName",
                        "src": "709:7:0"
                      }
                    ],
                    "id": 103,
                    "name": "VariableDeclaration",
                    "src": "709:18:0"
                  }
                ],
                "id": 104,
                "name": "ParameterList",
                "src": "708:20:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 108,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 105,
                        "name": "ElementaryTypeName",
                        "src": "750:4:0"
                      }
                    ],
                    "id": 106,
                    "name": "VariableDeclaration",
                    "src": "750:12:0"
                  }
                ],
                "id": 107,
                "name": "ParameterList",
                "src": "749:14:0"
              }
            ],
            "id": 108,
            "name": "FunctionDefinition",
            "src": "690:74:0"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "allowance",
              "scope": 174,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenOwner",
                      "scope": 117,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 109,
                        "name": "ElementaryTypeName",
                        "src": "788:7:0"
                      }
                    ],
                    "id": 110,
                    "name": "VariableDeclaration",
                    "src": "788:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 117,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 111,
                        "name": "ElementaryTypeName",
                        "src": "808:7:0"
                      }
                    ],
                    "id": 112,
                    "name": "VariableDeclaration",
                    "src": "808:15:0"
                  }
                ],
                "id": 113,
                "name": "ParameterList",
                "src": "787:37:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "remaining",
                      "scope": 117,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 114,
                        "name": "ElementaryTypeName",
                        "src": "846:4:0"
                      }
                    ],
                    "id": 115,
                    "name": "VariableDeclaration",
                    "src": "846:14:0"
                  }
                ],
                "id": 116,
                "name": "ParameterList",
                "src": "845:16:0"
              }
            ],
            "id": 117,
            "name": "FunctionDefinition",
            "src": "769:93:0"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transfer",
              "scope": 174,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 126,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 118,
                        "name": "ElementaryTypeName",
                        "src": "885:7:0"
                      }
                    ],
                    "id": 119,
                    "name": "VariableDeclaration",
                    "src": "885:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 126,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 120,
                        "name": "ElementaryTypeName",
                        "src": "897:4:0"
                      }
                    ],
                    "id": 121,
                    "name": "VariableDeclaration",
                    "src": "897:11:0"
                  }
                ],
                "id": 122,
                "name": "ParameterList",
                "src": "884:25:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 126,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 123,
                        "name": "ElementaryTypeName",
                        "src": "926:4:0"
                      }
                    ],
                    "id": 124,
                    "name": "VariableDeclaration",
                    "src": "926:12:0"
                  }
                ],
                "id": 125,
                "name": "ParameterList",
                "src": "925:14:0"
              }
            ],
            "id": 126,
            "name": "FunctionDefinition",
            "src": "867:73:0"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "approve",
              "scope": 174,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 135,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 127,
                        "name": "ElementaryTypeName",
                        "src": "962:7:0"
                      }
                    ],
                    "id": 128,
                    "name": "VariableDeclaration",
                    "src": "962:15:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 135,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 129,
                        "name": "ElementaryTypeName",
                        "src": "979:4:0"
                      }
                    ],
                    "id": 130,
                    "name": "VariableDeclaration",
                    "src": "979:11:0"
                  }
                ],
                "id": 131,
                "name": "ParameterList",
                "src": "961:30:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 135,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 132,
                        "name": "ElementaryTypeName",
                        "src": "1008:4:0"
                      }
                    ],
                    "id": 133,
                    "name": "VariableDeclaration",
                    "src": "1008:12:0"
                  }
                ],
                "id": 134,
                "name": "ParameterList",
                "src": "1007:14:0"
              }
            ],
            "id": 135,
            "name": "FunctionDefinition",
            "src": "945:77:0"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "scope": 174,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 146,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 136,
                        "name": "ElementaryTypeName",
                        "src": "1049:7:0"
                      }
                    ],
                    "id": 137,
                    "name": "VariableDeclaration",
                    "src": "1049:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 146,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 138,
                        "name": "ElementaryTypeName",
                        "src": "1063:7:0"
                      }
                    ],
                    "id": 139,
                    "name": "VariableDeclaration",
                    "src": "1063:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 146,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 140,
                        "name": "ElementaryTypeName",
                        "src": "1075:4:0"
                      }
                    ],
                    "id": 141,
                    "name": "VariableDeclaration",
                    "src": "1075:11:0"
                  }
                ],
                "id": 142,
                "name": "ParameterList",
                "src": "1048:39:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 146,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 143,
                        "name": "ElementaryTypeName",
                        "src": "1104:4:0"
                      }
                    ],
                    "id": 144,
                    "name": "VariableDeclaration",
                    "src": "1104:12:0"
                  }
                ],
                "id": 145,
                "name": "ParameterList",
                "src": "1103:14:0"
              }
            ],
            "id": 146,
            "name": "FunctionDefinition",
            "src": "1027:91:0"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mint",
              "scope": 174,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 153,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 147,
                        "name": "ElementaryTypeName",
                        "src": "1137:4:0"
                      }
                    ],
                    "id": 148,
                    "name": "VariableDeclaration",
                    "src": "1137:11:0"
                  }
                ],
                "id": 149,
                "name": "ParameterList",
                "src": "1136:13:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 153,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 150,
                        "name": "ElementaryTypeName",
                        "src": "1166:4:0"
                      }
                    ],
                    "id": 151,
                    "name": "VariableDeclaration",
                    "src": "1166:12:0"
                  }
                ],
                "id": 152,
                "name": "ParameterList",
                "src": "1165:14:0"
              }
            ],
            "id": 153,
            "name": "FunctionDefinition",
            "src": "1123:57:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "from",
                      "scope": 161,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 154,
                        "name": "ElementaryTypeName",
                        "src": "1201:7:0"
                      }
                    ],
                    "id": 155,
                    "name": "VariableDeclaration",
                    "src": "1201:20:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 161,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 156,
                        "name": "ElementaryTypeName",
                        "src": "1223:7:0"
                      }
                    ],
                    "id": 157,
                    "name": "VariableDeclaration",
                    "src": "1223:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "tokens",
                      "scope": 161,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 158,
                        "name": "ElementaryTypeName",
                        "src": "1243:4:0"
                      }
                    ],
                    "id": 159,
                    "name": "VariableDeclaration",
                    "src": "1243:11:0"
                  }
                ],
                "id": 160,
                "name": "ParameterList",
                "src": "1200:55:0"
              }
            ],
            "id": 161,
            "name": "EventDefinition",
            "src": "1186:70:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "tokenOwner",
                      "scope": 169,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 162,
                        "name": "ElementaryTypeName",
                        "src": "1276:7:0"
                      }
                    ],
                    "id": 163,
                    "name": "VariableDeclaration",
                    "src": "1276:26:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 169,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 164,
                        "name": "ElementaryTypeName",
                        "src": "1304:7:0"
                      }
                    ],
                    "id": 165,
                    "name": "VariableDeclaration",
                    "src": "1304:23:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "tokens",
                      "scope": 169,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 166,
                        "name": "ElementaryTypeName",
                        "src": "1329:4:0"
                      }
                    ],
                    "id": 167,
                    "name": "VariableDeclaration",
                    "src": "1329:11:0"
                  }
                ],
                "id": 168,
                "name": "ParameterList",
                "src": "1275:66:0"
              }
            ],
            "id": 169,
            "name": "EventDefinition",
            "src": "1261:81:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "TokenMinting"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 173,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 170,
                        "name": "ElementaryTypeName",
                        "src": "1366:4:0"
                      }
                    ],
                    "id": 171,
                    "name": "VariableDeclaration",
                    "src": "1366:11:0"
                  }
                ],
                "id": 172,
                "name": "ParameterList",
                "src": "1365:13:0"
              }
            ],
            "id": 173,
            "name": "EventDefinition",
            "src": "1347:32:0"
          }
        ],
        "id": 174,
        "name": "ContractDefinition",
        "src": "605:776:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            186
          ],
          "name": "ApproveAndCallFallBack",
          "scope": 515
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "receiveApproval",
              "scope": 186,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 185,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 175,
                        "name": "ElementaryTypeName",
                        "src": "1521:7:0"
                      }
                    ],
                    "id": 176,
                    "name": "VariableDeclaration",
                    "src": "1521:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 185,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 177,
                        "name": "ElementaryTypeName",
                        "src": "1535:7:0"
                      }
                    ],
                    "id": 178,
                    "name": "VariableDeclaration",
                    "src": "1535:14:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 185,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 179,
                        "name": "ElementaryTypeName",
                        "src": "1551:7:0"
                      }
                    ],
                    "id": 180,
                    "name": "VariableDeclaration",
                    "src": "1551:13:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "data",
                      "scope": 185,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 181,
                        "name": "ElementaryTypeName",
                        "src": "1566:5:0"
                      }
                    ],
                    "id": 182,
                    "name": "VariableDeclaration",
                    "src": "1566:17:0"
                  }
                ],
                "id": 183,
                "name": "ParameterList",
                "src": "1520:64:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 184,
                "name": "ParameterList",
                "src": "1591:0:0"
              }
            ],
            "id": 185,
            "name": "FunctionDefinition",
            "src": "1496:96:0"
          }
        ],
        "id": 186,
        "name": "ContractDefinition",
        "src": "1458:136:0"
      },
      {
        "attributes": {
          "contractDependencies": [
            96,
            174
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            514,
            96,
            174
          ],
          "name": "Valazco",
          "scope": 515
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Interface",
                  "referencedDeclaration": 174,
                  "type": "contract ERC20Interface"
                },
                "id": 187,
                "name": "UserDefinedTypeName",
                "src": "1641:14:0"
              }
            ],
            "id": 188,
            "name": "InheritanceSpecifier",
            "src": "1641:14:0"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 96,
                  "type": "contract SafeMath"
                },
                "id": 189,
                "name": "UserDefinedTypeName",
                "src": "1657:8:0"
              }
            ],
            "id": 190,
            "name": "InheritanceSpecifier",
            "src": "1657:8:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 191,
                "name": "ElementaryTypeName",
                "src": "1672:6:0"
              }
            ],
            "id": 192,
            "name": "VariableDeclaration",
            "src": "1672:20:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 193,
                "name": "ElementaryTypeName",
                "src": "1698:6:0"
              }
            ],
            "id": 194,
            "name": "VariableDeclaration",
            "src": "1698:19:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 195,
                "name": "ElementaryTypeName",
                "src": "1723:5:0"
              }
            ],
            "id": 196,
            "name": "VariableDeclaration",
            "src": "1723:21:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "_totalSupply",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 197,
                "name": "ElementaryTypeName",
                "src": "1750:4:0"
              }
            ],
            "id": 198,
            "name": "VariableDeclaration",
            "src": "1750:25:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "Owner",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "stateMutability": "nonpayable",
                  "type": "address"
                },
                "id": 199,
                "name": "ElementaryTypeName",
                "src": "1781:7:0"
              }
            ],
            "id": 200,
            "name": "VariableDeclaration",
            "src": "1781:20:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 201,
                    "name": "ElementaryTypeName",
                    "src": "1816:7:0"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 202,
                    "name": "ElementaryTypeName",
                    "src": "1827:4:0"
                  }
                ],
                "id": 203,
                "name": "Mapping",
                "src": "1808:24:0"
              }
            ],
            "id": 204,
            "name": "VariableDeclaration",
            "src": "1808:33:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowed",
              "scope": 514,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 205,
                    "name": "ElementaryTypeName",
                    "src": "1855:7:0"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 206,
                        "name": "ElementaryTypeName",
                        "src": "1874:7:0"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 207,
                        "name": "ElementaryTypeName",
                        "src": "1885:4:0"
                      }
                    ],
                    "id": 208,
                    "name": "Mapping",
                    "src": "1866:24:0"
                  }
                ],
                "id": 209,
                "name": "Mapping",
                "src": "1847:44:0"
              }
            ],
            "id": 210,
            "name": "VariableDeclaration",
            "src": "1847:52:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "scope": 514,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 211,
                "name": "ParameterList",
                "src": "1917:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 212,
                "name": "ParameterList",
                "src": "1927:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 200,
                              "type": "address",
                              "value": "Owner"
                            },
                            "id": 213,
                            "name": "Identifier",
                            "src": "1937:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 529,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 214,
                                "name": "Identifier",
                                "src": "1945:3:0"
                              }
                            ],
                            "id": 215,
                            "name": "MemberAccess",
                            "src": "1945:10:0"
                          }
                        ],
                        "id": 216,
                        "name": "Assignment",
                        "src": "1937:18:0"
                      }
                    ],
                    "id": 217,
                    "name": "ExpressionStatement",
                    "src": "1937:18:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 192,
                              "type": "string storage ref",
                              "value": "symbol"
                            },
                            "id": 218,
                            "name": "Identifier",
                            "src": "1965:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "56414c",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"VAL\"",
                              "value": "VAL"
                            },
                            "id": 219,
                            "name": "Literal",
                            "src": "1974:5:0"
                          }
                        ],
                        "id": 220,
                        "name": "Assignment",
                        "src": "1965:14:0"
                      }
                    ],
                    "id": 221,
                    "name": "ExpressionStatement",
                    "src": "1965:14:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 194,
                              "type": "string storage ref",
                              "value": "name"
                            },
                            "id": 222,
                            "name": "Identifier",
                            "src": "1989:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "56616c617a636f20546f6b656e",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Valazco Token\"",
                              "value": "Valazco Token"
                            },
                            "id": 223,
                            "name": "Literal",
                            "src": "1996:15:0"
                          }
                        ],
                        "id": 224,
                        "name": "Assignment",
                        "src": "1989:22:0"
                      }
                    ],
                    "id": 225,
                    "name": "ExpressionStatement",
                    "src": "1989:22:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint8"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 196,
                              "type": "uint8",
                              "value": "decimals"
                            },
                            "id": 226,
                            "name": "Identifier",
                            "src": "2021:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 227,
                            "name": "Literal",
                            "src": "2032:1:0"
                          }
                        ],
                        "id": 228,
                        "name": "Assignment",
                        "src": "2021:12:0"
                      }
                    ],
                    "id": 229,
                    "name": "ExpressionStatement",
                    "src": "2021:12:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 198,
                              "type": "uint256",
                              "value": "_totalSupply"
                            },
                            "id": 230,
                            "name": "Identifier",
                            "src": "2043:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "383030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 800000000",
                              "value": "800000000"
                            },
                            "id": 231,
                            "name": "Literal",
                            "src": "2058:9:0"
                          }
                        ],
                        "id": 232,
                        "name": "Assignment",
                        "src": "2043:24:0"
                      }
                    ],
                    "id": 233,
                    "name": "ExpressionStatement",
                    "src": "2043:24:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 234,
                                "name": "Identifier",
                                "src": "2077:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 200,
                                  "type": "address",
                                  "value": "Owner"
                                },
                                "id": 235,
                                "name": "Identifier",
                                "src": "2086:5:0"
                              }
                            ],
                            "id": 236,
                            "name": "IndexAccess",
                            "src": "2077:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 198,
                              "type": "uint256",
                              "value": "_totalSupply"
                            },
                            "id": 237,
                            "name": "Identifier",
                            "src": "2095:12:0"
                          }
                        ],
                        "id": 238,
                        "name": "Assignment",
                        "src": "2077:30:0"
                      }
                    ],
                    "id": 239,
                    "name": "ExpressionStatement",
                    "src": "2077:30:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 161,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 240,
                            "name": "Identifier",
                            "src": "2122:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 241,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2131:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 242,
                                "name": "Literal",
                                "src": "2139:1:0"
                              }
                            ],
                            "id": 243,
                            "name": "FunctionCall",
                            "src": "2131:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 200,
                              "type": "address",
                              "value": "Owner"
                            },
                            "id": 244,
                            "name": "Identifier",
                            "src": "2143:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 198,
                              "type": "uint256",
                              "value": "_totalSupply"
                            },
                            "id": 245,
                            "name": "Identifier",
                            "src": "2150:12:0"
                          }
                        ],
                        "id": 246,
                        "name": "FunctionCall",
                        "src": "2122:41:0"
                      }
                    ],
                    "id": 247,
                    "name": "EmitStatement",
                    "src": "2117:46:0"
                  }
                ],
                "id": 248,
                "name": "Block",
                "src": "1927:243:0"
              }
            ],
            "id": 249,
            "name": "FunctionDefinition",
            "src": "1906:264:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "scope": 514,
              "stateMutability": "view",
              "superFunction": 101,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 250,
                "name": "ParameterList",
                "src": "2196:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 263,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 251,
                        "name": "ElementaryTypeName",
                        "src": "2220:4:0"
                      }
                    ],
                    "id": 252,
                    "name": "VariableDeclaration",
                    "src": "2220:4:0"
                  }
                ],
                "id": 253,
                "name": "ParameterList",
                "src": "2219:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 253
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 198,
                              "type": "uint256",
                              "value": "_totalSupply"
                            },
                            "id": 254,
                            "name": "Identifier",
                            "src": "2243:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 255,
                                "name": "Identifier",
                                "src": "2259:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 256,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2268:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 257,
                                    "name": "Literal",
                                    "src": "2276:1:0"
                                  }
                                ],
                                "id": 258,
                                "name": "FunctionCall",
                                "src": "2268:10:0"
                              }
                            ],
                            "id": 259,
                            "name": "IndexAccess",
                            "src": "2259:20:0"
                          }
                        ],
                        "id": 260,
                        "name": "BinaryOperation",
                        "src": "2243:36:0"
                      }
                    ],
                    "id": 261,
                    "name": "Return",
                    "src": "2236:43:0"
                  }
                ],
                "id": 262,
                "name": "Block",
                "src": "2226:60:0"
              }
            ],
            "id": 263,
            "name": "FunctionDefinition",
            "src": "2176:110:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "scope": 514,
              "stateMutability": "view",
              "superFunction": 108,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenOwner",
                      "scope": 275,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 264,
                        "name": "ElementaryTypeName",
                        "src": "2311:7:0"
                      }
                    ],
                    "id": 265,
                    "name": "VariableDeclaration",
                    "src": "2311:18:0"
                  }
                ],
                "id": 266,
                "name": "ParameterList",
                "src": "2310:20:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 275,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 267,
                        "name": "ElementaryTypeName",
                        "src": "2352:4:0"
                      }
                    ],
                    "id": 268,
                    "name": "VariableDeclaration",
                    "src": "2352:12:0"
                  }
                ],
                "id": 269,
                "name": "ParameterList",
                "src": "2351:14:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 269
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 204,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 270,
                            "name": "Identifier",
                            "src": "2383:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 265,
                              "type": "address",
                              "value": "tokenOwner"
                            },
                            "id": 271,
                            "name": "Identifier",
                            "src": "2392:10:0"
                          }
                        ],
                        "id": 272,
                        "name": "IndexAccess",
                        "src": "2383:20:0"
                      }
                    ],
                    "id": 273,
                    "name": "Return",
                    "src": "2376:27:0"
                  }
                ],
                "id": 274,
                "name": "Block",
                "src": "2366:44:0"
              }
            ],
            "id": 275,
            "name": "FunctionDefinition",
            "src": "2292:118:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transfer",
              "scope": 514,
              "stateMutability": "nonpayable",
              "superFunction": 126,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 318,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 276,
                        "name": "ElementaryTypeName",
                        "src": "2434:7:0"
                      }
                    ],
                    "id": 277,
                    "name": "VariableDeclaration",
                    "src": "2434:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 318,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 278,
                        "name": "ElementaryTypeName",
                        "src": "2446:4:0"
                      }
                    ],
                    "id": 279,
                    "name": "VariableDeclaration",
                    "src": "2446:11:0"
                  }
                ],
                "id": 280,
                "name": "ParameterList",
                "src": "2433:25:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 318,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 281,
                        "name": "ElementaryTypeName",
                        "src": "2475:4:0"
                      }
                    ],
                    "id": 282,
                    "name": "VariableDeclaration",
                    "src": "2475:12:0"
                  }
                ],
                "id": 283,
                "name": "ParameterList",
                "src": "2474:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 284,
                                "name": "Identifier",
                                "src": "2499:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 529,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 285,
                                    "name": "Identifier",
                                    "src": "2508:3:0"
                                  }
                                ],
                                "id": 286,
                                "name": "MemberAccess",
                                "src": "2508:10:0"
                              }
                            ],
                            "id": 287,
                            "name": "IndexAccess",
                            "src": "2499:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 45,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeSub"
                                },
                                "id": 288,
                                "name": "Identifier",
                                "src": "2522:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 204,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 289,
                                    "name": "Identifier",
                                    "src": "2530:8:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 529,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 290,
                                        "name": "Identifier",
                                        "src": "2539:3:0"
                                      }
                                    ],
                                    "id": 291,
                                    "name": "MemberAccess",
                                    "src": "2539:10:0"
                                  }
                                ],
                                "id": 292,
                                "name": "IndexAccess",
                                "src": "2530:20:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 279,
                                  "type": "uint256",
                                  "value": "tokens"
                                },
                                "id": 293,
                                "name": "Identifier",
                                "src": "2552:6:0"
                              }
                            ],
                            "id": 294,
                            "name": "FunctionCall",
                            "src": "2522:37:0"
                          }
                        ],
                        "id": 295,
                        "name": "Assignment",
                        "src": "2499:60:0"
                      }
                    ],
                    "id": 296,
                    "name": "ExpressionStatement",
                    "src": "2499:60:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 297,
                                "name": "Identifier",
                                "src": "2569:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 277,
                                  "type": "address",
                                  "value": "to"
                                },
                                "id": 298,
                                "name": "Identifier",
                                "src": "2578:2:0"
                              }
                            ],
                            "id": 299,
                            "name": "IndexAccess",
                            "src": "2569:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeAdd"
                                },
                                "id": 300,
                                "name": "Identifier",
                                "src": "2584:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 204,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 301,
                                    "name": "Identifier",
                                    "src": "2592:8:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 277,
                                      "type": "address",
                                      "value": "to"
                                    },
                                    "id": 302,
                                    "name": "Identifier",
                                    "src": "2601:2:0"
                                  }
                                ],
                                "id": 303,
                                "name": "IndexAccess",
                                "src": "2592:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 279,
                                  "type": "uint256",
                                  "value": "tokens"
                                },
                                "id": 304,
                                "name": "Identifier",
                                "src": "2606:6:0"
                              }
                            ],
                            "id": 305,
                            "name": "FunctionCall",
                            "src": "2584:29:0"
                          }
                        ],
                        "id": 306,
                        "name": "Assignment",
                        "src": "2569:44:0"
                      }
                    ],
                    "id": 307,
                    "name": "ExpressionStatement",
                    "src": "2569:44:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 161,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 308,
                            "name": "Identifier",
                            "src": "2628:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 529,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 309,
                                "name": "Identifier",
                                "src": "2637:3:0"
                              }
                            ],
                            "id": 310,
                            "name": "MemberAccess",
                            "src": "2637:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 277,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 311,
                            "name": "Identifier",
                            "src": "2649:2:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 279,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 312,
                            "name": "Identifier",
                            "src": "2653:6:0"
                          }
                        ],
                        "id": 313,
                        "name": "FunctionCall",
                        "src": "2628:32:0"
                      }
                    ],
                    "id": 314,
                    "name": "EmitStatement",
                    "src": "2623:37:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 283
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 315,
                        "name": "Literal",
                        "src": "2677:4:0"
                      }
                    ],
                    "id": 316,
                    "name": "Return",
                    "src": "2670:11:0"
                  }
                ],
                "id": 317,
                "name": "Block",
                "src": "2489:199:0"
              }
            ],
            "id": 318,
            "name": "FunctionDefinition",
            "src": "2416:272:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mint",
              "scope": 514,
              "stateMutability": "nonpayable",
              "superFunction": 153,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 360,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 319,
                        "name": "ElementaryTypeName",
                        "src": "2708:4:0"
                      }
                    ],
                    "id": 320,
                    "name": "VariableDeclaration",
                    "src": "2708:12:0"
                  }
                ],
                "id": 321,
                "name": "ParameterList",
                "src": "2707:14:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 360,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 322,
                        "name": "ElementaryTypeName",
                        "src": "2738:4:0"
                      }
                    ],
                    "id": 323,
                    "name": "VariableDeclaration",
                    "src": "2738:12:0"
                  }
                ],
                "id": 324,
                "name": "ParameterList",
                "src": "2737:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_a09964176cf5c864655ef5cc93dda46b9e7edf25c8000b3d7756dd88873c2a83",
                                  "typeString": "literal_string \"Only Owner can mint\""
                                }
                              ],
                              "overloadedDeclarations": [
                                532,
                                533
                              ],
                              "referencedDeclaration": 533,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 325,
                            "name": "Identifier",
                            "src": "2762:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 200,
                                  "type": "address",
                                  "value": "Owner"
                                },
                                "id": 326,
                                "name": "Identifier",
                                "src": "2770:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 529,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 327,
                                    "name": "Identifier",
                                    "src": "2779:3:0"
                                  }
                                ],
                                "id": 328,
                                "name": "MemberAccess",
                                "src": "2779:10:0"
                              }
                            ],
                            "id": 329,
                            "name": "BinaryOperation",
                            "src": "2770:19:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4f6e6c79204f776e65722063616e206d696e74",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Only Owner can mint\"",
                              "value": "Only Owner can mint"
                            },
                            "id": 330,
                            "name": "Literal",
                            "src": "2791:21:0"
                          }
                        ],
                        "id": 331,
                        "name": "FunctionCall",
                        "src": "2762:51:0"
                      }
                    ],
                    "id": 332,
                    "name": "ExpressionStatement",
                    "src": "2762:51:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 333,
                                "name": "Identifier",
                                "src": "2823:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 529,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 334,
                                    "name": "Identifier",
                                    "src": "2832:3:0"
                                  }
                                ],
                                "id": 335,
                                "name": "MemberAccess",
                                "src": "2832:10:0"
                              }
                            ],
                            "id": 336,
                            "name": "IndexAccess",
                            "src": "2823:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeAdd"
                                },
                                "id": 337,
                                "name": "Identifier",
                                "src": "2846:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 204,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 338,
                                    "name": "Identifier",
                                    "src": "2854:8:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 529,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 339,
                                        "name": "Identifier",
                                        "src": "2863:3:0"
                                      }
                                    ],
                                    "id": 340,
                                    "name": "MemberAccess",
                                    "src": "2863:10:0"
                                  }
                                ],
                                "id": 341,
                                "name": "IndexAccess",
                                "src": "2854:20:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 320,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 342,
                                "name": "Identifier",
                                "src": "2876:7:0"
                              }
                            ],
                            "id": 343,
                            "name": "FunctionCall",
                            "src": "2846:38:0"
                          }
                        ],
                        "id": 344,
                        "name": "Assignment",
                        "src": "2823:61:0"
                      }
                    ],
                    "id": 345,
                    "name": "ExpressionStatement",
                    "src": "2823:61:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 198,
                              "type": "uint256",
                              "value": "_totalSupply"
                            },
                            "id": 346,
                            "name": "Identifier",
                            "src": "2894:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeAdd"
                                },
                                "id": 347,
                                "name": "Identifier",
                                "src": "2909:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 198,
                                  "type": "uint256",
                                  "value": "_totalSupply"
                                },
                                "id": 348,
                                "name": "Identifier",
                                "src": "2917:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 320,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 349,
                                "name": "Identifier",
                                "src": "2931:7:0"
                              }
                            ],
                            "id": 350,
                            "name": "FunctionCall",
                            "src": "2909:30:0"
                          }
                        ],
                        "id": 351,
                        "name": "Assignment",
                        "src": "2894:45:0"
                      }
                    ],
                    "id": 352,
                    "name": "ExpressionStatement",
                    "src": "2894:45:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 173,
                              "type": "function (uint256)",
                              "value": "TokenMinting"
                            },
                            "id": 353,
                            "name": "Identifier",
                            "src": "2954:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 320,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 354,
                            "name": "Identifier",
                            "src": "2967:7:0"
                          }
                        ],
                        "id": 355,
                        "name": "FunctionCall",
                        "src": "2954:21:0"
                      }
                    ],
                    "id": 356,
                    "name": "EmitStatement",
                    "src": "2949:26:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 324
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 357,
                        "name": "Literal",
                        "src": "2992:4:0"
                      }
                    ],
                    "id": 358,
                    "name": "Return",
                    "src": "2985:11:0"
                  }
                ],
                "id": 359,
                "name": "Block",
                "src": "2752:251:0"
              }
            ],
            "id": 360,
            "name": "FunctionDefinition",
            "src": "2694:309:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "approve",
              "scope": 514,
              "stateMutability": "nonpayable",
              "superFunction": 135,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 388,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 361,
                        "name": "ElementaryTypeName",
                        "src": "3026:7:0"
                      }
                    ],
                    "id": 362,
                    "name": "VariableDeclaration",
                    "src": "3026:15:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 388,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 363,
                        "name": "ElementaryTypeName",
                        "src": "3043:4:0"
                      }
                    ],
                    "id": 364,
                    "name": "VariableDeclaration",
                    "src": "3043:11:0"
                  }
                ],
                "id": 365,
                "name": "ParameterList",
                "src": "3025:30:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 388,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 366,
                        "name": "ElementaryTypeName",
                        "src": "3072:4:0"
                      }
                    ],
                    "id": 367,
                    "name": "VariableDeclaration",
                    "src": "3072:12:0"
                  }
                ],
                "id": 368,
                "name": "ParameterList",
                "src": "3071:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 210,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 369,
                                    "name": "Identifier",
                                    "src": "3096:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 529,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 370,
                                        "name": "Identifier",
                                        "src": "3104:3:0"
                                      }
                                    ],
                                    "id": 371,
                                    "name": "MemberAccess",
                                    "src": "3104:10:0"
                                  }
                                ],
                                "id": 373,
                                "name": "IndexAccess",
                                "src": "3096:19:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 362,
                                  "type": "address",
                                  "value": "spender"
                                },
                                "id": 372,
                                "name": "Identifier",
                                "src": "3116:7:0"
                              }
                            ],
                            "id": 374,
                            "name": "IndexAccess",
                            "src": "3096:28:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 364,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 375,
                            "name": "Identifier",
                            "src": "3127:6:0"
                          }
                        ],
                        "id": 376,
                        "name": "Assignment",
                        "src": "3096:37:0"
                      }
                    ],
                    "id": 377,
                    "name": "ExpressionStatement",
                    "src": "3096:37:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 169,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 378,
                            "name": "Identifier",
                            "src": "3148:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 529,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 379,
                                "name": "Identifier",
                                "src": "3157:3:0"
                              }
                            ],
                            "id": 380,
                            "name": "MemberAccess",
                            "src": "3157:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 362,
                              "type": "address",
                              "value": "spender"
                            },
                            "id": 381,
                            "name": "Identifier",
                            "src": "3169:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 364,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 382,
                            "name": "Identifier",
                            "src": "3178:6:0"
                          }
                        ],
                        "id": 383,
                        "name": "FunctionCall",
                        "src": "3148:37:0"
                      }
                    ],
                    "id": 384,
                    "name": "EmitStatement",
                    "src": "3143:42:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 368
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 385,
                        "name": "Literal",
                        "src": "3202:4:0"
                      }
                    ],
                    "id": 386,
                    "name": "Return",
                    "src": "3195:11:0"
                  }
                ],
                "id": 387,
                "name": "Block",
                "src": "3086:127:0"
              }
            ],
            "id": 388,
            "name": "FunctionDefinition",
            "src": "3009:204:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "scope": 514,
              "stateMutability": "nonpayable",
              "superFunction": 146,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 447,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 389,
                        "name": "ElementaryTypeName",
                        "src": "3241:7:0"
                      }
                    ],
                    "id": 390,
                    "name": "VariableDeclaration",
                    "src": "3241:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 447,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 391,
                        "name": "ElementaryTypeName",
                        "src": "3255:7:0"
                      }
                    ],
                    "id": 392,
                    "name": "VariableDeclaration",
                    "src": "3255:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 447,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 393,
                        "name": "ElementaryTypeName",
                        "src": "3267:4:0"
                      }
                    ],
                    "id": 394,
                    "name": "VariableDeclaration",
                    "src": "3267:11:0"
                  }
                ],
                "id": 395,
                "name": "ParameterList",
                "src": "3240:39:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 447,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 396,
                        "name": "ElementaryTypeName",
                        "src": "3296:4:0"
                      }
                    ],
                    "id": 397,
                    "name": "VariableDeclaration",
                    "src": "3296:12:0"
                  }
                ],
                "id": 398,
                "name": "ParameterList",
                "src": "3295:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 399,
                                "name": "Identifier",
                                "src": "3320:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 390,
                                  "type": "address",
                                  "value": "from"
                                },
                                "id": 400,
                                "name": "Identifier",
                                "src": "3329:4:0"
                              }
                            ],
                            "id": 401,
                            "name": "IndexAccess",
                            "src": "3320:14:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 45,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeSub"
                                },
                                "id": 402,
                                "name": "Identifier",
                                "src": "3337:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 204,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 403,
                                    "name": "Identifier",
                                    "src": "3345:8:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 390,
                                      "type": "address",
                                      "value": "from"
                                    },
                                    "id": 404,
                                    "name": "Identifier",
                                    "src": "3354:4:0"
                                  }
                                ],
                                "id": 405,
                                "name": "IndexAccess",
                                "src": "3345:14:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 394,
                                  "type": "uint256",
                                  "value": "tokens"
                                },
                                "id": 406,
                                "name": "Identifier",
                                "src": "3361:6:0"
                              }
                            ],
                            "id": 407,
                            "name": "FunctionCall",
                            "src": "3337:31:0"
                          }
                        ],
                        "id": 408,
                        "name": "Assignment",
                        "src": "3320:48:0"
                      }
                    ],
                    "id": 409,
                    "name": "ExpressionStatement",
                    "src": "3320:48:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 210,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 410,
                                    "name": "Identifier",
                                    "src": "3378:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 390,
                                      "type": "address",
                                      "value": "from"
                                    },
                                    "id": 411,
                                    "name": "Identifier",
                                    "src": "3386:4:0"
                                  }
                                ],
                                "id": 414,
                                "name": "IndexAccess",
                                "src": "3378:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 529,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 412,
                                    "name": "Identifier",
                                    "src": "3392:3:0"
                                  }
                                ],
                                "id": 413,
                                "name": "MemberAccess",
                                "src": "3392:10:0"
                              }
                            ],
                            "id": 415,
                            "name": "IndexAccess",
                            "src": "3378:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 45,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeSub"
                                },
                                "id": 416,
                                "name": "Identifier",
                                "src": "3406:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 210,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowed"
                                        },
                                        "id": 417,
                                        "name": "Identifier",
                                        "src": "3414:7:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 390,
                                          "type": "address",
                                          "value": "from"
                                        },
                                        "id": 418,
                                        "name": "Identifier",
                                        "src": "3422:4:0"
                                      }
                                    ],
                                    "id": 419,
                                    "name": "IndexAccess",
                                    "src": "3414:13:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 529,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 420,
                                        "name": "Identifier",
                                        "src": "3428:3:0"
                                      }
                                    ],
                                    "id": 421,
                                    "name": "MemberAccess",
                                    "src": "3428:10:0"
                                  }
                                ],
                                "id": 422,
                                "name": "IndexAccess",
                                "src": "3414:25:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 394,
                                  "type": "uint256",
                                  "value": "tokens"
                                },
                                "id": 423,
                                "name": "Identifier",
                                "src": "3441:6:0"
                              }
                            ],
                            "id": 424,
                            "name": "FunctionCall",
                            "src": "3406:42:0"
                          }
                        ],
                        "id": 425,
                        "name": "Assignment",
                        "src": "3378:70:0"
                      }
                    ],
                    "id": 426,
                    "name": "ExpressionStatement",
                    "src": "3378:70:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 204,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 427,
                                "name": "Identifier",
                                "src": "3458:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 392,
                                  "type": "address",
                                  "value": "to"
                                },
                                "id": 428,
                                "name": "Identifier",
                                "src": "3467:2:0"
                              }
                            ],
                            "id": 429,
                            "name": "IndexAccess",
                            "src": "3458:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                  "value": "safeAdd"
                                },
                                "id": 430,
                                "name": "Identifier",
                                "src": "3473:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 204,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 431,
                                    "name": "Identifier",
                                    "src": "3481:8:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 392,
                                      "type": "address",
                                      "value": "to"
                                    },
                                    "id": 432,
                                    "name": "Identifier",
                                    "src": "3490:2:0"
                                  }
                                ],
                                "id": 433,
                                "name": "IndexAccess",
                                "src": "3481:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 394,
                                  "type": "uint256",
                                  "value": "tokens"
                                },
                                "id": 434,
                                "name": "Identifier",
                                "src": "3495:6:0"
                              }
                            ],
                            "id": 435,
                            "name": "FunctionCall",
                            "src": "3473:29:0"
                          }
                        ],
                        "id": 436,
                        "name": "Assignment",
                        "src": "3458:44:0"
                      }
                    ],
                    "id": 437,
                    "name": "ExpressionStatement",
                    "src": "3458:44:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 161,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 438,
                            "name": "Identifier",
                            "src": "3517:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 390,
                              "type": "address",
                              "value": "from"
                            },
                            "id": 439,
                            "name": "Identifier",
                            "src": "3526:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 392,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 440,
                            "name": "Identifier",
                            "src": "3532:2:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 394,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 441,
                            "name": "Identifier",
                            "src": "3536:6:0"
                          }
                        ],
                        "id": 442,
                        "name": "FunctionCall",
                        "src": "3517:26:0"
                      }
                    ],
                    "id": 443,
                    "name": "EmitStatement",
                    "src": "3512:31:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 398
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 444,
                        "name": "Literal",
                        "src": "3560:4:0"
                      }
                    ],
                    "id": 445,
                    "name": "Return",
                    "src": "3553:11:0"
                  }
                ],
                "id": 446,
                "name": "Block",
                "src": "3310:261:0"
              }
            ],
            "id": 447,
            "name": "FunctionDefinition",
            "src": "3219:352:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "allowance",
              "scope": 514,
              "stateMutability": "view",
              "superFunction": 117,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenOwner",
                      "scope": 463,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 448,
                        "name": "ElementaryTypeName",
                        "src": "3596:7:0"
                      }
                    ],
                    "id": 449,
                    "name": "VariableDeclaration",
                    "src": "3596:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 463,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 450,
                        "name": "ElementaryTypeName",
                        "src": "3616:7:0"
                      }
                    ],
                    "id": 451,
                    "name": "VariableDeclaration",
                    "src": "3616:15:0"
                  }
                ],
                "id": 452,
                "name": "ParameterList",
                "src": "3595:37:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "remaining",
                      "scope": 463,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 453,
                        "name": "ElementaryTypeName",
                        "src": "3654:4:0"
                      }
                    ],
                    "id": 454,
                    "name": "VariableDeclaration",
                    "src": "3654:14:0"
                  }
                ],
                "id": 455,
                "name": "ParameterList",
                "src": "3653:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 455
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 210,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 456,
                                "name": "Identifier",
                                "src": "3687:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 449,
                                  "type": "address",
                                  "value": "tokenOwner"
                                },
                                "id": 457,
                                "name": "Identifier",
                                "src": "3695:10:0"
                              }
                            ],
                            "id": 458,
                            "name": "IndexAccess",
                            "src": "3687:19:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 451,
                              "type": "address",
                              "value": "spender"
                            },
                            "id": 459,
                            "name": "Identifier",
                            "src": "3707:7:0"
                          }
                        ],
                        "id": 460,
                        "name": "IndexAccess",
                        "src": "3687:28:0"
                      }
                    ],
                    "id": 461,
                    "name": "Return",
                    "src": "3680:35:0"
                  }
                ],
                "id": 462,
                "name": "Block",
                "src": "3670:52:0"
              }
            ],
            "id": 463,
            "name": "FunctionDefinition",
            "src": "3577:145:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "approveAndCall",
              "scope": 514,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 506,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 464,
                        "name": "ElementaryTypeName",
                        "src": "3752:7:0"
                      }
                    ],
                    "id": 465,
                    "name": "VariableDeclaration",
                    "src": "3752:15:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokens",
                      "scope": 506,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 466,
                        "name": "ElementaryTypeName",
                        "src": "3769:4:0"
                      }
                    ],
                    "id": 467,
                    "name": "VariableDeclaration",
                    "src": "3769:11:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "data",
                      "scope": 506,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 468,
                        "name": "ElementaryTypeName",
                        "src": "3782:5:0"
                      }
                    ],
                    "id": 469,
                    "name": "VariableDeclaration",
                    "src": "3782:17:0"
                  }
                ],
                "id": 470,
                "name": "ParameterList",
                "src": "3751:49:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 506,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 471,
                        "name": "ElementaryTypeName",
                        "src": "3817:4:0"
                      }
                    ],
                    "id": 472,
                    "name": "VariableDeclaration",
                    "src": "3817:12:0"
                  }
                ],
                "id": 473,
                "name": "ParameterList",
                "src": "3816:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 210,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 474,
                                    "name": "Identifier",
                                    "src": "3841:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 529,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 475,
                                        "name": "Identifier",
                                        "src": "3849:3:0"
                                      }
                                    ],
                                    "id": 476,
                                    "name": "MemberAccess",
                                    "src": "3849:10:0"
                                  }
                                ],
                                "id": 478,
                                "name": "IndexAccess",
                                "src": "3841:19:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 465,
                                  "type": "address",
                                  "value": "spender"
                                },
                                "id": 477,
                                "name": "Identifier",
                                "src": "3861:7:0"
                              }
                            ],
                            "id": 479,
                            "name": "IndexAccess",
                            "src": "3841:28:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 467,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 480,
                            "name": "Identifier",
                            "src": "3872:6:0"
                          }
                        ],
                        "id": 481,
                        "name": "Assignment",
                        "src": "3841:37:0"
                      }
                    ],
                    "id": 482,
                    "name": "ExpressionStatement",
                    "src": "3841:37:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 169,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 483,
                            "name": "Identifier",
                            "src": "3893:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 529,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 484,
                                "name": "Identifier",
                                "src": "3902:3:0"
                              }
                            ],
                            "id": 485,
                            "name": "MemberAccess",
                            "src": "3902:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 465,
                              "type": "address",
                              "value": "spender"
                            },
                            "id": 486,
                            "name": "Identifier",
                            "src": "3914:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 467,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 487,
                            "name": "Identifier",
                            "src": "3923:6:0"
                          }
                        ],
                        "id": 488,
                        "name": "FunctionCall",
                        "src": "3893:37:0"
                      }
                    ],
                    "id": 489,
                    "name": "EmitStatement",
                    "src": "3888:42:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "receiveApproval",
                              "referencedDeclaration": 185,
                              "type": "function (address,uint256,address,bytes memory) external"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "contract ApproveAndCallFallBack",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 186,
                                      "type": "type(contract ApproveAndCallFallBack)",
                                      "value": "ApproveAndCallFallBack"
                                    },
                                    "id": 490,
                                    "name": "Identifier",
                                    "src": "3940:22:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 465,
                                      "type": "address",
                                      "value": "spender"
                                    },
                                    "id": 491,
                                    "name": "Identifier",
                                    "src": "3963:7:0"
                                  }
                                ],
                                "id": 492,
                                "name": "FunctionCall",
                                "src": "3940:31:0"
                              }
                            ],
                            "id": 493,
                            "name": "MemberAccess",
                            "src": "3940:47:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 529,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 494,
                                "name": "Identifier",
                                "src": "3988:3:0"
                              }
                            ],
                            "id": 495,
                            "name": "MemberAccess",
                            "src": "3988:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 467,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 496,
                            "name": "Identifier",
                            "src": "4000:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address payable",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Valazco_$514",
                                      "typeString": "contract Valazco"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 497,
                                "name": "ElementaryTypeNameExpression",
                                "src": "4008:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 549,
                                  "type": "contract Valazco",
                                  "value": "this"
                                },
                                "id": 498,
                                "name": "Identifier",
                                "src": "4016:4:0"
                              }
                            ],
                            "id": 499,
                            "name": "FunctionCall",
                            "src": "4008:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 469,
                              "type": "bytes memory",
                              "value": "data"
                            },
                            "id": 500,
                            "name": "Identifier",
                            "src": "4023:4:0"
                          }
                        ],
                        "id": 501,
                        "name": "FunctionCall",
                        "src": "3940:88:0"
                      }
                    ],
                    "id": 502,
                    "name": "ExpressionStatement",
                    "src": "3940:88:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 473
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 503,
                        "name": "Literal",
                        "src": "4045:4:0"
                      }
                    ],
                    "id": 504,
                    "name": "Return",
                    "src": "4038:11:0"
                  }
                ],
                "id": 505,
                "name": "Block",
                "src": "3831:225:0"
              }
            ],
            "id": 506,
            "name": "FunctionDefinition",
            "src": "3728:328:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "fallback",
              "modifiers": [
                null
              ],
              "name": "",
              "scope": 514,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 507,
                "name": "ParameterList",
                "src": "4071:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 508,
                "name": "ParameterList",
                "src": "4091:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                534,
                                535
                              ],
                              "referencedDeclaration": 534,
                              "type": "function () pure",
                              "value": "revert"
                            },
                            "id": 509,
                            "name": "Identifier",
                            "src": "4101:6:0"
                          }
                        ],
                        "id": 510,
                        "name": "FunctionCall",
                        "src": "4101:8:0"
                      }
                    ],
                    "id": 511,
                    "name": "ExpressionStatement",
                    "src": "4101:8:0"
                  }
                ],
                "id": 512,
                "name": "Block",
                "src": "4091:25:0"
              }
            ],
            "id": 513,
            "name": "FunctionDefinition",
            "src": "4062:54:0"
          }
        ],
        "id": 514,
        "name": "ContractDefinition",
        "src": "1621:2497:0"
      }
    ],
    "id": 515,
    "name": "SourceUnit",
    "src": "0:4119:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x909d77c91ef8b08f09673a08260bad8ed7d1bba2280dd2f9877e9f2c20a8443b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "TokenMinting",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x7E0Da3b40fC8d41a8D9D9347bb1e2fA00B73ecA4",
      "transactionHash": "0xc2e9c422528dcd103ea86bf5d9ad96207d89ac8653677e5ee2f9895fd95eb691"
    },
    "5": {
      "events": {},
      "links": {},
      "address": "0x302886102C2adb454b15A2b55C0D25ffEd1a47A5",
      "transactionHash": "0xb9874e66fd2e9785a9386532cf7f32125af8e0b9057d463542a7a016652247bb"
    },
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x909d77c91ef8b08f09673a08260bad8ed7d1bba2280dd2f9877e9f2c20a8443b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "TokenMinting",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x7c53ef4F95C3c5E0eaED00cA4B91907beD218951",
      "transactionHash": "0xf6fbed04ba0b029230f4ccb9e210e735e47b8140a5bd2453714c764face25db2"
    },
    "1629908978140": {
      "events": {},
      "links": {},
      "address": "0x8F35f21e25dd0051A779a36843a7c7E93b5057Ac",
      "transactionHash": "0x9b411d41e073035c41a5b87f51e8ca8caaa8b44be7f7f00b79c2c017e9c15ba9"
    },
    "1629998952381": {
      "events": {},
      "links": {},
      "address": "0x0f3B19fB582613E58597dD9093524FCD608bd905",
      "transactionHash": "0xa00d2cb1f771245b7cbab5392cb82c80a6258b8fe70fb5ab983cef6cff9ce703"
    }
  },
  "schemaVersion": "3.4.1",
  "updatedAt": "2021-08-26T18:45:26.077Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}