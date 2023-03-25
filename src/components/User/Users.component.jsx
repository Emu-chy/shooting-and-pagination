import axios from "axios";
import _ from "lodash";

import React, { useEffect, useState } from "react";
import Pagination from "../../common/Pagination.component";
import Table from "../../common/Table.component";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [sortColumn, setSortColumn] = useState("Id");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const columns = [
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
    ];

    const onHandleSort = (column, order) => {
        setSortColumn(column);
        setSortOrder(order);
    };

    const sortUsers = () => {
        const column = columns.find((column) => column.name === sortColumn);
        const sortedUsers = _.orderBy(users, column.path, sortOrder);
        return sortedUsers;
    };

    const paginateUsers = () => {
        const sortedUsers = sortUsers();
        const offset = (currentPage - 1) * limit;
        const paginatedUsers = _.drop(sortedUsers, offset).slice(0, limit);
        return paginatedUsers;
    };
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
        <div className="container">
            <h3 className="text-center">User Table</h3>
            <select onChange={(e) => setLimit(e.target.value)}>
                <option value="5">Five</option>
                <option value="10">Ten</option>
                <option value="15">Fiftheen</option>
                <option value="20">Twonety</option>
            </select>
            <Table
                columns={columns}
                items={paginateUsers()}
                sortColumn={sortColumn}
                sortOrder={sortOrder}
                onHandleSort={onHandleSort}
            />

            <Pagination
                items={users}
                limit={limit}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Users;
