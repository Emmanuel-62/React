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
            name="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}

export default Input