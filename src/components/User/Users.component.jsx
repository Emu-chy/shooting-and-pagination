import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../common/Table.component";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get("https://dummyjson.com/users");
                setUsers(data.users);
            } catch (err) {}
        };
        getUsers();
    }, []);
    return (
        <>
            <h3 className="text-center">User Table</h3>
            <Table
                columns={[
                    { name: "Id", path: "id" },
                    { name: "First Name", path: "firstName" },
                    { name: "Last Name", path: "lastName" },
                    { name: "Email", path: "email" },
                    { name: "Age", path: "age" },
                    { name: "Gender", path: "gender" },
                    { name: "Phone", path: "phone" },
                    {
                        name: "Hair Color",
                        getContent: (user, id) => {
                            return (
                                <td key={`col-${id}`} scope="row">
                                    {user.hair.color}
                                </td>
                            );
                        },
                    },
                    {
                        name: "City",
                        getContent: (user, id) => {
                            return (
                                <td key={`col-${id}`} scope="row">
                                    {user.address.city}
                                </td>
                            );
                        },
                    },
                ]}
                items={users}
            />
        </>
    );
};

export default Users;
