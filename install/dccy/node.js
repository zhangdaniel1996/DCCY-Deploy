#!/usr/local/bin/fibos

const fibos = require('fibos');
const fs = require("fs");
const config = require('./config');
const p2paddress = require('./p2p.json');

console.notice("start FIBOS seed node");


fibos.config_dir = config.config_dir;
fibos.data_dir = config.data_dir;

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);


fibos.load("http", {
	"http-server-address": config.http_server_address,
	"access-control-allow-origin": "*",
	"access-control-allow-headers": "content-type",
	"http-validate-host": false,
	"verbose-http-errors": true
});


fibos.load("net", {
	"p2p-peer-address": p2paddress,
	"max-clients": 100,
	"p2p-listen-endpoint": config.p2p_listen_endpoint,
	"agent-name": "FIBOS Seed"
});

let chain_config = {
	"contracts-console": true,
	'chain-state-db-size-mb': 8 * 1024,
};

chain_config['genesis-json'] = "genesis.json";

fibos.load("producer", {
	'max-transaction-time': 3000
});


fibos.load("chain", chain_config);
fibos.load("chain_api");

fibos.core_symbol = config.core_symbol;
fibos.pubkey_prefix = config.pubkey_prefix;


fibos.start();
