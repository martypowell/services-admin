import React, { useState } from "react";
import { List, Skeleton } from "antd";
import { fetchKeywords } from "../shared/Keywords";

const Keywords = props => {
  const [keywordList, setKeywordList] = useState([]);

  useState(() => {
    fetchKeywords(keywords => {
      setKeywordList(keywords);
    });
  }, []);
  return (
    <div className="keywords">
      <h1>Keywords</h1>
      <p>
        This is a list of the following keywords and how they are used in active
        services.
      </p>
      <List
        className="keyword-list"
        itemLayout="horizontal"
        dataSource={keywordList}
        renderItem={keyword => (
          <List.Item>
            <List.Item.Meta title={<p>{keyword.description}</p>} />
            <div>Total: {keyword.instances}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Keywords;
