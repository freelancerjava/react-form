import { Input, Label, UserIcon } from './style'
export default ({ ...props }) => (
    <Label>
        <UserIcon />
        <Input type="text" autoComplete="off" placeholder="@johndoe" {...props} />
    </Label>
)