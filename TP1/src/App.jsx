import Input from "./components/forms/Input.jsx";
import Checkbox from "./components/forms/Checkbox.jsx";
import UserRow from "./components/users/UserRow.jsx";
import UserRoleRow from "./components/users/UserRoleRow.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import USERS from "./data/users.js";

function App () {

    const [showRoleOnly, setShowRoleOnly] = useState(false)
    const [search, setSearch] = useState('')

    const visibleUsers = USERS.filter((user) => {
        if(showRoleOnly && !user.active) {
            return false
        }

        if(search && !user.name.includes(search)){
            return false
        }
        return true
    })

    return (<div className="container">
        <h1>TP1 with React</h1>
        <SearchBar
            showRoleOnly={showRoleOnly}
            onRoleOnlyChange={setShowRoleOnly}
            search={search}
            onSearchChange={setSearch}
        />
        <UserTable users={visibleUsers}/>
    </div>);
}

function SearchBar ({showRoleOnly, onRoleOnlyChange, search, onSearchChange}) {
    return (
        <div>
            <div>
                <Input
                    id="search"
                    placeholder="Rechercher..."
                    onChange={onSearchChange}
                    value={search}
                />
                <Checkbox
                    id="checked"
                    label="N'affiche que les personnes disponible"
                    onChanges={onRoleOnlyChange}
                    checked={showRoleOnly}/>
            </div>
        </div>
    );
}

function UserTable ({users}) {

    const rows = []
    let lastRole = null

    const sortedUsers = [...users].sort((a, b) => a.role.localeCompare(b.role))

    for(let user of sortedUsers) {
        if(user.role !== lastRole) {
            rows.push(<UserRoleRow key={user.role} name={user.role}/>)
        }
        lastRole = user.role
        rows.push(<UserRow user={user} key={user.name}/>)

    }

    return (
        <table className="table">
            <caption>La listes des personnes du Magasins</caption>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

UserTable.propTypes = {
    users: PropTypes.shape({
        role: PropTypes.array.isRequired
    })
}

SearchBar.propTypes = {
    showRoleOnly: PropTypes.bool.isRequired,
    onRoleOnlyChange: PropTypes.func
}

export default App