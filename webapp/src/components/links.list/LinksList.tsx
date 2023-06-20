import React from 'react';
import './LinksList.css';

function LinksList(props: any) {
    let {links} = props;
    return (
        <ul>
            {links.map((link: any, index: number) => (
                <li key={index}>
                    {link.href.startsWith('http') ?
                        <a target="_blank" rel="noopener noreferrer" href={ link.href }>{ link.text }</a>
                        : <span>
                            <a rel="noopener noreferrer" className={`${link.href.indexOf('/play') !== -1 ? 'play-online-link' : ''}`} href={link.href}>{ link.text }</a>
                          </span>
                    }
                    {link.warning && <span> ({ link.warning })</span>}
                </li>
            ))}
        </ul>
    );
};

export default LinksList;