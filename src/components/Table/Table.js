import React from "react";
import './table.css';
import TableItem from "./tableitem";


const Table = () => {
    return (
        <div className="table-wrap">
            <table className="table">
            <tbody>
                <tr>
                    <td><div className="square"></div></td>
                    <td>Email</td>
                    <td>Sent</td>
                    <td>Date</td>
                    <td>Open</td>
                    <td>Click</td>
                    <td>Bunce</td>
                    <td>Unsub</td>
                    <td>Status</td>
                </tr>
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </tbody>
        </table>
        </div>
    )
}

export default Table;