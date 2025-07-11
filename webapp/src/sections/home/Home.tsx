import React from 'react';
import Markdown from '../../components/markdown/Markdown';
import data from '../../db/home/home.json';
import './Home.css';
import ContentHeader from '../../components/content.header/ContentHeader';

function Home(language: string) {
    console.log('language ', language)
    return (
        <>
            <ContentHeader path={[['home']]} displayBreadcrumb={false} />

            <div className="center-box box-border-top">
                <Markdown source={data['about_me']}/>

                <div id="news-header">
                    <h2>Últimas noticias</h2>
                </div>
                <div>
                    <ul id="news">
                        {data['news'].map((siteNew, index) => (
                            <li key={index}>
                                <strong>{siteNew['date']}: </strong>
                                <Markdown source={siteNew['body']} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;