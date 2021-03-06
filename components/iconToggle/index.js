import '@material/icon-toggle/dist/mdc.icon-toggle.css';
import classNames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import { Set as ImmutableSet } from 'immutable';
import MDCIconToggle from './component';

// TODO: animation sticks after click, like most animation.
// TODO: User experience. Do I ask for both toggle on/off, do I attempt to find ones with borders?
// TODO: css classes: mdc-icon-toggle--primary and mdc-icon-toggle--accent
class IconToggle extends PureComponent {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
    };
    static defaultProps ={
        disabled: false,
        icon: 'favorite_border',
    }
    constructor(props) {
        super(props);
        const { icon, disabled } = props;
        this.state = {
            classes: new ImmutableSet(),
            'data-toggle-on': '{"label": "Remove from favorites", "content": "favorite"}',
            'data-toggle-off': `{"label": "Add to favorites", "content": "${icon}"}`,
            icon,
            disabled,
        };
    }
    componentWillMount() {
        this.foundation = new MDCIconToggle(this);
        this.foundation.init();
        const { disabled } = this.state;

        if (disabled) {
            this.foundation.setDisabled(disabled);
        }
    }
    render() {
        const { classes, click, keyup, keydown, icon, disabled } = this.state;
        return (
            <i
                className={classNames('mdc-icon-toggle', 'material-icons', classes.toJS().join(' '))}
                role="button"
                onClick={click}
                onKeyUp={keyup}
                onKeyDown={keydown}
                tabIndex="0"
                aria-label={this.state['aria-label']}
                aria-pressed={this.state['aria-pressed']}
                aria-disabled={disabled}
            >
                {icon}
            </i>
        );
    }
}
export default IconToggle;
