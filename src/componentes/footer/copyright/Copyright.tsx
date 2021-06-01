import React from "react";
import "./Copyrigth.css";

function Copyrigth() {
    function CopyrigthDOM() {
        return(
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Marco Tulio Indoval 2021</small></div>
            </div>
        );
    }

    return(
        <>
            { CopyrigthDOM() }
        </>
    );
}

export default Copyrigth;