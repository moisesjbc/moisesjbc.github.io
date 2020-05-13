import React from 'react';
import Markdown from '../../components/markdown/Markdown';
import data from '../../db/home/home.json';
import './Home.css';
import ContentHeader from '../../components/content.header/ContentHeader';

function Home() {
    return (
        <>
            <ContentHeader path={[['home']]} displayBreadcrumb={false} />
            <Markdown source={data['about_me']}/>
            <ul id="news">
            {data['news'].map((siteNew, index) => (
                <li key={index}>
                    <strong>{siteNew['date']}: </strong>
                    <Markdown source={siteNew['body']} />
                </li>
            ))}
            </ul>
        </>
    );
}

export default Home;