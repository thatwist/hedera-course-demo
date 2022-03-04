# Hedera Services Demo

This example application is based on https://github.com/hashgraph/hedera-hcs-chat-js and examples from Hedera official documentation https://docs.hedera.com/guides/getting-started/try-examples/create-and-transfer-your-first-fungible-token

It demonstrates how you can build decentralized pub-sub messaging on the Hedera Consensus Service and how to use Hedera Token Service to create and transfer your own tokens.

### Links

- https://github.com/hashgraph/hedera-sdk-js) - The easiest way to use Hedera in JavaScript
- https://expressjs.com/
- https://socket.io/

### Configure and run

Sign up at [portal.hedera.com](https://portal.hedera.com/) to create TestNet account.

Download and install latest node.js and npm: https://docs.npmjs.com/about-npm/.

`cd` into the ex1(HTS demo) or ex2(HCS demo) folder. 

Create `.env` file in the exercise folder and add PRIVATE_KEY and ACCOUNT_ID in it.

For example:

```
ACCOUNT_ID=0.0.123456789
PUBLIC_KEY=302a300506032b657003210013d392c9ebcf942a3c4ca165e6ee7721df293960001dfe0c347ea8542ef6c4a4
PRIVATE_KEY=302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6
```

Run this command to install required packages:

```
npm install
```

If installing the dependencies was successful, now try to run application

```
node app.js
```

### LICENSE

[Apache 2.0](LICENSE)
