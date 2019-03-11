import React from "react";
import { Form, Select, Input, Button, Checkbox } from "antd";
import { addService } from "../shared/Services";
import categories from "../data/categories";

const Option = Select.Option;

const agencies = categories;
const keywords = ["street", "road", "safety", "pothole", "snow"];

const saveService = service => {
  if (service && service.id) {
  } else {
    addService(service).then(console.log);
  }
};

const ServiceForm = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        saveService(values);
      }
    });
  };
  return (
    <section>
      <h1>Add a Service</h1>
      <Form onSubmit={handleSubmit} className="service-form">
        <Form.Item>
          {getFieldDecorator("id")(
            <Input type="hidden" placeholder="ServiceName" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("serviceName", {
            rules: [
              {
                required: true,
                message: "Input the name of your service"
              }
            ]
          })(<Input placeholder="ServiceName" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("agency", {
            rules: [
              {
                required: true,
                message: "Select an agency"
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
              {agencies.map(dept => (
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
                message: "Select at least one keyword"
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
