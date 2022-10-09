import { useCallback, useState } from "react";
import styled from "styled-components";
import { sortData } from "./functions";
import { Data, SortKeys, SortOrder } from "./interface";
import { SortButton } from "./SortButton";


function Table({ goods }: { goods: Data }) {
  const [sortKey, setSortKey] = useState<SortKeys>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  const headers: { key: SortKeys; label: string }[] = [
    { key: "distance", label: "Distance" },
    { key: "quantity", label: "Quantity" },
    { key: "title", label: "Title" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: goods, sortKey, reverse: sortOrder === "desc" }),
    [goods, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    setSortKey(key);
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Date</td>
          {headers.map((row) => {
            return (
              <td key={row.key}>
                <SortButton
                  onClick={() => changeSort(row.key)}
                  sortOrder = {sortOrder}
                  sortKeys = {sortKey}
                  rowKey = {row.key}
                  rowLabel = {row.label}
                />
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData().map((product, index) => {
          return (
            <tr key={product.title + '' + index}>
              <td>{product.date}</td>
              <td>{product.distance}</td>
              <td>{product.quantity}</td>
              <td>{product.title}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}



const StyledTable = styled.table`
width: 100%;
border: none;
td {
  text-align: center;
}

tbody tr {
  :nth-of-type(odd) {
    background-color: #efefef;
  }
  :hover {
    background-color: #c1f7e4;
  }
}

caption {
  font-size: 30px;
  font-weight: bold;
}
`;


export default Table;