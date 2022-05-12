import React from "react";

const ErrorComponent = ({ error }) => {


    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    )
}

export default ErrorComponent;