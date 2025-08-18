---
title: "Layer2 Gasfees"
---

# Gas Fees on Moonchain Layer 2

Moonchain is a Layer 2 (L2) network that settles transactions on BNB Chain (Layer 1). When submitting a transaction on Moonchain L2, a user incurs fees that compensate two main parties.

1.  **The Batch Poster (Sequencer)**:
    *   This fee covers the Layer 1 (L1) resources required to post the transaction batch to BNB Chain, primarily the cost of L1 calldata.
2.  **The Network Fee Account**:
    *   This fee encompasses the L2 resources, including computation, storage, and other burdens that L2 sequencers must bear to service the transaction within the Moonchain network.

The calculation of these fees involves two main components:

### L1 Security Component

- The L1 fee is determined by the transaction's estimated contribution to its batch's size, calculated using Brotli compression on the transaction alone.
- This fee is multiplied by the L2's view of the L1 data price, a dynamic value that adjusts over time to ensure the batch poster is fairly compensated for the cost on BNB Chain.

### L2 Execution Component

- The L2 fee consists of traditional charges a standard EVM chain would pay to validators, covering computation and storage costs associated with the state transition function.
- Additionally, the Moonchain zkEVM imposes extra fees for executing L2-specific operations, with charges dynamically priced based on the specific resources used during execution.

These mechanisms ensure that both the sequencer and the network are adequately compensated for the resources utilized, maintaining the efficiency and security of the Moonchain ecosystem.

### How Fees are Calculated

Every transaction on the Moonchain zkEVM involves two primary costs: the **Layer 2 (L2) execution fee** and the **Layer 1 (L1) security fee**. Here's an overview of how these fees are calculated:

#### L2 Execution Fee

The L2 execution fee covers the cost of executing your transaction within the Moonchain L2 environment. This fee is calculated as:
$$
L2 \text{ Execution Fee} = (\text{tx.gasPrice}) \times (\text{L2GasUsed})
$$
- **tx.gasPrice**: The price per unit of gas on Moonchain, which you can check on the [Moonchain Explorer](https://explorer.moonchain.com/).
- **L2GasUsed**: The amount of gas consumed by the transaction on L2, up to the specified gas limit (tx.gasLimit).

The gas price consists of two components: a base fee and a priority fee, in compliance with EIP-1559.

#### L1 Security Fee

The L1 security fee covers the cost of publishing your transaction data to BNB Chain, ensuring high security and data availability. This fee is deducted automatically from the sequencer's BNB balance on BNB Chain. It is calculated based on three factors:

1.  **L1 Gas Price**: The gas price for transactions on BNB Chain at the time of processing. You can monitor this value on platforms like the [BscScan Gas Tracker](https://bscscan.com/gastracker).

    :::important NOTE
    The L2's view of the L1 gas price can change but does not precisely track BNB Chain gas prices in real-time. This mechanism includes buffers to protect users from sudden, extreme spikes in L1 gas prices.
    :::

2.  **Gas Used on L1**: The amount of gas required to publish the transaction on BNB Chain. This is influenced by the transaction length and the byte values (whether a byte is zero or non-zero) for each byte in the transaction data.