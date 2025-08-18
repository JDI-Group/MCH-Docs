---
title: "Physical Device"
---













# Controlling a Physical Device via Moonchain

This demonstration illustrates how to control a physical device using Moonchain, specifically through remotely toggling an LED on or off. It emphasizes the seamless integration of blockchain technology with real-world hardware, showcasing the potential for secure, decentralized control in various applications.

### English
<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/30CATOQeYKc" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

### German
<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/1uU0s5Zzf3I" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

## Moonchain Info
- Contract Proposals: [MEPs Repository](https://github.com/JDI-Group/MEPs)
- Deployed Contrace Addresses:
    - MEP801: <code>0x070B3e2229a27CDd34126E96B2Ce65c63BD1A5CE</code>
    - MEP802: <code>0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6</code>
    - MEP803: <code>0xBFc77Ee5959699eC4171891b625D6EccdC9e00cD</code>

:::note[[NOTE]]
Commands in this document use the wallet address `0xa2d9E584F4cF0167d283dB6EB4922082269B6bB7` as an example. MCH tokens are required for gas fees and other transaction costs.
:::
- Private Key: <code>318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368</code>

```
318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
```

### Change the X2E Firmware
- Firmware Repository: [Moonchain-Control-X2E](https://github.com/JDI-Group/Moonchain-Control-X2E)
- Download the Mobile App Tool (Nordic DFU):
    - [Google Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.dfu&hl=en&gl=US)
    - [Apple App Store](https://apps.apple.com/tt/app/nrf-device-firmware-update/id1624454660)(requires iOS 16 or higher)
- Update Firmware:
    - Copy `demo_controls_dfu_ism2400.zip` to your mobile phone (Place it in the download folder for recognition).
    ![DFU_1](/img/X2E/DFU_1.png)
    - Open the DFU App, select the firmware binary file, and start scanning for BLE devices.
    ![DFU_2](/img/X2E/DFU_2.png)
    - Hold the X2E board's "USER" button for 5 seconds to initiate DFU mode.
    ![DFU_3](/img/X2E/DFU_3.png)
    - Select the X2E board on the app, tap "Start" to upgrade the firmware, and wait for completion.
    ![DFU_4](/img/X2E/DFU_4.png)

### Connection of X2E
To control an LED, follow these connection guidelines:
![x2e_connections](/img/X2E/x2e_connections.png)

### Purchase a Provision ID (PID)
- Obtain a temporary email address to receive the PID. This prevents exposing your personal email on Moonchain.
![temp_email](/img/X2E/temp_email.png)
- Check Device Profile
    - Ensure it matches the firmware of your X2E board. Use the ISM2400 profile with index 3.
    ```bash
    cast call 0xBFc77Ee5959699eC4171891b625D6EccdC9e00cD "deviceProfileList(uint256) (uint256,string,address,string,bool,uint256)" 3 --rpc-url https://Hudson-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
    ```
    - Response will be similar to one below
    ```bash
    3
    X2E Class C - ISM2400
    0xD9892d06C864a41A38915dDd48DF11A0DBfdCf89
    https://api.github.com/repos/MatchX-GmbH/iso-device-profile/contents/matchx/x2e_class_c_ism2400.json
    true
    100000000000000000`
    ```

- Check PID Unit Price
```bash
cast call 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "pidUnitPrice() (uint256)" --rpc-url https://Hudson-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
```
    - Response: `123450000000000000000 wei` (123.45 MCH).
- Purchase PID
    - Replace the email with your own and use the following command to purchase a PID via MEP802.
    ```bash
    cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "producePid(string,uint256,uint256)" "temporary.email@example.com" 1 3 --rpc-url https://Hudson-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368 --value 123450000000000000000
    ```
    - After a few minutes, you will receive an email with a PID CSV file.
    ![pid_email](/img/X2E/pid_email.png)
- Extract PID and pidZkevmHash
    - Use the PID and pidZkevmHash from the CSV file to set up the X2E board.
    ![pid_csv](/img/X2E/pid_csv.png)

### Setup the X2E Board

- Connect the X2E board to your computer using a USB Type-C cable.
- Launch a serial terminal program (e.g., minicom on Linux or PuTTY on Windows) with settings `115200 8N1`.
    - Use the following command:
    ```bash
    minicom -b 115200 -8  -D /dev/ttyACM0 -o
    ```
- Send "AT" command to verify connection. You should receive "OK".
    - Run the `AT` command
    ![at_ok](/img/at/ok.jpg)
- Change the PID of the X2E board:
    - Use the following command:
    ```bash
    AT+CQRCODE={"PID":"K2ILSDXUOO3O4EEIWZDDW6SL","B":"MatchX","M":"X2E","V":"1.3"}
    ```
- Clear all data and reboot
    - Run the command below:
    ```bash
    AT+IREBOOT=8
    ```
    ![x2e_reboot](/img/X2E/x2e_reboot.png)

Wait for a while, the X2E board will finish the provisioning process with the new PID. After that, it will start to join the network and send data. After it joined, the status LED will lite steady and the Control pin (IO14) will go higher. If you are using the suggested connection, the target LED will be lit.

If this doesn't happen after 6 minutes, please check the status of your NEO miner and make sure it is running.
![x2e_provisioned](/img/X2E/x2e_provisioned.png)

### Mint the Sensor NFT for the X2E Board
- Check Minting Price
    ```bash
    cast call 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "priceInfoList(uint256) (uint256,uint,bool)" 0 --rpc-url https://Hudson-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
    ```
    - Response `9876500000000000000 wei` (9.8765 MCH).
- Mint the NFT
    - Replace `0xf6d4bd...` with the pidZkevmHash and use the following command:
    ```bash
    cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "mintSensorNFT(uint256,uint256,string)" 0xf6d4bda9e25797a1423a41c485bfaa8e03930f0dbdf2d2b324d79fa71d8c9108 0 "https://global.matchx.io/iso/x2e/x2e_ref_sensor.jpeg" --rpc-url https://Hudson-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368 --value 9876500000000000000
    ```
- Burn Sensor NFT to Repeat Process
```bash
cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "burnSensorNFT(uint256)" 0xf6d4bda9e25797a1423a41c485bfaa8e03930f0dbdf2d2b324d79fa71d8c9108 --rpc-url https://Hudson-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
```
### Controlling via Moonchain
You can control the pin output in three modes: always low, always high, or cycling (blinking). Replace `0xf6d4bd...` with the pidZkevmHash from earlier commands.
- Set to Low (Turn off LED)
    ```bash
    cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "enqueueDownlink(uint256,string,uint8,uint8)" 0xf6d4bda9e25797a1423a41c485bfaa8e03930f0dbdf2d2b324d79fa71d8c9108 "Qh
    ```