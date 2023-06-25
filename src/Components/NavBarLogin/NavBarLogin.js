import './NavBarLogin.css'

function NavBarLogin() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark navbar1">
                <div class="container-fluid">
                    <a href='' class="navbar-brand d">EASY HEALTH CARE | ADMIN PANEL LOGIN</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn  btn-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBarLogin;