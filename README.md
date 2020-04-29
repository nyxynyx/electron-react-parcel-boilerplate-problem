# Importing `redux-beacon-electon` causes error: Uncaught TypeError: fs.existsSync is not a function

![screenshot](./screenshot_with_error.png)

## To Reproduce:

1. `yarn`
2. `yarn start`

## Details

The problematic module import is located in the file [`./src/store.js`](./src/store.js).

```js
import { 
    createElectronGoogleAnalyticsTarget, 
    actionMetaEventMapper as eventsMapper
} from 'redux-beacon-electron'
```

## Environment

| Software         | Version(s) |
| ---------------- | ---------- |
| Parcel           | 1.12.4
| Node             | v13.7.0
| npm/Yarn         | 1.22.4
| Operating System | Mac OS X Catalina 10.15.3