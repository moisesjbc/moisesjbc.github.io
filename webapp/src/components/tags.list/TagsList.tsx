import React, { useState, useEffect } from 'react';
import './TagsList.css';

function TagsList(props: any) {
    let {projectsType, tagIds = []} = props;

    let [tagLabels, setTagLabels] = useState<Array<string>>([]);

    useEffect(() => {
        let tagsDict = require(`../../db/${projectsType}/tags.json`)['tags'];
        console.log('tagsDict', tagsDict);

        setTagLabels(tagIds.map((tagId: string) => tagsDict[tagId]));
    }, [projectsType, tagIds]);

    return (
        <div>
            <ul className="tags">
                {tagLabels.map((tagLabel: string, index: number) => (
                    <li key={index} className="tag">
                        { tagLabel }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagsList;