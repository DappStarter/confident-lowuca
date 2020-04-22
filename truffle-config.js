require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn pulse hunt roof flee seed'; 
let testAccounts = [
"0x477ad17cb79b54e87976d8acd25997ce889e6528f0cbaedfc4a7583b15072b13",
"0x33bc23224ef5db116e929f68406df5f8ad4deba9a54e46367e0b67c5aa0137ad",
"0xd4fada81a1d1c55df59b39238e2ad856062e89579b2423696596b18e8e30fbe5",
"0x2f7bbaa08ae026938f98c20408cc0ec730d762efaec0a53f43910b353d42f9d8",
"0x416e19ca07f463474b7e76e47fa86e9a950fa70287fa5aaee0e51ccb0003d828",
"0xf80c7b5e98fbcf96b1f501facf392007b0bed8da2675f1d37aae7b0563aab961",
"0xde7b0f1154a9d9e08e27ce709fc5f09843fbd8169fdbb2acaa1bcd1563aa3210",
"0x25b9588899900968269e5347e3b05d9136c8edf50045bf5994a68aa176459f45",
"0x81b09b851f6240c7b6e596aa22756c00f255323f77a730a1d99da68701f6bb8d",
"0x1f5988e66bfcbab4b5e12640667b977a9d797b261486379558fb62986b5f5c52"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
