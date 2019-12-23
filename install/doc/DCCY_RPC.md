---
title: 
type: rpc
language: zh-cn
order: 1
---
# RPC API

说明:本文档使用的示例RPC接入点的地址以及端口为: http://127.0.0.1:8888, 请根据实际配置修改。

## CHAIN

### get_info

返回包含区块链的各种详细信息的对象。

```
POST http://127.0.0.1:8888/v1/chain/get_info
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_info
```

执行结果：

```
{
  "server_version": "14a65aca",
  "chain_id": "22d49c00e4a603cbd283d7d274d2ae82ebf4e286dd5faa09a4e0f436bef7129d",
  "head_block_num": 23311802,
  "last_irreversible_block_num": 23311473,
  "last_irreversible_block_id": "0163b471136f7d82142810e889f8f3475f74306ec96bafca7e3a2e879a3a96ea",
  "head_block_id": "0163b5bafdd7b6dd7effd10b6df8ed99048b33a8a73658859389e66e8b0dc6c7",
  "head_block_time": "2019-12-23T03:54:20.000",
  "head_block_producer": "genesisnode1",
  "virtual_block_cpu_limit": 200000000,
  "virtual_block_net_limit": 1048576000,
  "block_cpu_limit": 199900,
  "block_net_limit": 1048576,
  "server_version_string": "v1.0-DCCY"
}                                                                                              
```



### get_block

返回一个对象，其中包含有关区块链上特定块的各种详细信息。

```
POST http://127.0.0.1:8888/v1/chain/get_block
```
示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_block \
  --data '{"block_num_or_id": "5"}'
```

**主体参数**

| 参数                | 类型   | 描述                                     |          |
| ------------------- | ------ | ---------------------------------------- | -------- |
| **block_num_or_id** | string | Provide a `block number` or a `block id` | REQUIRED |

执行结果：

```
{
  "timestamp": "2019-08-10T06:02:00.000",
  "producer": "",
  "confirmed": 1,
  "previous": "0000000000000000000000000000000000000000000000000000000000000000",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "22d49c00e4a603cbd283d7d274d2ae82ebf4e286dd5faa09a4e0f436bef7129d",
  "schedule_version": 0,
  "new_producers": null,
  "header_extensions": [],
  "producer_signature": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
  "transactions": [],
  "block_extensions": [],
  "id": "00000001ad66ef8c96ab1a3b9cdca445d7bd6a5567ea9233f7fc6f5298666eca",
  "block_num": 1,
  "ref_block_prefix": 991603606
}
```



### get_block_header_state

获取可逆区块头状态。

```
POST http://127.0.0.1:8888/v1/chain/get_block_header_state
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_block_header_state \
  --data '{"block_num_or_id":"118"}'
```

**主体参数**

| 参数                | 类型   | 描述                                     |      |
| ------------------- | ------ | ---------------------------------------- | ---- |
| **block_num_or_id** | string | Provide a `block number` or a `block id` | /    |



### get_account

返回一个对象，其中包含有关区块链上特定帐户的各种详细信息。

```
POST http://127.0.0.1:8888/v1/chain/get_account
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_account \
  --data '{"account_name": "dccy"}'
