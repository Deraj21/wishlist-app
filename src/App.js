import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>App</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/login">Login</Link> | {" "}
                <Link to="/List">List</Link>
            </nav>
            <Outlet/>
        </div>
    );
}

export default App;
