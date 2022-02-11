import { Select, Option, Wrap, SortIcon } from './style'
export default ({ ...props }) => {
    return (
        <Wrap>
            <Select width="230px" height="32px" {...props}>
                <option value="" hidden>Type</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
            </Select>
            <SortIcon />
        </Wrap>
    )
}