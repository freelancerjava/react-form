import { useState } from 'react'
import { PasswordInput, ShowPassword, Label, PasswordIcon } from './style'
const PassInputs = ({ ...props }) => {
    const [text, setText] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Label>
            <PasswordIcon />
            <PasswordInput type={showPassword ? 'text' : 'password'}
                value={text} onChange={(e) => setText(e.target.value)} autoComplete="off" placeholder="••••••••" {...props} />
            <ShowPassword onClick={() => setShowPassword(!showPassword)}>{text.length ? "Показать" : ''}</ShowPassword>
        </Label>
    )
}
export default PassInputs