import React from 'react';
import { NavLink } from 'react-router-dom';

function ContentHeader(props: any) {
    let {path = [], displayBreadcrumb = true, displayTitle = true} = props;
    const locale = require(`../../db/locale/es_ES.json`);

    const printPathDir = (pathDir: Array<string>, localeDict = locale.breadcrumb) => {
        return pathDir.length > 1 ? pathDir[1] : localeDict[pathDir[0]];
    }

    return (
        <div>
            {displayBreadcrumb && <span>
                {(path.slice(0, -1).map((pathDir: Array<string>, index: number) => (
                    <span key={index}><NavLink to={`/${pathDir[0]}`} >{printPathDir(pathDir)}</NavLink> > </span>
                )))}
                <span>{ printPathDir(path[path.length -1]) }</span>
            </span>}

            {displayTitle && <h1>{ path[path.length - 1][0] === 'play' ? `${locale.titles['play']} "${path[path.length - 2][1]}"` : printPathDir(path[path.length -1], locale.titles) }</h1>}
        </div>
    );
};

export default ContentHeader;