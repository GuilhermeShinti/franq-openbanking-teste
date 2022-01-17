import { useSignInController } from "./SignInController";
import { Content, Wrapper } from "./styles";

export function SignIn() {
    const signInController = useSignInController();
    const email = signInController.email;
    const password = signInController.password;

    return  (
        <Wrapper>
            <Content>
                <h2>SignIn</h2>
                <form onSubmit={signInController.handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => signInController.setEmail(e.target.value)} required></input>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" value={password}  onChange={(e) => signInController.setPassword(e.target.value)} required></input>
                    <button type="submit" className="login-button">Login</button>
                    <button onClick={signInController.onClickNewAccount} className="register-button">Novo Cadastro</button>
                </form>
            </Content>
        </Wrapper>
    )

}