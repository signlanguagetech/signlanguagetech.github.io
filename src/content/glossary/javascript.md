---
title: 'JavaScript (JS)'
description: "JavaScript is primarily a client-side language. JavaScript started at Netscape, a web browser developed in the 1990s."
pubDate: 'Aug.09.2024'
ytShortEmbeddedLink: 'https://youtube.com/embed/OYG5kN7KDSk'
---

## What's JavaScript?

JavaScript is mainly a client-side scripting language that originated at Netscape, a web browser from the 1990s. It can be embedded into webpages and is executed when a user accesses the page. Initially, JavaScript was designed to allow web developers to include executable code in their web pages to enhance interactivity and perform straightforward tasks. Today, its primary application is in browser scripting.

The syntax of JavaScript is largely influenced by C++ and Java. If you are familiar with these languages, you will find JavaScript's syntax quite recognizable. However, JavaScript functions more like a dynamically-typed, interpreted language such as Python or Ruby.

## Practice

A simple example of JavaScript that demonstrates how to create a function that changes the text content of a paragraph element on a webpage when a button is clicked.

First, let's create the HTML structure with a button and a paragraph:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>
    <button id="changeTextBtn">Change Text</button>
    <p id="textParagraph">This is the original text.</p>

    <script src="script.js"></script>
</body>
</html>
```

Next, let's write the JavaScript code that will change the text of the paragraph when the button is clicked. We'll put this in a separate file called `script.js`:

```javascript
document.getElementById("changeTextBtn").addEventListener("click", function() {
    var paragraph = document.getElementById("textParagraph");
    paragraph.textContent = "This is the new text after clicking the button!";
});
```

In this example, we use the `getElementById` method to select the button and the paragraph by their IDs. We add an event listener to the button that listens for the "click" event. When the button is clicked, the anonymous function we provided to the event listener is executed. This function changes the `textContent` of the paragraph, updating it with new text.

This is a basic example, but it shows how JavaScript can be used to interact with HTML elements and respond to user actions on a webpage. 

## JavaScript is not complied language, it is an interpreted one

JavaScript is an interpreted language, not a compiled one. Unlike C++ or Java, which require compilation before execution, JavaScript does not have a compilation step. Instead, it is read and executed line-by-line by an interpreter within the browser. Modern browsers utilize Just-In-Time (JIT) compilation, which compiles JavaScript into executable bytecode just before it runs.

Despite sharing part of its name with Java, JavaScript is quite distinct from Java. One major difference is that Java is a compiled language, while JavaScript is interpreted. JavaScript is natively supported in most browsers, while Java requires an additional plugin for applets. Each language has its own runtime environments, governing bodies, and libraries.

JavaScript is incredibly versatile and runs natively in all web browsers. This universality allows developers to create cross-platform applications easily. Additionally, with platforms like Node.js, JavaScript can now be used for server-side development, enabling the creation of full web applications where both client-side and server-side code is written in JavaScript.

JavaScript can be complex, and many development teams opt to use only a subset of its features. Style guides often recommend specific techniques, constructs, and libraries to manage JavaScript's complexity. In this class, we will suggest what we consider to be good style practices and cover a variety of styles to help you adapt quickly to different development teams.

## Where can we learn more?

[learn more about JavaScript on W3 Schools](https://www.w3schools.com/js/)
