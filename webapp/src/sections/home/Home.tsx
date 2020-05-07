import React from 'react';
import ReactMarkdown from 'react-markdown';
import data from '../../db/home/home.json';
import './Home.css';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

function Home() {
    return (
        <>
            <Breadcrumb path={[['home']]} />
            <ReactMarkdown source={data['about_me']}/>
            <ul id="news">
            {data['news'].map((siteNew, index) => (
                <li>
                    <strong>{siteNew['date']}: </strong>
                    <ReactMarkdown source={siteNew['body']}/>
                </li>
            ))}
            </ul>
        </>
    );
}

export default Home;