import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import logo from '../../assets/images/logo.svg';
import SubmitButton from '../Button/Submit';
import {
    Container, Content, Logo, TitleWrap, Title, InputWrap, Input, InboxIcon, PasswordIcon,
    ShowPassword, CheckboxWrap, CheckboxText, PasswordInput, ForgotPassword, Label, UserIcon
} from './Form.style'
const Form = () => {
    const LOGIN = 'login';
    const REGISTER = 'register';
    const [text, setText] = useState('');
    const [keys, setKeys] = useState(LOGIN);
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const onActive = key => setKeys(key);
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
            <SubmitButton title="Войти" />
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
            <SubmitButton title="Регистрация" />
            <ForgotPassword onClick={() => setKeys(LOGIN)}>У вас есть аккаунт?</ForgotPassword>
        </>
    }
    return (
        <Container>
            <Logo src={logo} />
            <Content>
                <TitleWrap>
                    <Title onClick={() => onActive(LOGIN)} active={keys === LOGIN}>Вход</Title>
                    <Title onClick={() => onActive(REGISTER)} active={keys === REGISTER}>Регистрация</Title>
                </TitleWrap>
                {contentList[keys]}
            </Content>
        </Container>);
};

export default Form;
