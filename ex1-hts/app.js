console.clear();

require("dotenv").config();

const {
  AccountId,
  PrivateKey,
  Client,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  TransferTransaction,
  AccountBalanceQuery,
  AccountCreateTransaction,
  Hbar,
  TokenAssociateTransaction,
} = require("@hashgraph/sdk");

// Configure accounts and client, and generate needed keys
// const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
// const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);
const operatorId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

const supplyKey = PrivateKey.generate();

async function main() {

  //CREATE ACCOUNTS FOR TREASURY AND ALICE
  // const treasuryKey = PrivateKey.generate();
  // const treasuryAccTx = new AccountCreateTransaction() //Create the transaction
  //       .setKey(treasuryKey.publicKey)
  //       .setInitialBalance(new Hbar(10));
  // const treasuryAccTxResponse = await treasuryAccTx.execute(client); //Sign the transaction with the client operator private key and submit to a Hedera network
  // const treasuryAccReceipt = await treasuryAccTxResponse.getReceipt(client); //Request the receipt of the transaction
  // const treasuryId = treasuryAccReceipt.accountId; //Get the account ID
  // console.log("The new treasury account ID is " + treasuryId);

  // const aliceKey = PrivateKey.generate();
  // const aliceAccTx = new AccountCreateTransaction() //Create the transaction
  //       .setKey(aliceKey.publicKey)
  //       .setInitialBalance(new Hbar(10));
  // const aliceAccTxResponse = await aliceAccTx.execute(client); //Sign the transaction with the client operator private key and submit to a Hedera network
  // const aliceAccReceipt = await aliceAccTxResponse.getReceipt(client); //Request the receipt of the transaction
  // const aliceId = aliceAccReceipt.accountId; //Get the account ID
  // console.log("The new alice account ID is " + aliceId);


  // //CREATE FUNGIBLE TOKEN (STABLECOIN)
  // let tokenCreateTx = await new TokenCreateTransaction()
  //     .setTokenName("USD Bar")
  //     .setTokenSymbol("USDB")
  //     .setTokenType(TokenType.FungibleCommon)
  //     .setDecimals(2)
  //     .setInitialSupply(10000)
  //     .setTreasuryAccountId(treasuryId)
  //     .setSupplyType(TokenSupplyType.Infinite)
  //     .setSupplyKey(supplyKey)
  //     .freezeWith(client);

  // let tokenCreateSign = await tokenCreateTx.sign(treasuryKey);
  // let tokenCreateSubmit = await tokenCreateSign.execute(client);
  // let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
  // let tokenId = tokenCreateRx.tokenId;
  // console.log(`- Created token with ID: ${tokenId} \n`);

  // //TOKEN ASSOCIATION WITH ALICE's ACCOUNT
  // let associateAliceTx = await new TokenAssociateTransaction()
  //     .setAccountId(aliceId)
  //     .setTokenIds([tokenId])
  //     .freezeWith(client)
  //     .sign(aliceKey);
  // let associateAliceTxSubmit = await associateAliceTx.execute(client);
  // let associateAliceRx = await associateAliceTxSubmit.getReceipt(client);
  // console.log(`- Token association with Alice's account: ${associateAliceRx.status} \n`);

  // //BALANCE CHECK
  // var balanceCheckTx = await new AccountBalanceQuery().setAccountId(treasuryId).execute(client);
  // console.log(`- Treasury balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
  // var balanceCheckTx = await new AccountBalanceQuery().setAccountId(aliceId).execute(client);
  // console.log(`- Alice's balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);

  // //TRANSFER STABLECOIN FROM TREASURY TO ALICE
  // let tokenTransferTx = await new TransferTransaction()
  //     .addTokenTransfer(tokenId, treasuryId, -2500)
  //     .addTokenTransfer(tokenId, aliceId, 2500)
  //     .freezeWith(client)
  //     .sign(treasuryKey);
  // let tokenTransferSubmit = await tokenTransferTx.execute(client);
  // let tokenTransferRx = await tokenTransferSubmit.getReceipt(client);
  // console.log(`\n- Stablecoin transfer from Treasury to Alice: ${tokenTransferRx.status} \n`);

  // //BALANCE CHECK
  // var balanceCheckTx = await new AccountBalanceQuery().setAccountId(treasuryId).execute(client);
  // console.log(`- Treasury balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
  // var balanceCheckTx = await new AccountBalanceQuery().setAccountId(aliceId).execute(client);
  // console.log(`- Alice's balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
}

main();
