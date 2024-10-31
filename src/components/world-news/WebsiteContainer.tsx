import React from 'react';
import {Website} from "./news";

const WebsiteContainer: React.FC<{ website: Website }> = ({ website }) => {
  return (
      <li key={"website_" + website.id}>
          <a href={website.url}>{website.name}</a>
      </li>
  );
};

export default WebsiteContainer;