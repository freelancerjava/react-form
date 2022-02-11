import { ListContentHeader, ListTitle, EditIcon, SearchIcon } from './style'
import Select from '../Select/Select';
export default ({ title, ...props }) => {
    return (
        <>
            <ListContentHeader {...props}>
                <EditIcon />
                <ListTitle>{title}</ListTitle>
                <SearchIcon />
            </ListContentHeader>
            <Select />
        </>
    )
}