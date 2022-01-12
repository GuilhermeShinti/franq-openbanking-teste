export function IsAuthenticated(): boolean {
    let minutes = 5;
    let saved = Number(localStorage.getItem("logged_time"));
    if (saved && (new Date().getTime() - saved > minutes * 60 * 1000)) {
        localStorage.setItem("logged_time", "");
    }

    return saved !== 0;
}

export function Login({email, password}: {email:string, password: string}) {
    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
        localStorage.setItem('logged_time', new Date().getTime().toString());
        return;
    }     

    throw new Error("Email ou senha inválido.");
}

export function Register({email, password}: {email:string, password: string}) {
    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
        throw new Error("Usuário já cadastrado.");
    }        

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('logged_time', new Date().getTime().toString());
}