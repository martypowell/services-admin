import React, { useEffect, useState } from "react";
import "./App.css";
import categoriesData from "./data/categories.json";
import { fetchServices } from "./shared/Services";
import { List, Card, Icon, Input, Tag, Checkbox } from "antd";
import ServiceCard from "./components/ServiceCard";

const CheckboxGroup = Checkbox.Group;

const App = () => {
  const [services, setServices] = useState([]);
  const [categories] = useState(categoriesData);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [categoryFilters, setCategoryFilters] = useState([]);

  useEffect(() => {
    fetchServices(services => {
      setServices(services);
      setFilteredServices(services);
    });
  }, []);

  const handleInputFilterChange = changeEvent => {
    const { value } = changeEvent.currentTarget;
    const filterVal = value ? value.toLowerCase() : "";
    const filteredServices = services.filter(service => {
      var hasDescriptionMatch =
        service.description &&
        service.description.toLowerCase().indexOf(filterVal) > -1;
      var numberOfCategoryMatches = service.keywords.filter(
        keyword => keyword.toLowerCase().indexOf(filterVal) > -1
      ).length;
      return hasDescriptionMatch || !!numberOfCategoryMatches;
    });

    setFilterValue(value);
    setFilteredServices(filteredServices);
  };

  const handleCategoryFilterChange = filters => {
    setCategoryFilters(filters);
  };

  return (
    <div className="services">
      <h1>Request Service or Report a Problem</h1>
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

export default App;
