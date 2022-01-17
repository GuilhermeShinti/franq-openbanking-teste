import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../services/auth";

export const useSignInController = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

    return {
        email,
        setEmail,
        password, 
        setPassword,
        onClickNewAccount,
        handleSubmit
    }
}