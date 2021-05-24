import React from "react";
import { Table, Tag, Space } from "antd";
import styled from "styled-components";

const TableContainer = styled(Table)`
  .ant-table-thead > tr > th {
    color: red;
  }
`;

const DefaultTable = (props) => {
  const { data, columns, ...rest } = props;
  return <TableContainer dataSource={data} columns={columns} {...rest} />;
};
export default DefaultTable;
