import React from "react";

const TableHeader = ({ columns }) => {
    return (
        <>
            <thead>
                <tr>
                    {columns.map((column, index) => {
                        return (
                            <th key={index} scope="col">
                                {column.name}
                            </th>
                        );
                    })}
                </tr>
            </thead>
        </>
    );
};

export default TableHeader;
