import "./App.css";
import "./root.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Main />
        </div>
    );
}

export default App;