import logo from './images/cargo-ship.png'
import bag from './images/bag.png'

function Navbar() {
    return (
        <div className="menu-container">
            <nav className="menu">
                <a href="" className="logo"><img src={logo} alt="Logo" width="100px"/>ZIP<br />SHIPPING</a>
                <div>
                    <a href="#"><img src={bag} alt="Sacola" width="50px"></img></a>
                </div>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar

/*
const root = ReactDOM.createRoot(document.getElementById('navbar'));
root.render(<Garage />);
*/