---
title: "Use The Bridge"
---

# Using Bridges

This guide will help you use the bridge to send tokens between BSC and Moonchain (Hudson Testnet). You can read more about how bridging works.

:::note[[Testnet Tokens]]
The Ride token and Park token are both dummy test sensor tokens used for testing the bridge and swap functionalities.
:::

## Prerequisites
- **Testnet Wallet**: A wallet with some testnet ETH on BSC Chain and/or Moonchain Hudson. (You can receive tokens [here](/testnet-tutorials/moonchain-faucet/).)

<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/wW0a3_zoEEQ" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

## Steps
**1. Visit the Bridge**: Navigate to the [bridge interface](https://Hudson-bridge.moonchain.com/). The UI should be intuitive and user-friendly.

**2. Bridge Tokens from BSC Chain to Moonchain Hudson**
    - Select the tokens you want to bridge `(MCH, RIDE, PARK)` from BSC Chain to Moonchain Hudson.
    - Approve the token transfer if required.
    - Click the `"Bridge"` button to initiate the transfer.
    - To manually claim the transfer, go to the `"Transactions"` tab and click the `"Claim"` button.

**3. Bridge Tokens from Moonchain Hudson to BSC Chain**
    - Select the tokens you want to bridge `(MCH, RIDE, PARK)` from Moonchain Hudson to BSC.
    - Approve the token transfer if required.
    - Click the `"Bridge"` button to initiate the transfer.
    - To manually claim the transfer, go to the `"Transactions"` tab and click the `"Claim"` button.

:::caution[CAUTION]
**BSC Chain Gas Issues**: Goerli often has gas problems that could cause the claim to fail. To mitigate this, go to MetaMask's gas settings page under `"Advanced"` and change the gas limit to 6,000,000 or 7,000,000.
:::

By following these steps, you can seamlessly bridge tokens between BSC Chain and Moonchain Hudson testnet, ensuring you account for potential gas issues on BSC Chain.
