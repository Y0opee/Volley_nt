import './App.css';
import './html_elements/button/button.jsx'
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
//const {user,onclose} = useTelegram();

function App() {

    const {onToggleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
      it is working well
        <button onClick = {onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
