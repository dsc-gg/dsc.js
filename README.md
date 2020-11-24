# Dsc.js

<p align="center">
  <a href="https://npmjs.com/dsc.js"><img src="https://img.shields.io/npm/v/dsc.js.svg" alt="NPM Package Version"></a>
  <a href="https://npmjs.com/dsc.js"><img src="https://img.shields.io/github/languages/code-size/dsc-gg/dsc.js.svg" alt="Size"></a>
</p>

The official Javascript wrapper for the dsc.gg API

To use this package, you need to create a developer app <a href="https://dsc.gg/developer">here</a> and grab the API token. This token is required for all API requests.


## Install instructions

Install with NPM

`npm install dsc.js`

Install with Yarn

`yarn install dsc.js`

---


## Getting Started

**Initilize the dsc.js client**

```js
const Link = require("dsc.js");

const client = new Link.Client({
    api_key: "Your API token",
    version: 2
})
```


## Client Functions

**Fetch information on a dsc.gg link**

```js
client.fetchLink('link_ending').then((link) => {
console.log(link)
});
```

**Fetch information on a dsc.gg user**

```js
client.fetchUser('user_id').then((user) => {
console.log(user)
});
```

**Search for dsc.gg links**

```js
client.search('search_query').then((results) => {
console.log(results)
});
```

**Create a dsc.gg link**

```js
client.createLink({
    link: 'link_ending',
    type: 'server', //this can be server, bot, template or link
    redirect: 'link_redirect',
    unlisted: false, //optional
    password: 'some_password', //optional
    meta_title: 'some embed title', //optional
    meta_description: 'some embed description', //optional
    meta_image: 'some image url' //optional

}).then((val) => {
    console.log(val)
});
```

**Update a dsc.gg link**

```js
client.updateLink({
    link: 'link_ending',
    type: 'server', //this can be server, bot, template or link
    redirect: 'link_redirect',
    unlisted: false, //optional
    password: 'some_password', //optional
    meta_title: 'some embed title', //optional
    meta_description: 'some embed description', //optional
    meta_image: 'some image url' //optional

}).then((val) => {
    console.log(val)
});
```

**Delete a dsc.gg link**

```js
client.deleteLink('link_ending').then((val) => {
    console.log(val)
});
```


# Full Example

**Search for links from a given input**
```js
const Link = require("dsc.js");

const client = new Link.Client({
    api_key: "Your API token",
    version: 2
})

var input = 'gaming'

client.search(input).then((results) => {
console.log(`First result: https://dsc.gg/${results[0]._id}`)
});
```