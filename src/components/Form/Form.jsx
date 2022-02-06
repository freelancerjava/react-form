import React, { useState } from 'react';
import Checkbox from './Checkbox';
import logo from '../../assets/images/logo.svg'
import {
    Container, Content, Logo, TitleWrap, Title, InputWrap, Input, InboxIcon, PasswordIcon,
    ShowPassword, CheckboxWrap, CheckboxText, PasswordInput, SubmitButton, ForgotPassword, Label, UserIcon
} from './Form.style'
const Form = () => {
    const [text, setText] = useState('');
    const [keys, setKeys] = useState('login');
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const onActive = event => {
        setKeys(event)
    }
    const contentList = {
        login: <>
            <InputWrap>
                <Label>
                    <InboxIcon />
                    <Input autoComplete='off' type="email" placeholder="agro@gmail.com" />
                </Label>
                <Label>
                    <PasswordIcon />
                    <PasswordInput value={text} onChange={(e) => setText(e.target.value)} autoComplete='off' type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
                    <ShowPassword onClick={() => setShowPassword(!showPassword)}>{text.length ? "Показать" : ''}</ShowPassword>
                </Label>
            </InputWrap>
            <CheckboxWrap>
                <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <CheckboxText>Запомнить меня</CheckboxText>
            </CheckboxWrap>
            <SubmitButton>Войти</SubmitButton>
            <ForgotPassword>Забыли пароль?</ForgotPassword>
        </>,
        register: <>
            <InputWrap>
                <Label>
                    <UserIcon />
                    <Input autoComplete='off' type="text" placeholder="@johndoe" />
                </Label>
                <Label>
                    <InboxIcon />
                    <Input autoComplete='off' type="email" placeholder="agro@gmail.com" />
                </Label>
                <Label>
                    <PasswordIcon />
                    <PasswordInput value={text} onChange={(e) => setText(e.target.value)} autoComplete='off' type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
                    <ShowPassword onClick={() => setShowPassword(!showPassword)}>{text.length ? "Показать" : ''}</ShowPassword>
                </Label>
            </InputWrap>
            <CheckboxWrap>
                <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <CheckboxText>Запомнить меня</CheckboxText>
            </CheckboxWrap>
            <SubmitButton>Регистрация</SubmitButton>
            <ForgotPassword onClick={() => setKeys('login')}>У вас есть аккаунт?</ForgotPassword>
        </>
    }
    return (
        <Container>
            <Logo src={logo} />
            <Content>
                <TitleWrap>
                    <Title onClick={() => onActive('login')} active={keys === 'login'}>Вход</Title>
                    <Title onClick={() => onActive('register')} active={keys === 'register'}>Регистрация</Title>
                </TitleWrap>
                {contentList[keys]}
            </Content>
        </Container>);
};

export default Form;
