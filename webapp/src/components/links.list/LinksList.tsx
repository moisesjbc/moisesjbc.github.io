import React from 'react';

function LinksList(props: any) {
    let {links} = props;
    return (
        <ul>
            {links.map((link: any, index: number) => (
                <li key={index}>
                    {link.href.startsWith('http') ?
                        <a target="_blank" rel="noopener noreferrer" href={ link.href }>{ link.text }</a>
                        : <a rel="noopener noreferrer" href={link.href}>{ link.text }</a>
                    }
                    {link.warning && <span> ({ link.warning })</span>}
                </li>
            ))}
        </ul>
    );
};

export default LinksList;