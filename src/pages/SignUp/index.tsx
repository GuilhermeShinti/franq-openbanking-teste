
import { useSignUpController } from "./SignUpController";
import { Content, Wrapper } from "./styles";


export function SignUp() {
    const signController = useSignUpController();
    const email = signController.email;
    const password = signController.password;

    return  (
        <Wrapper>
            <Content>
                <h2>SignUp</h2>
                <form onSubmit={signController.handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => signController.setEmail(e.target.value)} required></input>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" value={password}  onChange={(e) => signController.setPassword(e.target.value)} required></input>
                    <button>Cadastrar</button>
                </form>
            </Content>
        </Wrapper>
    )

}