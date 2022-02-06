import CheckBoxStyle from './Checkbox.style';

const CheckBox = ({ value, htmlFor, disabled = false, ...props }) => {

    return (
        <CheckBoxStyle  {...props}>
            <label htmlFor={htmlFor}>
                <input
                    value={value}
                    type="checkbox"
                    className="checkbox"
                    disabled={disabled}
                    {...props}
                />
                <div />
            </label>
        </CheckBoxStyle>
    );
};
export default CheckBox;
