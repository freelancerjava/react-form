import { DateButton, DateIcon } from './style'
export default ({ date, ...props }) => (
    <DateButton {...props}>{date}<DateIcon /></DateButton>
)