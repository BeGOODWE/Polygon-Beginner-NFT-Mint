const CONTRACT_ADDRESS = "0x09Ca6c2108981ca690932D63f1dDb0477fF718cc"
const META_DATA_URL = "ipfs://bafyreihenapvaro6j6swtpesfv37yz2bh4lrn4ys7smrspevf6obhpdvcq/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
