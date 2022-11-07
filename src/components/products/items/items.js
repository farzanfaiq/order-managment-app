import { Button, Modal, Table, Row, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ItemsList } from "../../../api/index";

const Items = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ItemsList(setDataSource, setLoading);
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
      title: "Description",
      dataIndex: "desc",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (t, r) => {
        return `PKR ${r.price}`;
      },
    },
    {
      title: "Tax",
      dataIndex: "tax",
      render: (t, r) => {
        return `${r.price}%`;
      },
    },
    {
      title: "Discount",
      dataIndex: "discount",
      render: (t, r) => {
        return `${r.price}%`;
      },
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
                // onDeleteManager(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const { Title } = Typography;
  return (
    <div>
      <Row justify="space-between">
        <Title level={3} className="my-2">
          Items
        </Title>
        <Button type="pink" className="btn-add my-2">
          <Link to="create">+ Add Item</Link>
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

export default Items;
