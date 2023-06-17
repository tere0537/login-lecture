"use strict";

const loginForm = document.querySelector(".login-form");
const id = loginForm.querySelector("#id");
const pwd = loginForm.querySelector("#pwd");
const loginBtn = loginForm.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(event) {
    event.preventDefault(); // 폼의 기본 동작인 페이지 새로고침을 막음

    const req = {
        id: id.value,
        pwd: pwd.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                // 로그인 성공시 /로 이동
                location.href = "/";
            } else {
                alert(res.msg); // 로그인 실패
            }
        })
        .catch((err) => {
            // 오류처리
            console.error("로그인 중 에러 발생");
        });
}
