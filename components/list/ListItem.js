import React, { PropTypes } from 'react';
import '@material/list/dist/mdc.list.css';

// TODO: alt from avatarUrl
// TODO: When the list has an avatar but no leftAvatarUrl is provided, make sure that the text aligns with other li that do have an avatar.
// TODO: test with react-router
const ListItem = ({ value, icon, leftAvatarUrl, rightIcon, rightTitle }) =>
    <li className="mdc-list-item">
        {icon && <i className="mdc-list-item__start-detail material-icons" aria-hidden>{icon}</i>}
        {leftAvatarUrl && <img className="mdc-list-item__start-detail" src={leftAvatarUrl} width="56" height="56" role="presentation" />}
        {value}
        {rightIcon && <a className="mdc-list-item__end-detail material-icons" aria-label={rightTitle} title={rightTitle}>
            {rightIcon}
        </a>}

    </li>;

ListItem.propTypes = {
    icon: PropTypes.string,
    leftAvatarUrl: PropTypes.string,
    rightIcon: PropTypes.string,
    rightTitle: PropTypes.string,
    value: PropTypes.string.isRequired,
};
export default ListItem;
