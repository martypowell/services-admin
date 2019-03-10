import React from "react";
import { Card, List, Icon, Tag } from "antd";

const ServiceCard = props => {
  const { service } = props;

  return (
    <List.Item>
      <Card
        title={service.name}
        extra={service.isMostPopularService && <Icon type="star" />}
      >
        <p>{service.agency}</p>
        {service.keywords.map((keyword, keywordIndex) => (
          <Tag key={keywordIndex}>{keyword}</Tag>
        ))}
      </Card>
    </List.Item>
  );
};

export default ServiceCard;
