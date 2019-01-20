# Learning Management System

The application consists of 2 processes:

  - [`app`](#app)
  - [`social-preprocessor-worker`](#social-preprocessor-worker)

## Processes

Use the `PROCESS_TYPE` environment variable to select the process to be run.

```shell
$ PROCESS_TYPE=app NODE_ENV=production npm start
```

#### Environment variables

  - `NODE_ENV` (`'development' | 'production'`): when `development`, it uses dotenv, to read the local `.env` file, that's the only difference
  - `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
  - `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`

### Social preprocessor worker

Have not configured yet

#### Environment variables

  - `NODE_ENV` (`'development' | 'production'`): when `development`, it uses dotenv, to read the local `.env` file, that's the only difference
  - `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
  - `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`
  - `REDIS_URI`
  - `REDIS_DATA_RETENTION_IN_MS`, default: `86400000` (1 day)

### App

The process is serving an HTTP API to return the users.

  - `GET /api/v1/users?limit&offset`

#### Environment variables

  - `NODE_ENV` (`'development' | 'production'`): when `development`, it uses dotenv, to read the local `.env` file, that's the only difference
  - `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
  - `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`
  - `REDIS_URI`
  - `PORT`
