import React, {use} from "react";
import Input from "./components/forms/Input.jsx";
import Checkbox from "./components/forms/Checkbox.jsx";
import UserRow from "./components/users/UserRow.jsx";
import UserRoleRow from "./components/users/UserRoleRow.jsx";

const USERS = [
    { role: "Admin", name: "Alice", age: 30, active: true, email: "alice@example.com" },
    { role: "Admin", name: "Bob", age: 45, active: false, email: "bob@example.com" },
    { role: "Admin", name: "Tina", age: 39, active: true, email: "tina@example.com" },
    { role: "User", name: "Charlie", age: 22, active: true, email: "charlie@example.com" },
    { role: "User", name: "Diana", age: 28, active: false, email: "diana@example.com" },
    { role: "Moderator", name: "Eve", age: 35, active: true, email: "eve@example.com" },
    { role: "Moderator", name: "Frank", age: 41, active: true, email: "frank@example.com" },
    { role: "Guest", name: "Grace", age: 19, active: false, email: "grace@example.com" },
    { role: "User", name: "Hank", age: 33, active: true, email: "hank@example.com" },
    { role: "Guest", name: "Ivy", age: 27, active: true, email: "ivy@example.com" },
    { role: "User", name: "Jack", age: 24, active: false, email: "jack@example.com" },
    { role: "Admin", name: "Karen", age: 38, active: true, email: "karen@example.com" },
    { role: "Moderator", name: "Leo", age: 29, active: true, email: "leo@example.com" },
    { role: "User", name: "Mona", age: 31, active: false, email: "mona@example.com" },
    { role: "Guest", name: "Nate", age: 23, active: true, email: "nate@example.com" },
    { role: "Admin", name: "Olivia", age: 44, active: false, email: "olivia@example.com" },
    { role: "User", name: "Paul", age: 26, active: true, email: "paul@example.com" },
    { role: "Moderator", name: "Quinn", age: 37, active: false, email: "quinn@example.com" },
    { role: "User", name: "Rachel", age: 32, active: true, email: "rachel@example.com" },
    { role: "Guest", name: "Steve", age: 21, active: false, email: "steve@example.com" },
];


function App () {
    return (<div className="container">
        <h1>TP1 with React</h1>
        <SearchBar/>
        <UserTable users={USERS}/>
    </div>);
}

function SearchBar () {
    return (
        <div>
            <div>
                <Input
                    id="search"
                    placeholder="Rechercher..."
                    onChange={() => null}
                    value=""
                />
                <Checkbox id="checked" label="N'affiche que les personnes disponible" onChanges={() => null} checked={true}/>
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

export default App