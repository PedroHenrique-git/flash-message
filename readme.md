## Flash messages

a simples lib to show messages
## demo

<a href="https://pedrohenrique-git.github.io/flash-message/">click here</a>

## Getting Started

### installation

#### Download files

<a href="/download/flash-message.zip" download>click to download</a>

add files to html page

css:

`<link rel="stylesheet" href="./example/lib/flash-message-min.css">`

js: 

`<script defer src="./example/lib/flash-message-min.js"></script>`

### Usage

#### create a new instance of the object

`const flash = new FlashMessage()`

then call one of the predefined methods for messages

~~~javascript
flash.success('this is a flash message')
flash.error('this is a flash message')
flash.warn('this is a flash message')
flash.info('this is a flash message')
~~~
<br />

you can define the position and duration of the message by passing an object to the FlashMessage constructor

~~~javascript
const flash = new FlashMessage({
  position: 'top-left', // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
  duration: 3000, // in milliseconds
});
~~~