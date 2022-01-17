import { useState, FormEvent } from "react";
import { toast } from 'react-toastify';
import { Register } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const useSignUpController = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

    return {
        navigate,
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit
    }
}