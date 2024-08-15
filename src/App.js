import './App.css';
import './html_elements/button/button.jsx'
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./html_elements/header/header";
//const {user,onclose} = useTelegram();

function App() {

    const {onToggleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header />
        <button onClick = {onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
