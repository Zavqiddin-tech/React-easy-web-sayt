import React from "react";

const TableItem = () => {
  return (
    <tr>
      <td>
        <div className="square"></div>
      </td>
      <td className="td-wrapp"><div className="square-img"></div>Discount 20% OFF</td>
      <td>6.98K</td>
      <td>01/09/22</td>
      <td>2.09%</td>
      <td>1.05%</td>
      <td>0.07%</td>
      <td className="td-line">-</td>
      <td className="td-draft">Draft</td>
    </tr>
  );
};

export default TableItem;
