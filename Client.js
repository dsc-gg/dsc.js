const fetch = require("node-fetch");

class Client {
    constructor(key) {
        if (typeof key != "string") {
            throw new TypeError('argument "key" should be a string');
        }
        async function check() {
            var response = await fetch("https://api.dsc.gg/v2/app", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: key,
                },
            });
            var responseData = await response.json();
            if (!responseData.success) throw new TypeError('argument "key" is not a valid API key');
        }
        check()
        this.base_url = "https://api.dsc.gg";
        this.api_key = key;
    }

    async fetchLink(link_id) {
        if (typeof link_id != "string") throw new TypeError('argument "link" should be a string');
        var response = await fetch("https://api.dsc.gg/v2/link/" + link_id, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async deleteLink(link_id) {
        if (typeof link_id != "string") throw new TypeError('argument "link" should be a string');
        var response = await fetch("https://api.dsc.gg/v2/link/" + link_id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async createLink(request) {
        if (typeof request.link != "string") throw new TypeError('argument "link" should be a string');
        if (typeof request.type != "string") throw new TypeError('argument "type" should be a string');
        if (typeof request.redirect != "string") throw new TypeError('argument "redirect" should be a string');
        var body = request;
        var response = await fetch("https://api.dsc.gg/v2/link/" + request.link, {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async updateLink(request) {
        console.log(request);
        if (typeof request.link != "string") throw new TypeError('argument "link" should be a string');
        if (typeof request.type != "string") throw new TypeError('argument "type" should be a string');
        if (typeof request.redirect != "string") throw new TypeError('argument "redirect" should be a string');
        var body = request;
        var response = await fetch("https://api.dsc.gg/v2/link/" + request.link, {
            method: "patch",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async fetchUser(user_id) {
        if (typeof user_id != "string") throw new TypeError('argument "link" should be a string');
        var response = await fetch("https://api.dsc.gg/v2/user/" + user_id, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async fetchUserLinks(user_id) {
        if (typeof user_id != "string") throw new TypeError('argument "link" should be a string');
        var response = await fetch("https://api.dsc.gg/v2/user/" + user_id + '/links', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async fetchUserApps(user_id) {
        if (typeof user_id != "string") throw new TypeError('argument "link" should be a string');
        var response = await fetch("https://api.dsc.gg/v2/user/" + user_id + '/apps', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async fetchApp(app_id) {
        if (typeof app_id != "string") throw new TypeError('argument "app" should be a string');
        var response = await fetch("https://api.dsc.gg/v2/app/" + app_id, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async fetchTopLinks() {
        var response = await fetch("https://api.dsc.gg/v2/top", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.api_key,
            },
        });
        var responseData = await response.json();
            return responseData;
    }

    async search(link_id, json) {
        if (typeof link_id != "string") throw new TypeError('argument "link" should be a string');
        if (json) {
            if (json && json.limit && typeof json.limit != "number") throw new TypeError('argument "limit" should be a number');
            if (json && json.type && typeof json.type != "string") throw new TypeError('argument "type" should be a string');
            if (json && json.type !== 'bot' && json.type !== 'server' && json.type !== 'template') throw new TypeError('argument "type" should be equal to bot, server, or template');
        if (json.limit && json.type) {
            var response = await fetch("https://api.dsc.gg/v2/search?q=" + link_id + "&limit=" + Number(json.limit) + "&type=" + json.type, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.json();
            return responseData;
        } else
        if (json.limit) {
            var response = await fetch("https://api.dsc.gg/v2/search?q=" + link_id + "&limit=" + Number(json.limit), {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.json();
            return responseData;
        } else 
        if (json.type) {
            var response = await fetch("https://api.dsc.gg/v2/search?q=" + link_id + "&type=" + json.type, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.json();
            return responseData;
        } else {
            var response = await fetch("https://api.dsc.gg/v2/search?q=" + link_id + "&limit=" + Number(json.limit), {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.json();
            return responseData;
        }
    } else {
        var response = await fetch("https://api.dsc.gg/v2/search?q=" + link_id, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.json();
            return responseData;
    }
    }
}

module.exports.Client = Client;