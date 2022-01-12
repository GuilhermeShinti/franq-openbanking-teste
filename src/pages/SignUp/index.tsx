import React from "react";
import { FormEvent } from "react";
import { Content, Wrapper } from "./styles";
import { toast } from 'react-toastify';
import { Register } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.debug(email, password);

        try {
            Register({email, password});
            navigate(`/login`);
            toast.success("Cadastro realizado com sucesso.");
        } catch (e: any) {
            toast.error(e.message);
        }
    }

    return  (
        <Wrapper>
            <Content>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required></input>
                    <button>Cadastrar</button>
                </form>
            </Content>
        </Wrapper>
    )

}