const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
    }
    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
            tg.close();
    }
    return{
        onClose,
        onToggleButton,
        tg,
        use: tg.initDataUnsafe?.user,
    }
}