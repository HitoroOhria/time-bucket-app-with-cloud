# Local Env

## Launch dev server

```shell
$ npm run serve
```

## Firebase Emulator

### Debug information

- Dashboard: http://localhost:4000
- Firestore: http://localhost:4000/firestore/data
- Functions: http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22

### Function url

1. Visit [functions logs page](http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22)
2. Find initialized message of functions.

```shell
functions http function initialized (http://127.0.0.1:5001/time-bucket-app-a419e/us-central1/helloWorld).
functions http function initialized (http://127.0.0.1:5001/time-bucket-app-a419e/us-central1/addExample).
```

# Deploy

```shell
$ npm run deploy
```