import { Button, Modal, Table, Row, Typography, message } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { RidersList, RiderDelete } from "../../api/index";
import { useRouteSepration } from "../../hooks/useRouteSepration";

const Rider = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  useRouteSepration(["admin", "manager"]);

  useEffect(() => {
    RidersList(setDataSource, setLoading);
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      render: (id, record) => {
        return id;
      },
      showSorterTooltip: false,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      render: (t, r) => {
        return `+92 ${r.phone_number}`;
      },
    },
    {
      title: "Area",
      dataIndex: "area_name",
    },
    {
      title: "Pic",
      dataIndex: "picture",
      render: (t, r) =>
        r.picture != null ? (
          <img
            width={30}
            height={30}
            src={`${process.env.REACT_APP_IMAGE_URL + r.picture}`}
          />
        ) : (
          ""
        ),
    },
    {
      title: "Action",
      dataIndex: "action",

      render: (_text, record) => {
        return (
          <>
            <Link to={{ pathname: `edit/${record.id}` }} state={record}>
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
        RiderDelete(record, setDataSource);
      },
    });
  };

  const { Title } = Typography;

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

      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        loading={loading}
        scroll={{
          x: 500,
        }}
      />
    </div>
  );
};

export default Rider;
