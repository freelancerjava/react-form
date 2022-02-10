import CheckBoxStyle from './Checkbox.style';

export default ({ value, htmlFor, disabled = false, ...props }) => {
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
