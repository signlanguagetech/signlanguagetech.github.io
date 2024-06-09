---
title: 'Effect Dual'
description: "In the context of APIs, dual refers to a function that supports both the data-first and data-last variants. It means that the API can be used interchangeably with either style, depending on the developer's preference"
pubDate: 'May.25.2024'
ytShortEmbeddedLink: 'https://www.youtube.com/embed/bCGzKjVnJNE'
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/K30lWUYluI4?si=wNqkI2t_SjuYB_bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Effect dual

In the context of APIs, "dual" refers to a function that supports both the "data-first" and "data-last" variants. It means that the API can be used interchangeably with either style, depending on the developer's preference.

One example of a dual API is the andThen function of the Effect data type.

In the "data-first" variant, the effect is passed as the first argument to andThen:

```ts
import { Effect } from 'effect';
Effect.andThen(Effect.succeed(1), (n) => n + 1);
```
