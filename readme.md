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

`flash.success('this is a flash message')`<br />
`flash.error('this is a flash message')`<br />
`flash.warn('this is a flash message')`<br />
`flash.info('this is a flash message')`<br />