import React from "react";
import PropTypes from "prop-types";

/**
 * @param { number } min
 * @param { number } max
 * @param { (e : string ) => void }onChange
 * @param { number } value
 * @returns {JSX.Element}
 */

function InputRange ({min, max, onChange, value}) {
    return (
        <input
            type="range"
            name="age"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-range"
            min={min}
            max={max}
        />
    );
}

InputRange.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default InputRange