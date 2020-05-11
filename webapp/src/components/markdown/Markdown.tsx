import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';

// Wrapper adding custom renderers to ReactMarkdown.
function Markdown(props: any) {
    const renderers = {
        "link": (props: any) => {
            // Print regular links leaving website as <a> and relative links as <NavLink>
            if (props.href && props.href.startsWith('/')) {
                return (<NavLink to={props.href}>{ props.children }</NavLink>)
            } else {
                return (<a href={props.href}>{ props.children }</a>)
            }
        }
    }

    const reactMarkdownProps = {
        ...props,
        renderers
    };

    return <ReactMarkdown {...reactMarkdownProps} />
};

export default Markdown;