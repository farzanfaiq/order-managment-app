import { Button, Divider, Table, Layout, Row, Typography } from "antd";
import React, { useState } from "react";
import {Link} from "react-router-dom";
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

const Rider = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <div>
      <Row justify="space-between">
        <Title level={3} className="my-2">
          Riders
        </Title>
        <Button type="pink" className="btn-add my-2">
          <Link to="create">+ Add Rider</Link>
        </Button>
      </Row>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Rider;
