"use client";
//Example: Rendering a list with Components
function UserListItem({ name, age }) {
    return (
        <li>{name}-{age} year old.</li>
    );
}
export default function UserList() {
    const users = [
        { id: 1, name: "Alice", age: 23 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
    return (
        <ul>
            {users.map((user, index) =>
            (<UserListItem key={user.id} name={user.name} age={user.age} />
            ))}
        </ul>
    );
}