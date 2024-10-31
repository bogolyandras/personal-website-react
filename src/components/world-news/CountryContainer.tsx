import React from 'react';
import {Country} from "./news";
import WebsiteContainer from "./WebsiteContainer";
import styles from "./CountryContainer.module.css";

const CountryContainer: React.FC<{ country: Country }> = ({ country }) => {
    return (
        <>
            <h2 className={styles.worldNews}>{country.name}</h2>
            <ul className={styles.worldNews}>
                {
                    country.websites.map(
                        website => <WebsiteContainer website={website} />
                    )
                }
            </ul>
        </>
    )
};

export default CountryContainer;