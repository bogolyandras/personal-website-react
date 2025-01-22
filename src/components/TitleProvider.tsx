import React from 'react';
import { Helmet } from 'react-helmet';

interface TitleProviderProps {
    title: string;
    children: React.ReactNode;
}

const TitleProvider: React.FC<TitleProviderProps> = ({ title, children }) => {
    return (
        <>
            <Helmet>
                <title>{title} | András Bögöly&#x27;s Personal Homepage</title>
            </Helmet>
            {children}
        </>
    );
};

export default TitleProvider;