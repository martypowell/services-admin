import React, { useEffect, useState } from "react";
import categoriesData from "../data/categories.json";
import { fetchServices } from "../shared/Services";
import { List, Input, Checkbox, Button } from "antd";
import ServiceCard from "./ServiceCard";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const CheckboxGroup = Checkbox.Group;

const ServicesList = props => {
  const [services, setServices] = useState([]);
  const [categories] = useState(categoriesData);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [categoryFilters, setCategoryFilters] = useState([]);

  const filterServices = () => {
    const filterVal = filterValue ? filterValue.toLowerCase() : "";
    const filteredServices = services.filter(service => {
      var hasDescriptionMatch =
        service.description &&
        service.description.toLowerCase().indexOf(filterVal) > -1;
      var numberOfKeywordMatches = service.keywords.filter(
        keyword => keyword.toLowerCase().indexOf(filterVal) > -1
      ).length;
      var hasCategoryMatch =
        categoryFilters.length === 0 ||
        categoryFilters.includes(service.agency);

      return (
        (hasDescriptionMatch || !!numberOfKeywordMatches) && hasCategoryMatch
      );
    });
    setFilteredServices(filteredServices);
  };

  const handleInputFilterChange = changeEvent => {
    const { value } = changeEvent.currentTarget;
    setFilterValue(value);
  };

  const handleCategoryFilterChange = filters => {
    setCategoryFilters(filters);
  };

  const handleNewServiceClick = () => {
    props.history.push("/services/0");
  };

  useEffect(() => {
    fetchServices(props.userInfo, services => {
      setServices(services);
      setFilteredServices(services);
    });
  }, []);

  useEffect(() => {
    filterServices();
  }, [categoryFilters, filterValue]);

  return (
    <div className="services">
      <h1>Request Service or Report a Problem</h1>
      <Button onClick={handleNewServiceClick} type="primary" icon="plus">
        Add Service
      </Button>
      <section className="section">
        <CheckboxGroup
          options={categories}
          defaultValue={[]}
          onChange={handleCategoryFilterChange}
        />
      </section>
      <section className="section">
        <Input
          size="large"
          placeholder="Filter services by name or category..."
          onChange={handleInputFilterChange}
          value={filterValue}
        />
      </section>
      <section className="section">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4
          }}
          dataSource={filteredServices}
          renderItem={service => <ServiceCard service={service} />}
        />
      </section>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    userInfo: state
  };
};

export default withRouter(connect(mapStateToProps)(ServicesList));
