import React from 'react';
import {News} from "./news";
import SectionContainer from "./SectionContainer";
import styles from './NewsContainer.module.css';

const NewsContainer: React.FC<{ news: News }> = ({news}) => {
    return (
        <div id={"news_container_" + news.id} className={styles.worldNews}>
            {
                news.sections.map(
                    section =>
                        <SectionContainer section={section}/>
                )
            }
        </div>
    )
};

export default NewsContainer;
