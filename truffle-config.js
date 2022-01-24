var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "isolate canvas web wine document chapter rich duck denial fix jungle whale";
module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/95f1ee33cf4c4e2886b483b991ea4249");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};