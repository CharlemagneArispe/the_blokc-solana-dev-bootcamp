import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  import {config} from "dotenv"
  config()
  const publicKey = new PublicKey(process.env.PUBLIC_KEY||"");
  
  const getWalletBalance = async () => {
    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const walletBalance = await connection.getBalance(publicKey);
      console.log(
        `address ${publicKey} has ${walletBalance / LAMPORTS_PER_SOL} SOL`
      );
    } catch (err: any) {}
  };
  
  const main = async () => {
    await getWalletBalance();
  };
  
  main();