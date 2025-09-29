import React from "react";
import PropTypes from "prop-types";

/**
 * @param { string } name
 * @returns {JSX.Element}
 */
function UserRoleRow ({name}) {
    return (
        <tr>
            <td colSpan={2}><strong>{name}</strong></td>
        </tr>
    );
}

UserRoleRow.propTypes = {
    name: PropTypes.string.isRequired
}

export default UserRoleRow