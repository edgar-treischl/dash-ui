---
title: Start
group: Documents
category: Guides
---


Centralized telemetry solution for Vite Module Federation micro frontends using OpenTelemetry.

## Features

- 🚀 **Zero Configuration** - Initialize once in your Shell, use everywhere
- 📊 **Full Observability** - Traces, metrics, and logs via OpenTelemetry
- 🎯 **Core Web Vitals** - Automatic LCP, CLS, INP, FCP, TTFB tracking
- ⚡ **Lightweight** - Minimal performance overhead
- 🛡️ **Error Capture** - Uncaught exceptions, promise rejections, React error boundaries
- 🔗 **Distributed Tracing** - Complete request tracing across MFEs

## Quick Start

```bash
npm install @edgar-treischl/dash-telemetry
```

**Shell App:**
```ts
import { telemetry } from '@edgar-treischl/dash-telemetry';

telemetry.init({
  app: "shell",
  version: "1.0.0",
  endpoint: "http://localhost:4317/v1/traces"
});
```

**MFE App:**
```ts
import { telemetry } from '@edgar-treischl/dash-telemetry';

useEffect(() => {
  telemetry.setContext({
    mfe: "orders",
    version: "1.0.0"
  });
}, []);
```

## Documentation

- [Getting Started](./guide/) - Installation and setup
- [API Reference](./api/) - Complete API documentation
- [Examples](./examples/) - Real-world usage examples
- [Architecture](./guide/architecture) - Design and patterns

## Links

- [GitHub Repository](https://github.com/edgar-treischl/dash-telemetry)
- [npm Package](https://www.npmjs.com/package/@edgar-treischl/dash-telemetry)
- [OpenTelemetry](https://opentelemetry.io/)

## License

MIT
