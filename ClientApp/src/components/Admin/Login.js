import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { Login } from "../../shared/Login";

const LoginForm = props => {
  const handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { username, password } = values;
        Login(username, password).then(response =>
          console.log("got respones from service", response)
        );
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <div className="login">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginForm);

export default WrappedNormalLoginForm;
