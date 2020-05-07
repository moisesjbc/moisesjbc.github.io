import React from 'react';
import { NavLink } from 'react-router-dom';

function Breadcrumb(props: any) {
    let {path = []} = props;
    const locale = require(`../../db/locale/es_ES.json`);

    const printPathDir = (pathDir: Array<string>) => {
        return pathDir.length > 1 ? pathDir[1] : locale.breadcrumb[pathDir[0]];
    }

    return (
        <div>
            {(path.slice(0, -1).map((pathDir: Array<string>, index: number) => (
                <span key={index}><NavLink to={`/${pathDir[0]}`} >{printPathDir(pathDir)}</NavLink> > </span>
            )))}
            <span>{ printPathDir(path[path.length -1]) }</span>
        </div>
    );
};

export default Breadcrumb;