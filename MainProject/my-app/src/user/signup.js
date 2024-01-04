import { Button } from "antd";
import React from "react";


const signup = () =>{
    return(
        <form>
            <input name="userName" type="text" placeholder="이름을 입력하세요."></input>
            <input name="userPassword" type="password" placeholder="비밀번호를 입력하세요."></input>
            <input name="userEmail" type="email" placeholder="이메일을 입력하세요."></input>
            <Button type="submit">회원가입</Button>
        </form>
    );
}

export default signup;