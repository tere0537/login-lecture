"use strict";

const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pwd : pwd.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) { // 로그인 성공시 /로 이동
                location.href = "/";   
            } else {
                alert(res.msg); // 로그인 실패
            }
        })
        .catch((err) => { // 오류처리
            console.err("로그인중 애러 발생");
        });
};