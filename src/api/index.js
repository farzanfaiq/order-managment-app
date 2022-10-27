import React from "react";
import { Form, message } from "antd";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let values = "";
const headerLogin = {
  "Content-type": "application/json",
};
const authheader = {
  "bearer-token": localStorage.getItem("token"),
};

const requestPost = {
  method: "POST",
  // mode: "no-cors",
  // headers: authheader,
};

const requestGet = {
  method: "GET",
  headers: authheader,
};

// oAuth
const login_url = `${process.env.REACT_APP_API_URL}login`;
const logout_url = `${process.env.REACT_APP_API_URL}logout`;

// Rider
const rider_list = `${process.env.REACT_APP_API_URL}rider`;

//Area Manager
const area_manager_list = `${process.env.REACT_APP_API_URL}area-manager`;

export const LoginUser = (values) => {
  const requestLogin = {
    method: "POST",
    headers: headerLogin,
    body: JSON.stringify(values),
  };
  fetch(login_url, requestLogin)
    .then((response) => response.json())
    .then((data) => {
      // Passing token in Local Storage
      const token = data.access_token;
      localStorage.setItem("token", token);
      // Passing name in Local Storage
      const name = data.user.name;
      localStorage.setItem("loginName", name);
      localStorage.setItem("authorize", true);

      message.success(data.msg);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      message.error("Login Failed");
    });
};

export const LogoutUser = () => {
  fetch(logout_url, requestPost)
    .then((response) => response.json())
    .then((data) => {
      localStorage.clear();
      message.success(data.msg);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      message.error("Logout Failed");
    });
};

export const RidersList = (setDataSource, setLoading) => {
  fetch(rider_list, requestGet)
    .then((response) => response.json())
    .then((data) => {
      setDataSource(data.riders);
      setLoading(false);
    });
};

export const RiderDelete = (record, setDataSource) => {
  const rider_delete = `${process.env.REACT_APP_API_URL}rider/destroy/${record.id}`;

  fetch(rider_delete, requestPost)
    .then((response) => response.json())
    .then((data) => {
      setDataSource((pre) => {
        message.success(data.msg);
        return pre.filter((rider) => rider.id !== record.id);
      });
    })
    .catch((error) => {
      console.log(error);
      message.error(error.msg);
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

  let rider_create_update = `${process.env.REACT_APP_API_URL}rider/store`;
  if (id != null) {
    rider_create_update = `${process.env.REACT_APP_API_URL}rider/update/${id}`;
  }

  const requestCreate = {
    method: "POST",
    headers: authheader,
    body: formData,
  };
  fetch(rider_create_update, requestCreate)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      message.success(data.msg);
      navigate("/rider");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error.msg);
    });
};

export const ManagerList = (setDataSource, setLoading) => {
  fetch(area_manager_list, requestGet)
    .then((response) => response.json())
    .then((data) => {
      setDataSource(data.area_managers);
      setLoading(false);
    });
};

export const ManagerDelete = (record, setDataSource) => {
  const manager_delete = `${process.env.REACT_APP_API_URL}area-manager/destroy/${record.id}`;

  fetch(manager_delete, requestPost)
    .then((response) => response.json())
    .then((data) => {
      setDataSource((pre) => {
        message.success(data.msg);
        return pre.filter((manager) => manager.id !== record.id);
      });
    })
    .catch((error) => {
      console.log(error);
      message.error(error.msg);
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

  let manager_create_update = `${process.env.REACT_APP_API_URL}area-manager/store`;
  if (id != null) {
    manager_create_update = `${process.env.REACT_APP_API_URL}area-manager/update/${id}`;
  }

  const requestCreate = {
    method: "POST",
    headers: authheader,
    body: formData,
  };
  fetch(manager_create_update, requestCreate)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      message.success(data.msg);
      navigate("/area-manager");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error.msg);
    });
};
