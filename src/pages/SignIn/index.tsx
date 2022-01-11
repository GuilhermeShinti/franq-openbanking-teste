import React from "react";
import { FormEvent } from "react";
import { Content, Wrapper } from "./styles";

export function SignUp() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.debug(email, password);
        
    }

    return  (
        <Wrapper>
            <Content>
                <h2>SignIn</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required></input>
                    <button>Login</button>
                </form>
            </Content>
        </Wrapper>
    )

}