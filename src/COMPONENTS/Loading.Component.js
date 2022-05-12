import React from "react";

const LoadingComponent = () => {

    return (

        <div>

            <div className="spinner-border text-primary" role="status" style={{ width: "100px", height: "100px" }}>
                <span className="sr-only">Loading...</span>
            </div>

        </div>
    )

}

export default LoadingComponent;