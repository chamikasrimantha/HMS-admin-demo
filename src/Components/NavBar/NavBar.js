import './NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar(){

    const navigate = useNavigate();

    const users = () => {
        navigate("/users")
    }

    const main = () => {
        navigate("/main")
    }


    const appointment = () => {
        navigate("/appointments")
    }

    const billing = () => {
        navigate("/billing")
    }

    return(
        <div>
            <nav class="navbar navbar-dark bg-dark navbar1">
                <div class="container-fluid">
                    <a class="navbar-brand d">EASY Health Care | Admin Dashboard</a>
                    <form class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button class="btn  btn-light ffx1" type="submit" onClick={main}>Add Channelling</button>
                        <button class="btn  btn-light ffx1" type="submit" onClick={billing}>Add Billing</button>
                        <button class="btn  btn-light ffx1" type="submit" onClick={appointment}>All Appointments</button>
                        <button class="btn  btn-light ffx1" type="submit" onClick={users}>All Users</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;