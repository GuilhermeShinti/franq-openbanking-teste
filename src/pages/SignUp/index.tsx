import React from "react";
import { FormEvent } from "react";
import { Content, Wrapper } from "./styles";
import { toast } from 'react-toastify';

export function SignUp() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.debug(email, password);

        if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            toast.error("Usuário já cadastrado.");
            return;

        }        

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('logged_time', new Date().getTime().toString());
        toast.success("Cadastro realizado com sucesso.");
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