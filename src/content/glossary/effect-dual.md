---
title: 'Effect Dual'
description: "In the context of APIs, dual refers to a function that supports both the data-first and data-last variants. It means that the API can be used interchangeably with either style, depending on the developer's preference"
pubDate: 'April.13.2024'
ytShortEmbeddedLink: 'https://www.youtube.com/embed/bCGzKjVnJNE'
---

# Effect Dual

In the context of APIs, "dual" refers to a function that supports both the "data-first" and "data-last" variants. It means that the API can be used interchangeably with either style, depending on the developer's preference.

One example of a dual API is the andThen function of the Effect data type.

In the "data-first" variant, the effect is passed as the first argument to andThen:

```ts
import { Effect } from 'effect';
Effect.andThen(Effect.succeed(1), (n) => n + 1);
```

## What is dual function in Effect?

This `dual` function in Effect is particularly useful in a static-typed language like TypeScript where defining function types enhance code reliability. By providing various function signatures, this function can have different ways without having to create multiple functions for each specialized case. here video:

<iframe class="glossary-yt-frame" src="https://www.youtube.com/embed/K30lWUYluI4?si=wNqkI2t_SjuYB_bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[learn more about Dual on Effect guides](https://effect.website/docs/guides/style/dual)