```

**主体参数**

| 参数             | 类型   | 描述                    |          |
| ---------------- | ------ | ----------------------- | -------- |
| **account_name** | string | Provide an account name | REQUIRED |

执行结果：

```
{
  "account_name": "dccy",
  "head_block_num": 23338559,
  "head_block_time": "2019-12-23T07:37:18.500",
  "privileged": false,
  "last_code_update": "1970-01-01T00:00:00.000",
  "created": "2019-08-10T06:02:38.000",
  "ram_quota": -1,
  "net_weight": -1,
  "cpu_weight": -1,
  "net_limit": {
    "used": -1,
    "available": -1,
    "max": -1
  },
  "cpu_limit": {
    "used": -1,
    "available": -1,
    "max": -1
  },
  "ram_usage": 9268,
  "permissions": [
    {
      "perm_name": "active",
      "parent": "owner",
      "required_auth": {
        "threshold": 1,
        "keys": [
          {
            "key": "DCCY5HYM5NTdyvZaQeSt3zSD8f2jSFUeykz2B4Qhg46Bn2H2zFw9fN",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      }
    },
    {
      "perm_name": "owner",
      "parent": "",
      "required_auth": {
        "threshold": 1,
        "keys": [
          {
            "key": "DCCY5HYM5NTdyvZaQeSt3zSD8f2jSFUeykz2B4Qhg46Bn2H2zFw9fN",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      }
    }
  ],
  "total_resources": null,
  "self_delegated_bandwidth": null,
  "refund_request": null,
  "voter_info": null
}
```



### get_abi

获取账户的 abi 数据。

```
POST http://127.0.0.1:8888/v1/chain/get_abi
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_abi \
  --data '{"account_name": "hello"}'
```

**主体参数**

| 参数             | 类型   | 描述                                |      |
| ---------------- | ------ | ----------------------------------- | ---- |
| **account_name** | string | name of account to retrieve ABI for | /    |

执行结果：

```
{
  "account_name":"hello",
  "abi":{
    "version":"eosio::abi/1.0",
    "types":[],
    "structs":[
      {
        "name":"player",
        "base":"",
        "fields":[
          {
            "name":"title",
            "type":"string"
          },
          {
            "name":"age",
            "type":"int64"
          }
        ]
      },
      {
        "name":"hi",
        "base":"",
        "fields":[
          {
            "name":"user",
            "type":"name"
          }
        ]
      }
    ],
    "actions":[
      {
        "name":"hi",
        "type":"hi",
        "ricardian_contract":""
      }
    ],
    "tables":[],
    "ricardian_clauses":[],
    "error_messages":[],
    "abi_extensions":[],
    "variants":[]
  }
}
```



### get_raw_code_and_abi

获取账户的原始 code 和 abi 数据。

```
POST http://127.0.0.1:8888/v1/chain/get_raw_code_and_abi
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_raw_code_and_abi \
  --data '{"account_name":"hello"}'
```

**主体参数**

| 参数             | 类型   | 描述                                 |      |
| ---------------- | ------ | ------------------------------------ | ---- |
| **account_name** | string | Account name to get code and abi for | /    |

执行结果：

```
{
  "account_name":"hello"
  "wasm":"UEsDBC0AAAAIAPCEd01qlACiNgAAADkAAAAIABQAaW5kZXguanMBABAAAAAAAAAAAAAAAAAAAAAAAEutKMgvKinWy8hUsFUoLU4tUrC1U0jOzyvOz0nVSy0qyi/SUM/MA4mUFCUml1ip64BVaVoDAFBLAQIAABQAAAAIAPCEd01qlACiNgAAADkAAAAIAAAAAAAAAAEAAAAAAAAAAABpbmRleC5qc1BLBQYAAAAAAQABADYAAABwAAAAAAA=="
  "abi":"DmVvc2lvOjphYmkvMS4wAAIGcGxheWVyAAIFdGl0bGUGc3RyaW5nA2FnZQVpbnQ2NAJoaQABBHVzZXIEbmFtZQEAAAAAAACAawJoaQAAAAAA="
}
```



### get_table_rows

返回包含指定表中行的对象。

```
POST http://127.0.0.1:8888/v1/chain/get_table_rows
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_table_rows \
  --data '{"scope":"accountfeedc","code":"eosio.token","table":"accounts","json":true}'
```

**主体参数**

| 参数            | 类型    | 描述                            |          |
| --------------- | ------- | ------------------------------- | -------- |
| **scope**       | string  | Provide the account name        | REQUIRED |
| **code**        | string  | Provide the smart contract name | REQUIRED |
| **table**       | string  | Provide the table name          | REQUIRED |
| **json**        | boolean | return result in JSON format    | REQUIRED |
| **lower_bound** | int32   | Provide the lower bound         | /        |
| **upper_bound** | int32   | Provide the upper bound         | /        |
| **limit**       | int32   | Provide the limit               | /        |

执行结果：

```
{
  "rows": [
    {
      "primary": 0,
      "balance": {
        "quantity": "972.8617 DCCY",
        "contract": "eosio"
      }
    }
  ],
  "more": false
}
```



### abi_json_to_bin

将 json 序列化为二进制十六进制。 生成的二进制十六进制通常用于 push_transaction 中的数据字段。

```
POST http://127.0.0.1:8888/v1/chain/abi_json_to_bin
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/abi_json_to_bin \
  --data '{"code":"eosio.token","action":"transfer","args":{"from":"testnetyy111","to":"testneths111","quantity":"100.0000 DCCY", "memo":"hi there"}}'
```

**主体参数**

| 参数       | 类型   | 描述                         |      |
| ---------- | ------ | ---------------------------- | ---- |
| **code**   | string | Provide the account name     | /    |
| **action** | string | Provide the action arguments | /    |
| **args**   | json   | Provide the json arguments   | /    |

执行结果：

```
{
  "binargs": "1042f03eab99b1ca1042c02dab99b1ca40420f00000000000444434359000000086869207468657265",
}
```



### abi_bin_to_json

将二进制十六进制序列化为 json 格式。

```
POST http://127.0.0.1:8888/v1/chain/abi_bin_to_json
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/abi_bin_to_json \
  --data '{"code":"eosio.token","action":"transfer","binargs":"1042f03eab99b1ca1042c02dab99b1ca40420f00000000000444434359000000086869207468657265"}'
```

**主体参数**

| 参数        | 类型   | 描述                                    |          |
| ----------- | ------ | --------------------------------------- | -------- |
| **code**    | string | Provide the smart contract account name | REQUIRED |
| **action**  | string | Provide the action name                 | REQUIRED |
| **binargs** | string | Provide the binary arguments            | REQUIRED |

执行结果：

```
{
  "args": {
    "from": "testnetyy111",
    "to": "testneths111",
    "quantity": "100.0000 DCCY",
    "memo": "hi there"
  }
}
```



### get_required_keys

返回签署事务所需的密钥。

```
POST http://127.0.0.1:8888/v1/chain/get_required_keys
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_required_keys \
  --data '{"transaction":transaction_object,"action":available_keys}'
```

**主体参数**

| 参数               | 类型             | 描述                           |          |
| ------------------ | ---------------- | ------------------------------ | -------- |
| **transaction**    | json             | Provide the transaction object | REQUIRED |
| **available_keys** | array of strings | Provide the available keys     | REQUIRED |

执行结果：

```
{
  "required_keys": [
    "DCCY8ZhzH6fMgFVxmXbntS1HejRgMdQebCkH2VDcvBMcyJj9b8p9ts"
  ]
}
```

#### Example

`transaction`

```json
{
  "ref_block_num": "100",
  "ref_block_prefix": "137469861",
  "expiration": "2017-09-25T06:28:49",
  "scope": ["initb", "initc"],
  "actions": [{
    "code": "currency",
    "type": "transfer",
    "recipients": ["initb", "initc"],
    "authorization": [{
      "account": "initb",
      "permission": "active"
    }],
    "data": "000000000041934b000000008041934be803000000000000"
  }],
  "signatures": [],
  "authorizations": []
}
```

`available_keys`

```json
["DCCY7HYFFSV71soDcu96hnjAYXYFyfBaWxwb448Q3g51p1hrY9L8Hq",
 "DCCY7SVzGaUjYYiP38bjXNcGUvGqnATGpnYnY9vhzg2fU2GF9KDHNJ",
 "DCCY8C2pJrwtLnrjz6TpdDCgCsXYf82CCHWU2S7rtizfK8WayZGBic"]

```



### get_producers

获取生产者信息。

```
POST http://127.0.0.1:8888/v1/chain/get_producers
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/get_producers
```

**主体参数**

| 参数            | 类型    | 描述                                  |      |
| --------------- | ------- | ------------------------------------- | ---- |
| **limit**       | string  | total number of producers to retrieve | /    |
| **lower_bound** | string  |                                       | /    |
| **json**        | boolean | return result in JSON format?         | /    |



### push_block

推送区块。

```
POST http://127.0.0.1:8888/v1/chain/push_block
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/push_block
```

**主体参数**

| 参数                   | 类型             | 描述 |      |
| ---------------------- | ---------------- | ---- | ---- |
| **timestamp**          | date-time        |      | /    |
| **producer**           | string           |      | /    |
| **confirmed**          | int32            |      | /    |
| **previous**           | string           |      | /    |
| **transaction_mroot**  | string           |      | /    |
| **action_mroot**       | int32            |      | /    |
| **version**            | string           |      | /    |
| **new_producers**      | array of strings |      | /    |
| **header_extensions**  | array of strings |      | /    |
| **producer_signature** | string           |      | /    |
| **transactions**       | array            |      | /    |
| **block_extensions**   | array of strings |      | /    |



### push_transaction

此方法需要JSON格式的事务，并尝试将其应用于区块链。

```
POST http://127.0.0.1:8888/v1/chain/push_transaction
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/push_transaction
```

**主体参数**

| 参数                         | 类型             | 描述                                                  |      |
| ---------------------------- | ---------------- | ----------------------------------------------------- | ---- |
| **signatures**               | array of strings | array of signatures required to authorize transaction | /    |
| **compression**              | string           | compression used, usually false                       | /    |
| **packed_context_free_data** | string           | json to hex                                           | /    |
| **packed_trx**               | string           | json to hex                                           | /    |

执行结果：

```
{
	'transaction_id' = "1..."
}
```

#### Example

**Note**

这里的`ref_block_num`和`ref_block_prefix`是`last_irreversible_block`的`/v1/chain/get_block`的结果。 可以通过调用`/v1/chain/get_info`找到`last_irreversible_block`。



### push_transactions

此方法需要JSON格式的事务，并尝试将其应用于区块链。 此方法一次推送多个事务。

```
POST http://127.0.0.1:8888/v1/chain/push_transaction
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/chain/push_transaction \
  --data '{"body":transaction}'
```

**主体参数**

| 参数     | 类型 | 描述                                           |          |
| -------- | ---- | ---------------------------------------------- | -------- |
| **body** | json | Provide the authorizations for the transaction | REQUIRED |

执行结果：

```
{
	'transaction_id' = "1..."
}
```

#### Example 

**Note**

这里的`ref_block_num`和`ref_block_prefix`是`last_irreversible_block`的`/v1/chain/get_block`的结果。 可以通过调用`/v1/chain/get_info`找到`last_irreversible_block`。



## HISTORY

> 注意：需要启用 history-api 插件

### get_actions

根据账户名查询账户查询历史动作。

```
POST http://127.0.0.1:8888/v1/history/get_actions
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/history/get_actions
```

**主体参数**

| 参数           | 类型  |      |
| -------------- | ----- | ---- |
| **account_name** | string | Provide an account name | REQUIRED |
| **pos** | int32 | /    |
| **offset** | int32 | /    |



### get_transaction

根据交易id查询历史交易。

```
POST http://127.0.0.1:8888/v1/history/get_transaction
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/history/get_transaction
```

**主体参数**

| 参数           | 类型  |      |
| -------------- | ----- | ---- |
| **id** | string | 交易id    |



### get_key_accounts

根据公钥查询账户。

```
POST http://127.0.0.1:8888/v1/history/get_key_accounts
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/history/get_key_accounts
```

**主体参数**

| 参数           | 类型  |      |
| -------------- | ----- | ---- |
| **public_key** | int32 | /    |



### get_controlled_accounts

根据账户名查询指定账号的受控子账号。

```
POST http://127.0.0.1:8888/v1/history/get_controlled_accounts
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/history/get_controlled_accounts
```

**主体参数**

| 参数           | 类型  |      |
| -------------- | ----- | ---- |
| **account_name** | string | Provide an account name | REQUIRED |



## NET

> 注意：需要启用 net 插件

### connect

```
POST http://127.0.0.1:8888/v1/net/connect
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/net/connect
```

**参数**

string



### disconnect

```
POST http://127.0.0.1:8888/v1/net/disconnect
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/net/disconnect \
  --data '""'
```

**参数**

string



### connections

```
POST http://127.0.0.1:8888/v1/net/connections
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/net/connections
```



### status

```
POST http://127.0.0.1:8888/v1/net/status
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/net/status
```



## PRODUCER

> 需要启用 producer 插件

### pause

```
POST http://127.0.0.1:8888/v1/producer/pause
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/pause
```



### resume

```
POST http://127.0.0.1:8888/v1/producer/resume
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/resume
```



### paused

```
POST http://127.0.0.1:8888/v1/producer/paused
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/resume
```



### get_runtime_options

```
POST http://127.0.0.1:8888/v1/producer/get_runtime_options
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/get_runtime_options
```



### update_runtime_options

```
POST http://127.0.0.1:8888/v1/producer/update_runtime_options
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/update_runtime_options
```

**主体参数**

| 参数                           | 类型  |      |
| ------------------------------ | ----- | ---- |
| **max_transaction_time**       | int32 | /    |
| **max_irreversible_block_age** | int32 | /    |
| **produce_time_offset_us**     | int32 | /    |
| **last_block_time_offset_us**  | int32 | /    |
| **incoming_defer_ratio**       | int32 | /    |
| **subjective_cpu_leeway_us**   | int32 | /    |



### get_greylist

```
POST http://127.0.0.1:8888/v1/producer/get_greylist
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/get_greylist
```

执行结果：

```
{"accounts":["a11111111111","aaa","bbb"]}
```



### add_greylist_accounts

```
POST http://127.0.0.1:8888/v1/producer/add_greylist_accounts
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/add_greylist_accounts
```

**主体参数**

| 参数         | 类型             | 描述                        |      |
| ------------ | ---------------- | --------------------------- | ---- |
| **accounts** | array of strings | Accounts to add to greylist | /    |



### remove_greylist_accounts

```
POST http://127.0.0.1:8888/v1/producer/remove_greylist_accounts
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/remove_greylist_accounts
```

**主体参数**

| 参数         | 类型             | 描述                        |      |
| ------------ | ---------------- | --------------------------- | ---- |
| **accounts** | array of strings | Accounts to add to greylist | /    |



### get_whitelist_blacklist

```
POST http://127.0.0.1:8888/v1/producer/get_whitelist_blacklist
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/get_whitelist_blacklist
```



### set_whitelist_blacklist

```
POST http://127.0.0.1:8888/v1/producer/set_whitelist_blacklist
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/producer/set_whitelist_blacklist
```





## DBSIZE

### get

```
POST http://127.0.0.1:8888/v1/db_size/get
```

示例：

```
curl --request POST \
  --url http://127.0.0.1:8888/v1/db_size/get
```

