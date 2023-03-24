import React from "react";

const TableBody = ({ columns, items }) => {
    return (
        <>
            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index}>
                            {columns.map((column, id) => {
                                if (column.path) {
                                    return (
                                        <td key={`col-${id}`} scope="row">
                                            {item[column.path]}
                                        </td>
                                    );
                                }
                                return column.getContent(item, id);
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
};

export default TableBody;
