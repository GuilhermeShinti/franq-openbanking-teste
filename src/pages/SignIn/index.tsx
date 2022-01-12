import React from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../services/auth";
import { Content, Wrapper } from "./styles";

export function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.debug(email, password);
        
        try {
            Login({email, password});
            navigate(`/`);
        } catch (e: any) {
            toast.error(e.message);
        }
    }

    const onClickNewAccount = () => {
        navigate(`/cadastro`);
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
                    <button type="submit" className="login-button">Login</button>
                    <button onClick={onClickNewAccount} className="register-button">Novo Cadastro</button>
                </form>
            </Content>
        </Wrapper>
    )

}