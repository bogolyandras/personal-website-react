import React from 'react';
import { Section} from "./news";
import CountryContainer from "./CountryContainer";
import styles from "./SectionContainer.module.css";

const SectionContainer: React.FC<{ section: Section }> = ({ section }) => {
    return (
        <ul id={"section_container_" + section.id} className={styles.worldNews}>
            {
                section.countries.map(
                    country => <CountryContainer country={country} />
            )
            }
        </ul>
    );
};

export default SectionContainer;