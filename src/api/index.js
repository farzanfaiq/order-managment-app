import React, { useContext } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const LogoutUser = (setAuthState) => {
  // axios
  //   .post('/logout')
  //   .then((response) => {
  localStorage.clear();
  setAuthState({ username: "", isLoggedIn: false });
  //   message.success(response.data.msg);
  // window.location.reload();
  // })
  // .catch((error) => {
  //   console.log(error);
  //   message.error(error);
  // });
};

export const RidersList = (setDataSource, setLoading) => {
  axios
    .get("/rider", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
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
    .delete(`/rider/${record.id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
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
    .post(`/rider/${id}`, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
    .then((response) => {
      console.log(response);
      message.success(response.data.msg);
      navigate("/admin/rider");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const ManagerList = (setDataSource, setLoading) => {
  axios
    .get("/area-manager", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
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
    .delete(`/area-manager/${record.id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
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
    .post(`/area-manager/${id}`, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
    .then((response) => {
      console.log(response);
      message.success(response.data.msg);
      navigate("/admin/area-manager");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const LoginAdmin = (values, setAuthState) => {
  let payload = { ...values };
  payload.type = "admin";
  axios
    .post("/auth/login", payload)
    .then((response) => {
      message.success(response.data.msg);
      const token = response.data.access_token;
      localStorage.setItem("admin_token", token);
      // Passing name in Local Storage
      const name = response.data.user.name;
      localStorage.setItem("admin_loginName", name);
      console.log([token, name]);
      localStorage.setItem("authorize", true);
      setAuthState({ username: "", isLoggedIn: true });
    })
    .catch((error) => {
      console.log(error);
      message.error(error.response.data.msg);
    });
};

// User Login Mehtod
export const UserLogin = (values, setAuthState) => {
  let payload = { ...values };
  payload.type = "customer";
  axios
    .post("/auth/login", payload)
    .then((response) => {
      message.success(response.data.msg);
      const token = response.data.access_token;
      localStorage.setItem("customer_token", token);
      // Passing name in Local Storage
      const name = response.data.user.name;
      localStorage.setItem("customer_loginName", name);
      console.log([token, name]);
      localStorage.setItem("authorize", true);
      setAuthState({ username: "", isLoggedIn: true });
    })
    .catch((error) => {
      console.log(error);
      message.error(error.response.data.msg);
    });
};

// User Signup Method
export const SignupUser = (form, values, navigate) => {
  let formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("c_password", values.c_password);
  formData.append("phone_number", values.phone_number);
  formData.append("gender", values.gender);
  formData.append("role", "customer");

  axios
    .post(`/auth/register`, formData)
    .then((response) => {
      console.log(response);
      message.success(response.data.msg);
      navigate("/user/dashboard");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

// Items CRUD
export const ItemsList = (setDataSource, setLoading) => {
  axios
    .get("/items", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
    .then((response) => {
      setDataSource(response.data.items);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const ItemsDelete = (record, setDataSource) => {
  axios
    .delete(`/items/${record.id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
    .then((response) => {
      setDataSource((pre) => {
        message.success(response.data.msg);
        return pre.filter((items) => items.id !== record.id);
      });
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};

export const ItemsCreateUpdate = (id, form, navigate, values) => {
  let formData = new FormData();
  formData.append("name", values.name);
  formData.append("description", values.desc);
  formData.append("price", values.price);
  formData.append("tax", values.tax);
  formData.append("discount", values.discount);

  if (typeof values.picture !== "undefined") {
    formData.append("picture", values.picture.file);
  }

  axios
    .post(`/items/${id}`, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    })
    .then((response) => {
      console.log(response);
      message.success(response.data.msg);
      navigate("/admin/items");
      form.resetFields();
    })
    .catch((error) => {
      console.log(error);
      message.error(error);
    });
};
