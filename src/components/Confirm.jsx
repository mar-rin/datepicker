import React from "react";

function Confirm({ handleConfirm }) {
    return (
        <div className="confirm-bar">
            <button className="submit" name="ok" onClick={handleConfirm}>
                OK
            </button>
            <button className="submit cancelled" name="cancel" onClick={handleConfirm}>
                Cancel
            </button>
        </div>
    )
};

export default Confirm