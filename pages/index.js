import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";


export default function Home() {
  const tokenId = 0;
  const quantity = 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome to the Gasless NFT experience</h1>
      <Web3Button
        contractAddress="0xC9B76ef9f79764F2CE1e2187d6034fA7EBBAF0d2"
        action={(contract) => contract.erc1155.claim(tokenId, quantity)}
        onSuccess={() => alert("Claimed!")}
        onError={() => alert("Something went wrong")}
      >
        Claim
      </Web3Button>
      
    </div>
  );
}
