### DCCY Installation tutorial
### [中文说明](https://github.com/DCCY-Group/DCCY-Deploy/blob/master/install/doc/README_CN.md)
### [RPC Document](https://github.com/DCCY-Group/DCCY-Deploy/blob/master/install/doc/DCCY_RPC.md)

Operating system requirements: **ubuntu 16.04**
1. Install DCCY
- Download the code
```
git clone https://github.com/DCCY-Group/DCCY-Deploy.git
cd DCCY-Deploy/install
```
- Install dependencies
```
apt update
apt -y install curl sudo libusb-1.0-0-dev libicu-dev
```
- Installation and operation environment
> MD5 (installer-sakra.sh) == a78ac87f39b908f641c6bf34b9af1ccc  
```
chmod +x ./installer-sakra.sh && sh ./installer-sakra.sh
```

2. Start DCCY node

```
cd dccy
chmod +x node.js
./node.js
```

**Running the startup command directly will occupy the current terminal, and can be started using nohup.**

```nohup ./node.js 2>&1 >> dccy.log &```

**If there are no problems starting, the current information will be returned.**

```curl 127.0.0.1:8870/v1/chain/get_info```

```
{
"server_version": "14a65aca",
"chain_id": "22d49c00e4a603cbd283d7d274d2ae82ebf4e286dd5faa09a4e0f436bef7129d",
"head_block_num": 22338315,
"last_irreversible_block_num": 22337985,
"last_irreversible_block_id": "0154d9c1455286252fdcba17be08e87d3fb3b3a1ae14c479e196fbc658e682af",
"head_block_id": "0154db0b8691e3aff231ee91eb27f5d0881077294b66fd56545085cd0bab233e",
"head_block_time": "2019-12-17T12:41:56.500",
"head_block_producer": "genesisnodep",
"virtual_block_cpu_limit": 200000000,
"virtual_block_net_limit": 1048576000,
"block_cpu_limit": 199900,
"block_net_limit": 1048576,
"server_version_string": "v1.0-DCCY-4-g934842b"
}
```
![start.gif](https://github.com/DCCY-Group/DCCY-Deploy/blob/master/install/start.gif)
---

**Configuration item modification**  
config.json in the dccy directory
```
"config_dir": "./dccy_node",            // Generated config.ini directory
"data_dir": "./dccy_node",              // Block data directory
"core_symbol": "DCCY",
"pubkey_prefix": "DCCY",
"http_server_address": "0.0.0.0:8870",  // api interface listening address and port
"p2p_listen_endpoint": "0.0.0.0:9870"   // p2p listening address and address

```



---
### DCCY Deposit and Withdrawal Guide

[DCCY Node Security Guide](https://github.com/DCCY-Group/DCCY-Deploy/blob/master/install/doc/DCCY%C2%A0Node_Security_Guide_EN.md)

