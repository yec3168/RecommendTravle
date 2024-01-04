import React from "react";

export const login = () =>{
    return(
        <form>
            <input name="userName" type="text" placeholder="이름을 입력하세요."></input>
            <input name="userPassword" type="password" placeholder="비밀번호를 입력하세요."></input>
            <button type="submit">제출</button>
        </form>
    )
}

export default login;