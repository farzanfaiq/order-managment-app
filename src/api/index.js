import React from "react";
import { Form, message } from "antd";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";



// const config = {
//   headers: {
//     Authorization: 'Bearer' + localStorage.getItem("token")
//   }
// };

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem("token");

export const LoginUser = (values) => {
  axios
    .post('/login', values)
    .then((response) => {
      message.success(response.data.msg);
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      // Passing name in Local Storage
      const name = response.data.user.name;
      localStorage.setItem("loginName", name);
      localStorage.setItem("authorize", true);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      message.error(error.msg);
    });
};

export const LogoutUser = () => {
  // axios
  //   .post('/logout')
  //   .then((response) => {
  localStorage.clear();
  //   message.success(response.data.msg);
  //   window.location.reload();
  // })
  // .catch((error) => {
  //   console.log(error);
  //   message.error(error);
  // });
};

export const RidersList = (setDataSource, setLoading) => {
  axios
    .get('/rider')
    .then((response) => {
      setDataSource(response.data.riders);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const RiderDelete = (record, setDataSource) => {
  axios
    .delete(`/rider/${record.id}`)
    .then((response) => {
      setDataSource((pre) => {
        message.success(response.data.msg);
        return pre.filter((rider) => rider.id !== record.id);
      });
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const RiderCreateUpdate = (id, form, navigate, values) => {
  let formData = new FormData();
  formData.append("name", values.name);
  formData.append("area_name", values.area_name);
  formData.append("phone_number", values.phone_number);

  if (typeof values.picture !== "undefined") {
    formData.append("picture", values.picture.file);
  }

  axios
    .post(`/rider/${id}`, formData)
    .then((response) => {
      console.log(response);
      message.success(response.data.msg);
      navigate("/rider");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const ManagerList = (setDataSource, setLoading) => {
  axios
    .get('/area-manager')
    .then((response) => {
      setDataSource(response.data.area_managers);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });

};

export const ManagerDelete = (record, setDataSource) => {
  axios
    .delete(`/area-manager/${record.id}`)
    .then((response) => {
      setDataSource((pre) => {
        message.success(response.data.msg);
        return pre.filter((manager) => manager.id !== record.id);
      });
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const ManagerCreateUpdate = (id, form, navigate, values) => {
  let formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("phone_number", values.phone_number);
  formData.append("area_name", values.area_name);
  formData.append("zip_code", values.zip_code);

  if (typeof values.picture !== "undefined") {
    formData.append("picture", values.picture.file);
  }

  axios
    .post(`/area-manager/${id}`, formData)
    .then((response) => {
      console.log(response);
      message.success(response.data.msg);
      navigate("/area-manager");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};
