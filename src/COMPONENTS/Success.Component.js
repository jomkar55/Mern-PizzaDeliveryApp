import React from "react";

const SuccessComponent = ({ success }) => {
    return (
        <div>

            <div className="alert alert-success" role="alert">
                {success}
            </div>

        </div>
    )

}

export default SuccessComponent;