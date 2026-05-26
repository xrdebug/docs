---
sidebar: false
home: false
heroImage: /logo.svg
heroText: xrDebug
tagline: Lightweight portable debug utility
actionText: Install →
actionLink: /install/
---

::: slot footer
Apache 2.0 Licensed | Copyright © [Rodolfo Berrios](https://rodolfoberrios.com)
:::

# xrDebug

[xrDebug](https://xrdebug.com/) is a lightweight web-based debug software. [Play video](https://xrdebug.com/xrdebug.mp4)

## Quick start

* [Install](/install) application (binary)

```sh
bash <(curl -sL xrdebug.com/bin.sh)
```

* [Run](run/README.md) `xrdebug` to spawn server

```sh
xrdebug
```

* Alternatively, run it with Docker (use `host.docker.internal` as the host)

```sh
docker run -t --init -p 27420:27420 ghcr.io/xrdebug/xrdebug:latest
```

## Debugging

* Install a client library for your language/framework or use the [HTTP API](./api/) directly

### Client libraries

A client library is a wrapper around the HTTP API and it enables to debug your application by using helpers in your codebase.

| Technology | Package                                                   |
| ---------- | --------------------------------------------------------- |
| Laravel    | [xrdebug/laravel](https://github.com/xrdebug/laravel)     |
| PHP        | [xrdebug/php](https://github.com/xrdebug/php)             |
| WordPress  | [xrdebug/wordpress](https://github.com/xrdebug/wordpress) |

## Contributing

If you want to contribute to xrDebug, please check the [developer guide](/developer).
