import { DegreeButton, SunlightIcon } from './style'
export default ({ title, ...props }) => (
    <DegreeButton {...props}>
        <SunlightIcon />
        {title}
    </DegreeButton>
)