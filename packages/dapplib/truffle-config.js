require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note ranch puppy harvest logic off skirt'; 
let testAccounts = [
"0x01ffb2842cc8a53960f8ca6fd993198cea5b3d885f413a75bdec9c30d04fc582",
"0x935b3365787f6328cf9b17589988d624566de9323ceeacb3547c47520334f58c",
"0x4ea16c160fa7633a52eef8df9bf7f44ed00132a2f7ace4ae69a9537a45558d39",
"0xf700205f890a45c9f615800b901f7c540ab31d3f2dc03bf4baa2e8701035f9e3",
"0x4fc6633376ed5353badb04ab8c002da67d40220e4bde67e80056677370d4602a",
"0x70c21ae9d2402379fa9d850ced9f7449048db4c7c5cbc1f6f7fd8279baa9c37a",
"0xd63b62607b901097b0d24462acb5c1b2d755f50eed7d445e2f690dab33a1ce19",
"0x1bd1dc40e77216905f83fa65908b3781808ecf4971fe303785ab6290a8e38044",
"0x035ea01f12548734dc5d3677bcc16a29fe81c7b56016074a44735a18949fd13e",
"0x087d2d490b5e658b3f0f59514b25439811e5dabd43e88009a31c3210a746e698"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


