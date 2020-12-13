const Link = require("dsc.js");
 
const client = new Link.Client("Your API token") //Don't have a token? Get one at https://dsc.gg/developers/dashboard

async function example() {
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
}

example()