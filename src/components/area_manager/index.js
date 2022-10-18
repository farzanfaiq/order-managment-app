import {  Col, Row, Button, Table, Typography  } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
  },
  {
    title: "Email Address",
    dataIndex: "email_address",
  },
  {
    title: "Area",
    dataIndex: "area",
  },
  {
    title: "ZIP Code",
    dataIndex: "zip_code",
  },
  {
    title: "Picture",
    dataIndex: "picture",
  },
];
const data = [
  {
    key: "1",
    name: "User 1",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
    picture: "Picture",
  },
  {
    key: "2",
    name: "User 2",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
    picture: "Picture",
  },
  {
    key: "3",
    name: "User 3",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
    picture: "Picture",
  },
  {
    key: "4",
    name: "User 4",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
    picture: "Picture",
  },
];


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const AreaManager = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
const { Title } = Typography;
  return (
      <React.Fragment>
          <Row className="my-2 align-items-center">
              <Col span={21}>
                  <Title>Area Manager</Title>
              </Col>
              
              <Col span={3}>
                <Button type="pink" htmlType="button">
                    <Link to="create">Create</Link>
                </Button>
              </Col>
          </Row>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Table
                rowSelection={{
                type: selectionType,
                ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
            </div>
    </React.Fragment>
  );
};

export default AreaManager;
