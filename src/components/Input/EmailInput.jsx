import { Input, Label, InboxIcon } from './style'
export default ({ ...props }) => (
    <Label>
        <InboxIcon />
        <Input type="email" autoComplete="off" placeholder="agro@gmail.com" {...props} />
    </Label>
)