---
title: "Blockchain Indexer"
---

# Blockchain Indexer: Deploying a Subgraph

## Part 1: Introduction
This tutorial will guide you through deploying an already initialized subgraph tailored for the Moonchain NFT Marketplace Smart Contract on the Hudson Testnet using The Graph.

### Overview of The Graph
The Graph allows developers to query blockchain data easily using GraphQL. It provides powerful tools to index blockchain data and serve it through a GraphQL endpoint, enabling efficient data access for decentralized applications.

To get started with deploying our pre-initialized subgraph on the Hudson Testnet, follow the steps below:

### Prerequisites
**1. Clone the Repository**: First, clone the repository and switch to the `Hudson` branch.
```sh
git clone --branch Hudson https://github.com/JDI-Group/MCH-nft-graph.git
cd MCH-nft-graph
```
**2. Install Required Packages**: Install the necessary packages.
```sh
yarn add global package.json
```

### Steps for Deployment

:::important[Note]
In this tutorial section, we omit the 'init' command typically used to initialize a new subgraph. This is because Hudson Testnet and similar non-standard networks are not supported by the standard init command of The Graph. Instead, we focus on generating the subgraph code directly from the existing schema.
:::

## Part 2: Deployment
Please refer to [Moonchain Chains Overview](/moonchain-design/chains-and-testnets/) for advanced configurations and specific setup instructions tailored to non-standard networks like the Hudson Testnet.

**1. Code Generation**: Generate the subgraph code.
```sh
graph codegen
```
**2. Build the Subgraph**: Build and compile the subgraph.
```sh
graph build
```
**3. Create the Subgraph**: Generate the subgraph code, replacing `<SUBGRAPH-NAME>` with the actual name of your subgraph.
```sh
graph create --node http://Hudson-graph-node.mchain.ai:8020/ <SUBGRAPH-NAME>
```
**4. Deploy the Subgraph**: Deploy the subgraph using `graph deploy` to the Hudson Testnet node specified. Again, replace `<SUBGRAPH-NAME>` with the actual name of your subgraph.
```sh
graph deploy --node http://Hudson-graph-node.mchain.ai:8020/ <SUBGRAPH-NAME>
```
Upon successful deployment, you will receive the URL where you can interact with your Moonchain NFT Marketplace subgraph.

## Conclusion

Use GraphQL queries such as the following example to explore and utilize the capabilities of your deployed subgraph.

```graphql
query {
    marketplaceOrderInfos {
        id
        assetId
        seller
        nftAddress
        blockNumber
        blockTimestamp
        transactionHash
        event
        priceInWei
        expiresAt
        totalPrice
        buyer
    }
}
```
This query retrieves information about orders made on the marketplace, demonstrating how you can leverage your subgraph to access and analyze marketplace order data effectively on the Hudson Testnet.