/**
 * @param {string} placeholder
 * @param {string} value
 * @param {string} id
 * @param { (e : string) => void } onChange
 * @returns {JSX.Element}
 */
function Input ({placeholder, value, id, onChange}) {
    return <div>
        <input
            id={id}
            type="text"
            name="search"
            value={value}
            className="input-group mb-3 form-control"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}

export default Input