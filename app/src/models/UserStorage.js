"use strict";

class UserStorage {
    static #users = {
        id : ["osejin", "sejin", "root"],
        pwd : ["tere", "1234", "root"],
        name : ["오세진", "진세오", "어드민"]
    };

    static getUsers(...fileds) {
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKey = Object.keys(users);
        const userInfo = usersKey.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;