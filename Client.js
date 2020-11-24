const fetch = require("node-fetch");

class Client {
    constructor(fields) {
        if (typeof fields.version != "number") {
            throw new TypeError('argument "version" should be a number');
        }
        if (fields.version != 2) {
            throw new TypeError('argument "version" should be a valid dsc.gg API version');
        }
        if (typeof fields.api_key != "string") {
            throw new TypeError('argument "key" should be a string');
        }
        this.base_url = "https://api.dsc.gg";
        this.api_key = fields.api_key;
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
        if (responseData.message) {
            if (responseData.message.includes("api key invalid")) throw new Error("Failed to fetch link: an invalid API key was specified");
            throw new Error("Failed to fetch link: " + responseData.message);
        } else {
            return responseData;
        }
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
        if (responseData.message) {
            if (responseData.message.includes("api key invalid")) throw new Error("Failed to fetch link: an invalid API key was specified");
            throw new Error("Failed to fetch link: " + responseData.message);
        } else {
            return responseData;
        }
    }

    async createLink(request) {
        console.log(request);
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
        if (!responseData.message.includes("link created")) {
            if (responseData.message.includes("api key invalid")) throw new Error("Failed to create link: an invalid API key was specified");
            throw new Error("Failed to create link: " + responseData.message);
        } else {
            return responseData;
        }
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
        if (!responseData.message.includes("link updated")) {
            if (responseData.message.includes("api key invalid")) throw new Error("Failed to update link: an invalid API key was specified");
            throw new Error("Failed to update link: " + responseData.message);
        } else {
            return responseData;
        }
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
        if (responseData.message) {
            if (responseData.message.includes("api key invalid")) throw new Error("Failed to fetch user: an invalid API key was specified");
            throw new Error("Failed to fetch user: " + responseData.message);
        } else {
            return responseData;
        }
    }

    async search(link_id, limit) {
        if (limit && typeof limit != "number") throw new TypeError('argument "limit" should be a number');
        if (typeof link_id != "string") throw new TypeError('argument "link" should be a string');
        if (limit) {
            var response = await fetch("https://api.dsc.gg/v2/search/" + link_id + "?limit=" + Number(limit), {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.text();
            console.log(responseData);
            if (responseData.message) {
                if (responseData.message.includes("api key invalid")) throw new Error("Failed to search for link: an invalid API key was specified");
                throw new Error("Failed to search for link: " + responseData.message);
            } else {
                return responseData;
            }
        } else {
            var response = await fetch("https://api.dsc.gg/v2/search/" + link_id, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.api_key,
                },
            });
            var responseData = await response.text();
            console.log(responseData);
            try {
                var responseData = JSON.parse(JSON.stringify(responseData));
                if (responseData.message) {
                    if (responseData.message.includes("api key invalid")) throw new Error("Failed to search for link: an invalid API key was specified");
                    throw new Error("Failed to search for link: " + responseData.message);
                } else {
                    return responseData;
                }
            } catch (e) {
                throw new Error("Could not parse data: " + e);
            }
        }
    }
}

module.exports.Client = Client;