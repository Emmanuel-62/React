import React from "react";
import PropTypes from "prop-types";

/**
 * @param {{ name: string, age: number, email: string }} users
 * @returns {JSX.Element}
 */

function UserRow ({user}) {
    const style = user.active ? undefined : {color : 'red'}

    return (
        <tr>
            <td style={style}>{user.name}</td>
            <td style={style}>{user.age}</td>
            <td style={style}>{user.email}</td>
        </tr>
    );
}

UserRow.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        active: PropTypes.bool
    }).isRequired
}
export default UserRow