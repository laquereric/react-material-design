import '@material/button/dist/mdc.button.css';
import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { buttoncssClasses } from '../classes';

const cx = classNames.bind(buttoncssClasses);

// TODO: button can have multiple types e.g., primary raised
// TODO: typecheck props (label, type, disabled).

const Button = ({ label, type, ...rest }) =>
    <button
        className={cx('mdc-button', buttoncssClasses[type])}
        {...rest}
    >
        {label}
    </button>;
Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
};
export default Button;
