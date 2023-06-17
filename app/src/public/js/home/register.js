"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pwd = document.querySelector("#pwd"),
    confirmPwd = document.querySelector("#confirm-pwd"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해 주세요!")
    if (pwd.value !== confirmPwd.value) {
        return alert("비밀번호가 일치 하지 않습니다.")
    }
    const req = {
        id: id.value,
        name: name.value,
        pwd: pwd.value,
    };

    fetch("/register", {
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
                location.href = "/login";
            } else {
                alert(res.msg); // 로그인 실패
            }
        })
        .catch((err) => {
            // 오류처리
            console.error("회원가입중 에러 발생");
        });
}
