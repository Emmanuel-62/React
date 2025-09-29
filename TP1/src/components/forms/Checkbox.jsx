import React from "react";
import PropTypes from "prop-types";


/**
 * @param { string } id
 * @param { (e : string) => void } onChanges
 * @param { boolean } checked
 * @param { string } label
 * @returns {JSX.Element}
 */
function Checkbox ({id, onChanges, checked, label}) {
    return <div className= "form-check">
        <input
            id={id}
            checked={checked}
            type="checkbox"
            className= "form-check-input mb-3 "
            onChange={(e) => onChanges(e.target.checked)}
        />
        <label className="mb-3 form-check-label" htmlFor={id}>{label}</label>
    </div>
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    onChanges: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string
}
export default Checkbox