import Input from '../Input/Input';
import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import SubmitButton from '../Button/Submit';
import EmailInput from '../Input/EmailInput';
import logo from '../../assets/images/logo.svg';
import PasswordInput from '../Input/PasswordInput';
import { CheckboxWrap, CheckboxText, } from '../Checkbox/Checkbox.style';
import { ForgotPassword, Container, Content, Logo, TitleWrap, Title, InputWrap } from './Form.style'
const Form = () => {
    const LOGIN = 'login';
    const REGISTER = 'register';
    const [keys, setKeys] = useState(LOGIN);
    const [checked, setChecked] = useState(false);
    const onActive = key => setKeys(key);
    const contentList = {
        login: <>
            <InputWrap>
                <EmailInput />
                <PasswordInput />
            </InputWrap>
            <CheckboxWrap>
                <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <CheckboxText>Запомнить меня</CheckboxText>
            </CheckboxWrap>
            <SubmitButton height="42px" title="Войти" />
            <ForgotPassword>Забыли пароль?</ForgotPassword>
        </>,
        register: <>
            <InputWrap>
                <Input />
                <EmailInput />
                <PasswordInput />
            </InputWrap>
            <CheckboxWrap>
                <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <CheckboxText>Запомнить меня</CheckboxText>
            </CheckboxWrap>
            <SubmitButton height="42px" title="Регистрация" />
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
