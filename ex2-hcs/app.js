/* configure access to our .env */
require("dotenv").config();

/* include express.js & socket.io, plus other packages */
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const open = require("open");
const {Client, PrivateKey, AccountId, TopicId, TopicMessageSubmitTransaction, TopicCreateTransaction, TopicMessageQuery} = require("@hashgraph/sdk");
const TextDecoder = require("text-encoding").TextDecoder;

/* create your Client connection to Hedera's public testnet */

const operatorId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);

const HederaClient = Client.forTestnet().setOperator(operatorId, operatorKey);

// async function createNewTopic() {
//   /* create your first HCS topic transaction! */
//   const txId = await new TopicCreateTransaction().execute(HederaClient);
//   await sleep(3000); /* wait for Hedera to reach consensus */
//   const receipt = await txId.getReceipt(HederaClient);
//   var newTopicId = receipt.topicId;
//   console.log(`Your new topic was created with an ID = ${newTopicId}`);
//   return newTopicId;
// }

/* write a JavaScript function that allows our program to "sleep" */
/* this lets us wait for Hedera to reach consensus, before fetching the transaction receipt */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var newTopicId = "";

/* write a new async function that will generate our topic & handoff to run the app */
async function init() {
  // newTopicId = await createNewTopic();
  await sleep(9000); /* wait for our new topic to reach a Mirror Node */
  runChat(); /* handoff to runChat() here instead of at the end of the file */
}


function runChat() {

  /* serve our /public folder, which includes our frontend html */
  app.use(express.static("public"));

  /* serve the app at a random port location */
  http.listen(0, function() {
    const randomInstancePort = http.address().port;
    open("http://localhost:" + randomInstancePort);
  });

  /* subscribe to our Hedera Mirror node */
  /* when the Mirror Node receives messages in our topic, send them to our clients */

  // try {
  //   new TopicMessageQuery()
  //     .setTopicId(newTopicId)
  //     .subscribe(HederaClient,
  //                (error) => {console.log("Message subscriber raised an error", error);},
  //                (message) => {
  //                  console.log("Response from TopicMessageQuery()", message);
  //                  const mirrorMessage = new TextDecoder("utf-8").decode(message.contents);
  //                  io.emit("chat message", mirrorMessage);
  //                }
  //               );
  //   console.log("MirrorConsensusTopicQuery()", newTopicId.toString());
  // } catch (error) {
  //   console.log("ERROR: MirrorConsensusTopicQuery()", error);
  //   process.exit(1);
  // }

  /* when a new socket.io client connects to this server */
  io.on("connection", function(client) {

    /* send messages when new clients connect */
    io.emit("connect message", client.id);
    
    /* send chat messages to all listening clients */
    client.on("chat message", function(msg) {

      /* lets generate an HCS transaction, and send it to Hedera */
      // try {
      //   new TopicMessageSubmitTransaction().setTopicId(newTopicId).setMessage(msg).execute(HederaClient);
      //   console.log("TopicMessageSubmitTransaction", msg);
      // }
      // catch (error) {
      //   console.log("ERROR: TopicMessageSubmitTransaction", error);
      // }
      io.emit("chat message", msg);
    });
    
    /* send messages when new clients disconnect */
    client.on("disconnect", function() {
      io.emit("disconnect message", client.id);
    });
  });
}

init();
