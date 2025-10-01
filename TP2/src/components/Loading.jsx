import React from "react";
import {Atom} from "react-loading-indicators";

function Loading () {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Atom
                color="#1ddf1d"
                size="large"
                text="Chargement..."
                textColor="#0c0909"
            />
        </div>);
}

export default Loading