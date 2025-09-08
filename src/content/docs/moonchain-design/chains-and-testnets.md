---
title: "Chains And Testnets"
---

# Moonchain Chains Overview

Moonchain Chains are Layer 2 solutions built atop the BNB Chain, aimed at enhancing scalability and reducing transaction costs. This overview guides through the configuration of Mainnet and Testnet wallets.

Moonchain operates two testnet networks: **Moonchain (Hudson Testnet)** and **BNB Chain Testnet**.

### BSC Chain

BSC Chain replicates the functionalities of BNB chain's main network, providing developers with a secure environment to test and validate their smart contracts before deploying them on the mainnet.

### Moonchain Hudson

Moonchain Hudson operates similarly to BNB Chain Testnet but leverages Layer 2 capabilities. Unlike Ethereum's native token **ETH**, Moonchain uses **MCH** as its native token.




#### Add the Moonchain Hudson Testnet
1. Check the [RPC Configuration](./Chains-and-Testnets#rpc-configuration) section below.
2. Open your MetaMask wallet.
3. Click on the network selection at the top right.
4. Click on Add Network and then Add a network manually.
5. Enter the RPC configuration details for the Moonchain Hudson testnet from the RPC Configuration details below.

#### Faucet

Hudson faucet: https://hudson-bridge.mchain.ai/faucet

#### Add the BNB Chain Testnet
1. Visit the Chainlist website and check for [BNB Chain Testnet](https://chainlist.org/chain/97).
2. Connect with your wallet.
3. Click on Add to MetaMask to add the BNB Chain Testnet to your network list.

#### Connect to Moonchain Mainnet
1. Visit the RPC Configuration page.
2. Open your MetaMask wallet.
3. Click on the network selection at the top right.
4. Click on Add Network and then Add a network manually.
5. Enter the RPC configuration details for the Moonchain Mainnet from the RPC Configuration page.

## RPC Configuration

| Network                      | Chain ID | RPC URL                           | Symbol | Block Explorer URL                         | Web Socket URL                        |
|------------------------------|----------|-----------------------------------|--------|--------------------------------------------|---------------------------------------|
| BNB chain                 | 42161    | https://bsc-dataseed.bnbchain.org           | BNB    | https://bscscan.com               |                                       |
| Moonchain Mainnet            | 999888    | https://rpc.moonchain.com             | MCH    | https://explorer.moonchain.com/            | wss://rpc.moonchain.com/ws                  |
| Moonchain Hudson Testnet     | 177888  | https://Hudson-rpc.mchain.ai   | MCH    | https://Hudson-explorer.mchain.ai    | wss://Hudson-rpc.moonchain.com/ws     |

## Troubleshooting

**Metamask Doesn't Accept the Provided RPC Server Address?**

**1. Try a Different RPC Address**:
    - Visit [ChainList](https://chainlist.org) and search for the relevant network.
    - Select an alternative RPC address and try adding it again to MetaMask.

**2. Manually Enter the RPC Address**:
    - Follow the instructions provided in Step 2 for manually entering the RPC address in MetaMask.
