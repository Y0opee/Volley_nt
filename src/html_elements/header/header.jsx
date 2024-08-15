import React from 'react';

const Header = () => {
    const tg = window.telegram.WebApp;
    const onClose = () => {
        tg.close()
    }
    return (
        <div className="header">
            <button onClick={onClose}> Close </button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;