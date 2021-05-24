import React from "react";

function Navbar() {
    function NavbarDOM() {
        return(
            <nav className="nav">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
            </nav>
        );
    }

    return(
        <>
            { NavbarDOM() }
        </>
    );
}

export default Navbar;