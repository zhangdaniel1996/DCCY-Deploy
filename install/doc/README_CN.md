### DCCY 安装教程
操作系统要求: **ubuntu 16.04**
1. 安装DCCY
- 下载代码
```
git clone https://github.com/DCCY-Group/DCCY-Deploy.git
cd DCCY-Deploy/install
```
- 安装依赖
```
apt update
apt -y install curl sudo libusb-1.0-0-dev libicu-dev
```
- 安装运行环境  
> MD5 (installer-sakra.sh) == a78ac87f39b908f641c6bf34b9af1ccc  
```
chmod +x ./installer-sakra.sh && sh ./installer-sakra.sh
```

2. 启动DCCY节点

```
cd dccy
chmod +x node.js
./node.js
```

**直接运行启动命令会占用当前终端, 可以使用nohup启动.**

```nohup ./node.js 2>&1 >> dccy.log &```

**如果启动没有问题，会返回当前信息.**

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

**配置项修改**  
dccy目录下的config.json
```
"config_dir": "./dccy_node",            // 生成后的config.ini的目录
"data_dir": "./dccy_node",              // 区块数据目录
"core_symbol": "DCCY",
"pubkey_prefix": "DCCY",
"http_server_address": "0.0.0.0:8870",  // api接口监听地址及端口
"p2p_listen_endpoint": "0.0.0.0:9870"   // p2p监听的地址及地址

```



---
### DCCY 充提币指南

[简体中文](https://github.com/DCCY-Group/DCCY-Deploy/blob/master/install/doc/DCCY%C2%A0Node_Security_Guide.md)  

