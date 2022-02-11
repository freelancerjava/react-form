import { Select, Wrap, SortIcon } from './style'
export default ({ ...props }) => {
    return (
        <Wrap>
            <Select width="230px" height="32px" {...props}>
                <option value="" hidden>Type</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </Select>
            <SortIcon />
        </Wrap>
    )
}