import React from "react";
import TableBody from "./TableBody.component";
import TableHeader from "./TableHeader.component";

const Table = ({ columns, items, sortColumn, sortOrder, onHandleSort }) => {
    return (
        <>
            <table className="container mt-3 table table-success table-striped">
                <TableHeader
                    columns={columns}
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onHandleSort={onHandleSort}
                />
                <TableBody items={items} columns={columns} />
            </table>
        </>
    );
};

export default Table;
