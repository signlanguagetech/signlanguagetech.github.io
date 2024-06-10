---
title: 'Effect Pipe'
description: The pipe function is a utility that allows us to compose functions in a readable and sequential manner. It takes the output of one function and passes it as the input to the next function in the pipeline. This enables us to build complex transformations by chaining multiple functions together."
pubDate: 'May.04.2024'
ytShortEmbeddedLink: 'https://www.youtube.com/embed/bg9E9_5TC_c'
---

# Effect Pipe

The `pipe` function is a utility that allows us to compose functions in a readable and sequential manner. It takes the output of one function and passes it as the input to the next function in the pipeline. This enables us to build complex transformations by chaining multiple functions together.


```ts
import { Effect, Console } from 'effect';

const result = pipe(
  Effect.succeed(2),
  Effect.flatMap(num => Effect.succeed(num + 4)),
  Effect.tap(Console.log)
)

Effect.runSync(result)
```

[read more](https://effect.website/docs/guides/essentials/pipeline)
