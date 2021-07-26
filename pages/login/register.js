import MainLayout from "../../components/MainLayout"
import { useRouter } from "next/dist/client/router";
import cls from '../../styles/Register.module.scss';
import Input from "../../components/MiniComponents/Input";
import Button from "../../components/MiniComponents/Button";
import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/MiniComponents/ErrorMessage";
import { registerAction } from "../../redux/Login/actions";
import { useState } from "react";

const Register = () => {
    const router = useRouter();
    const { register } = useSelector(s => s.Login);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        dispatch(registerAction({
            email,
            password,
            password_repeat: passwordRepeat,
            first_name: name,
            last_name: lastName,
            phone_number: phone
        }, router))
    }

    return (
        <MainLayout>
            <div className={cls.root}>
                <span className={cls.goBack} onClick={() => router.back()}>GO BACK</span>
                <h1 className={cls.personalTitle}>PERSONAL DETAILS</h1>
                <div className={cls.registerContainer}>
                    <div className={cls.col}>
                        <div className={cls.inputGroup}>
                            <Input 
                                label='E-MAIL'
                                type='email'
                                errorText={
                                    register.error && <ErrorMessage errors={register.error} field='email' />
                                }
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <Input 
                                label='PASSWORD'
                                type='password'
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                errorText={
                                    register.error && <ErrorMessage errors={register.error} field='password' />
                                }
                            />
                            <Input 
                                label='NAME'
                                type='text'
                                onChange={e => setName(e.target.value)}
                                value={name}
                                errorText={
                                    register.error && <ErrorMessage errors={register.error} field='first_name' />
                                }
                            />
                            <Input 
                                label='PHONE'
                                type='text'
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                                errorText={
                                    register.error && <ErrorMessage errors={register.error} field='phone_number' />
                                }
                            />
                        </div>
                    </div>
                    <div className={cls.col}>
                        <div className={cls.inputGroup}>
                            <Input 
                                label='REPEAT PASSWORD'
                                type='password'
                                onChange={e => setPasswordRepeat(e.target.value)}
                                value={passwordRepeat}
                                errorText={
                                    register.error && <ErrorMessage errors={register.error} field='password_repeat' />
                                }
                            />
                            <Input 
                                label='LAST NAME'
                                type='text'
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                errorText={
                                    register.error && <ErrorMessage errors={register.error} field='last_name' />
                                }
                            />
                        </div>
                    </div>
                    <div className={cn(cls.col, cls.createBtn)}>
                        <Button disabled={register.loading} onClick={handleSubmit}>CREATE ACCOUNT</Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Register