import { Button, Modal, Table, Row, Typography, message } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";



const Rider = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    };
    fetch(`${process.env.REACT_APP_API_URL}rider`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.riders);
        setDataSource(data.riders);
      })
  }, []);


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
      dataIndex: "phone",
    },
    {
      title: "Area",
      dataIndex: "area_name",
    },
    {
      title: "Pic",
      dataIndex: "pic",
      render: (t, r) => r.picture != null ? <img width={30} height={30} src={`http://127.0.0.1:8000${r.picture}`} /> : ''
    },
    {
      title: "Action",
      dataIndex: "action",

      render: (_text, record) => {
        return (
          <>
            <Link to={`edit/${record.id}`}>
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
          Riders
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
