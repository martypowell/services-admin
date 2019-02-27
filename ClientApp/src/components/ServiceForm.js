import React from "react";
import { Form, Select, Input, Button, Checkbox } from "antd";

const Option = Select.Option;

const departments = [
  {
    Id: 1,
    Name: "Fire"
  },
  {
    Id: 2,
    Name: "Police"
  },
  {
    Id: 3,
    Name: "Public Works"
  }
];
const keywords = ["street", "road", "safety", "pothole", "snow"];

const ServiceForm = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  return (
    <section>
      <h1>Add a Service</h1>
      <Form onSubmit={handleSubmit} className="service-form">
        <Form.Item>
          {getFieldDecorator("serviceName", {
            rules: [
              {
                required: true,
                message: "Please input the name of your service"
              }
            ]
          })(<Input placeholder="ServiceName" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("agency", {
            rules: [
              {
                required: true,
                message: "Please select an agency"
              }
            ]
          })(
            <Select
              showSearch
              // style={{ width: 200 }}
              placeholder="Select an agency"
              optionFilterProp="children"
              // onChange={handleChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {departments.map(dept => (
                <Option key={dept.Id} value={dept.Id}>
                  {dept.Name}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("keywords", {
            rules: [
              {
                required: true,
                message: "Please select at least one keyword"
              }
            ]
          })(
            <Select
              mode="tags"
              placeholder="Keywords"
              // onChange={handleChange}
            >
              {keywords.map((keyword, keywordIndex) => (
                <Option key={keywordIndex} value={keyword}>
                  {keyword}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("isPopularService")(
            <Checkbox>Is Most Popular Service?</Checkbox>
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="service-form-button"
          >
            Save Service
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

const WrappedServiceForm = Form.create({ name: "service_form" })(ServiceForm);

export default WrappedServiceForm;
