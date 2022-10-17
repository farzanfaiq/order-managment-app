import { Button, Divider, Table, Layout, Row, Typography } from "antd";
import React, { useState } from "react";
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
];
const data = [
  {
    key: "1",
    name: "User 1",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
  },
  {
    key: "2",
    name: "User 2",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
  },
  {
    key: "3",
    name: "User 3",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
  },
  {
    key: "4",
    name: "User 4",
    phone_number: "021123456789",
    email_address: "test@test.com",
    area: "xyz",
    zip_code: 12345,
  },
];

const AreaManager = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  return (
    <div>
      <Divider />

      <Row justify="space-between">
        <Title level={3} className="my-2">
          Area Manager
        </Title>
        <Button className="btn-add my-2">Add Rider</Button>
      </Row>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AreaManager;
