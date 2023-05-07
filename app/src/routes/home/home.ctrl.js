"use strict"

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pwd[idx] === pwd) {
                return res.json({
                    success : true,
                }) 
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패 하였습니다.",
        })
    },
};

const users = {
    id : ["osejin", "sejin", "root"],
    pwd : ["tere", "tere", "root"],
};


module.exports ={
    output,
    process,
}