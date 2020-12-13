# Dsc.js

<p align="center">
  <a href="https://npmjs.com/dsc.js"><img src="https://img.shields.io/npm/v/dsc.js.svg" alt="NPM Package Version"></a>
  <a href="https://npmjs.com/dsc.js"><img src="https://img.shields.io/github/languages/code-size/dsc-gg/dsc.js.svg" alt="Size"></a>
</p>

The official Javascript wrapper for the dsc.gg API

To use this package, you need to create a developer app <a href="https://dsc.gg/developers/dashboard">here</a> and grab the API token. This token is required for all API requests.


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

const client = new Link.Client("Your API token")
```


## Client Functions

**Fetch information on a dsc.gg link**

```js
var link = await client.fetchLink('link_ending')
console.log(link)
```

**Fetch information on a dsc.gg user**

```js
var user = await client.fetchUser('user_id')
console.log(user)
```

**Fetch a dsc.gg user's links**

```js
var links = await client.fetchUserLinks('user_id')
console.log(links)
```

**Fetch a dsc.gg user's developer apps**

```js
var apps = await client.fetchUserApps('user_id')
console.log(apps)
```

**Fetch information on a dsc.gg developer app**

```js
var app = await client.fetchApp('app_id')
console.log(app)
```

**Fetch the top dsc.gg links**

```js
var top_links = await client.fetchTopLinks()
console.log(top_links)
```

**Search for dsc.gg links**

```js
var results = await client.search('search_query', {
    type: 'bot', //optional - can be bot, server, or template
    limit: 10, //optional - limit the # of results that will be returned
})
console.log(results)
```

**Create a dsc.gg link**

```js
var response = await client.createLink({
    link: 'link_ending',
    type: 'server', //this can be server, bot, template or link
    redirect: 'something', //the redirect of the link
    unlisted: false, //true or false
    password: 'some_password', //optional - exclude this for no password
    meta: {
        title: 'some embed title', //optional
        description: 'some embed description', //optional
        image: 'some image url' //optional
    }
})
console.log(response)
```

**Update a dsc.gg link**

```js
var response = await client.updateLink({
    link: 'link_ending',
    type: 'server', //this can be server, bot, template or link
    redirect: 'something', //the redirect of the link
    unlisted: false, //true or false
    password: 'some_password', //optional - exclude this for no password
    meta: {
        title: 'some embed title', //optional
        description: 'some embed description', //optional
        image: 'some image url' //optional
    }
})
console.log(response)
```

**Delete a dsc.gg link**

```js
var response = await client.deleteLink('link_ending')
console.log(response)
```


# Full Example

**Search for links from a given input**
```js
const Link = require("dsc.js");

const client = new Link.Client("Your API token")

var input = 'gaming'

var results = await client.search(input, {
    type: 'server',
    limit: 10
})
console.log(results[0])
```