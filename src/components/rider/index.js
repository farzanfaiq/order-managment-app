import { Button, Modal, Table, Input, Row, Typography, Form, InputNumber, message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";





const Rider = () => {
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };


  const onFinish = (values) => {
    message.success('This is a success message');
  };




  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "User 1",
      phone_number: "021123456789",
      area: "xyz",
      pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      key: "2",
      name: "User 2",
      phone_number: "021123456789",
      area: "xyz",
      pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      key: "3",
      name: "User 3",
      phone_number: "021123456789",
      area: "xyz",
      pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      key: "4",
      name: "User 4",
      phone_number: "021123456789",
      area: "xyz",
      pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      render: (id, record, index) => { ++index; return index; },
      showSorterTooltip: false,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Area",
      dataIndex: "area",
    },
    {
      title: "Pic",
      dataIndex: "pic",
      render: (t, r) => <img width={50} height={50} src={`${r.pic}`} />
    },
    {
      title: "Action",
      dataIndex: "action",

      render: (_text, record) => {
        return (
          <>
            <Link to="edit/1">
              <EditOutlined />

            </Link>
            <DeleteOutlined
              onClick={() => {
                onDeleteRider(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },

  ];

  const onDeleteRider = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this rider record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          message.error('Successfully Deleted');
          return pre.filter((rider) => rider.key !== record.key);
        });
      },
    });
  };




  const { Title } = Typography;

  return (
    <div>

      <Row justify="space-between">
        <Title level={3} className="my-2">
          Rider
        </Title>
        <Button type="pink" className="btn-add my-2">
          <Link to="create">+ Add Rider</Link>
        </Button>
      </Row>

      <Table columns={columns} dataSource={dataSource} />


    </div>
  );
};

export default Rider;
