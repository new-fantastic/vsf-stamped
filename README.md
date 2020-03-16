# Vue Storefront Stamped.io module
## Configuration
### PWA
```json
"stamped": {
  "storeHash": "000000",
  "publicKey": "pubkey-DFJASDJASKLDJASLKDJK",
  "products": {
    "configurable": {
      "useSimpleSku": false
    }
  }
}
```

### API
To `extensions` add:
```json
"stamped": {
  "storeHash": "000000",
  "publicKey": "pubkey-DFJASDJASKLDJASLKDJK",
  "privateKey": "key-SDKLADJKLASDKLASDJKLASLK"
}
```

If you want to override `storeHash`, `publicKey` or `privateKey` for different store, do it like that:
```json
"stamped": {
  "storeHash": "000000",
  "publicKey": "pubkey-DFJASDJASKLDJASLKDJK",
  "privateKey": "key-SDKLADJKLASDKLASDJKLASLK",
  "storeCode": {
    "es": {
      "storeHash": "000001",
      "publicKey": "pubkey-DFJASDJASKLDJASLKDJK",
      "privateKey": "key-SDKLADJKLASDKLASDJKLASLK"
    }
  }
}
```

To `registeredExtensions` add `stamped`.
Copy API/stamped to `src/api/ext`.