import React from 'react';
import button from '../button/button'
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className="header">
            <button onClick={onClose}> Close </button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;