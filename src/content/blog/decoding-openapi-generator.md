---
title: "Decoding OpenAPI Generator: The Good, Bad, and Unexpected"
description: "OpenAPI Generator was in my journey filled with unexpected surprises and learning opportunities. data origin and debugging during my learning had a real challenge. The importance of reading documentation before delving into the command-line interface (CLI) was a vital lesson I learned."
pubDate: 'July.25.2024'
---

<iframe 
  class="youtube-frame"
  src="https://www.youtube.com/embed/RZOy3xi25J8?si=SGApkRSQUatE9RET"
  title="YouTube video player" 
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>

the source code is below if you want to jump :) 

<a href="https://openapi-generator.tech" target="_blank">the OpenAPI Generator</a> is a tool that's gaining significant popularity in the world of API design and development. Though I'm excited to share my newfound knowledge, I must admit that my journey was not altogether smooth. There were challenges along the way that tested my patience and determination.

One of the key points of friction I encountered was navigating through certain elements of data that seemed to appear out of the blue. Initially, I had trouble comprehending their source and function within the broader scheme of things, which left me somewhat confused. the following example i had trouble understanding:

```html
  {{#imports}}
  // @ts-ignore
  import { {{ classname }} } from '{{ filename }}';
  {{/imports}}

  {{#operations}}
  {{#operation}}{{#allParams.0}}export interface {{operationIdCamelCase}}Context { params: { {{#allParams}}{{^isBodyParam}}{{paramName}}{{^required}}?{{/required}}: {{{dataType}}}; {{/isBodyParam}}{{/allParams}} }{{#bodyParam}}, body: {{{dataType}}}{{/bodyParam}} };{{/allParams.0}}
  {{/operation}}
```
I had to dig deeper to uncover where these elements originated. As an earnest learner, I didn't shy away from exploring, understanding, and unraveling the perplexing aspects of the OpenAPI Generator.

Emerging from this challenge, the first step I took was to test the command line interface (CLI) of the OpenAPI Generator. It's a tool that lets developers interact with computers using text commands, representing the heart of the generator. But as I learned, sometimes jumping headfirst into the CLI without substantial knowledge about it can be counterproductive, causing more confusion and wasting valuable time.

```shell
  openapi-generator generate -i ./api/openapi.yaml -g typescript-angular -t ./templates/nestjs/ -o ./dist
```

Thus, I shifted my focus to reading the comprehensive documentation of OpenAPI, arming myself with the knowledge necessary to understand the different facets of the tool. To my surprise, the answers to most of my queries were right there in the documentation no matter how complex they seem, might have simple solutions.

Eventually, I discovered fantastic features in <a href="https://openapi-generator.tech/docs/globals">Global Properties</a>. This feature allowed me to efficiently debug the problematic data and understand its source, providing a significant breakthrough: `--global-property=debugOperations` or `--global-property=debugModels`

Also another problem that it outputs long text and hard to see in the cli, good news there is a solution we can find is to use `> file.txt`

```shell
  openapi-generator generate -i ./api/openapi.yaml -g typescript-angular -t ./templates/nestjs/ -o ./dist --global-property=debugOperations > file.txt
```

My experience at this is some invaluable lessons. The most important one being the necessity of familiarizing oneself with the documentation before using a development tool. This approach creates a solid foundation for understanding the tool's operation, thereby saving valuable time and effort.

Another vital lesson was the importance of being a problem solver and not being afraid to get my hands dirty. In the world of programming, challenges are inevitable. It's how one responds to these challenges that molds them into a competent and confident developer.

So, yes, understanding and mastering anything in software world is adventure, but it is also an enriching learning experience that push us further along in our journey as a web developer. With every challenge overcome, we become stronger, smarter, and more ready for the next step. This adventure served as a reminder that in the realm of development, persistence and patience always yield success.

<a href="https://github.com/miladvafaeifard/api">GitHub source</a>
