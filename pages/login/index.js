import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import A from "../../components/A";
import MainLayout from "../../components/MainLayout";
import Button from "../../components/MiniComponents/Button";
import ErrorMessage from "../../components/MiniComponents/ErrorMessage";
import Input from "../../components/MiniComponents/Input";
import { loginAction } from "../../redux/Login/actions";
import cls from '../../styles/Login.module.scss';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const { login } = useSelector(s => s.Login);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(loginAction({
            email,
            password
        }, router))
    }

    return (
        <MainLayout>
            <div className={cls.root}>
                <span className={cls.goBack} onClick={() => router.back()}>GO BACK</span>
                <div className={cls.authContainer}>
                    <div className={cls.login}> 
                        <h1 className={cls.authTitle}>LOG IN</h1>
                        <div className={cls.inputGroup}>
                            <Input 
                                label='E-MAIL'
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                errorText={
                                    login.error && <ErrorMessage errors={login.error} field='email' />
                                }
                            />
                            <Input 
                                label='PASSWORD'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                errorText={
                                    login.error && <ErrorMessage errors={login.error} field='password' />
                                }
                            />
                            <A 
                                text='HAVE YOU FORGOTTEN YOUR PASSWORD?'  
                                href='/login/forgot'
                                className={cls.forgotPass}
                            />
                            <Button disabled={login.loading} onClick={handleSubmit} className={cls.logInBtn}>LOG IN</Button>
                        </div>
                    </div>
                    <div className={cls.register}>
                        <h1 className={cls.authTitle}>REGISTER</h1>
                        <p>IF YOU STILL DON&apos;T HAVE A <span>EXAMPLE.COM</span> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</p>
                        <p>BY GIVING US YOUR DETAILS, PURCHASING IN <span>EXAMPLE.COM</span> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</p>
                        <Button onClick={() => router.push('/login/register')} className={cls.logUpBtn}>CREATE ACCOUNT</Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Login;