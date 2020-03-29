import React from "react";

function InfoHolder(props) {
    return (
        <div className="row">{props.children}</div>
    );
}

export default InfoHolder;