import React from 'react';
import newsSources from "../components/world-news/news";
import NewsContainer from "../components/world-news/NewsContainer";

const WorldNews: React.FC = () => {
    return (
        <NewsContainer news={newsSources} />
    )
};

export default WorldNews;
