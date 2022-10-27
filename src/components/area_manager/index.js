import {
  Button,
  Modal,
  Table,
  Input,
  Row,
  Typography,
  Form,
  InputNumber,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ManagerList, ManagerDelete } from "../../api/index";

const AreaManager = () => {
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    message.success("This is a success message");
  };

  const [dataSource, setDataSource] = useState([
    // {
    //   key: "1",
    //   name: "User 1",
    //   phone_number: "021123456789",
    //   email_address: "test@test.com",
    //   area: "xyz",
    //   zip_code: 12345,
    //   pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   key: "2",
    //   name: "User 2",
    //   phone_number: "021123456789",
    //   email_address: "test@test.com",
    //   area: "xyz",
    //   zip_code: 12345,
    //   pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   key: "3",
    //   name: "User 3",
    //   phone_number: "021123456789",
    //   email_address: "test@test.com",
    //   area: "xyz",
    //   zip_code: 12345,
    //   pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   key: "4",
    //   name: "User 4",
    //   phone_number: "021123456789",
    //   email_address: "test@test.com",
    //   area: "xyz",
    //   zip_code: 12345,
    //   pic: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);
  useEffect(() => {
    ManagerList(setDataSource);
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      render: (id, record, index) => {
        ++index;
        return index;
      },
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
      title: "Email Address",
      dataIndex: "email",
    },
    {
      title: "Area",
      dataIndex: "area_name",
    },
    {
      title: "ZIP Code",
      dataIndex: "zip_code",
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
                onDeleteManager(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteManager = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this manager record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        ManagerDelete(record, setDataSource);
      },
    });
  };

  const { Title } = Typography;

  return (
    <div>
      <Row justify="space-between">
        <Title level={3} className="my-2">
          Area Managers
        </Title>
        <Button type="pink" className="btn-add my-2">
          <Link to="create">+ Add Manager</Link>
        </Button>
      </Row>

      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default AreaManager;
