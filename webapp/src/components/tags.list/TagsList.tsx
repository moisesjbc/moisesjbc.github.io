import React, { useState, useEffect } from 'react';
import './TagsList.css';

function TagsList(props: any) {
    let {projectsType, tagIds = [], selectedTagIds = [], setSelectedTagIds} = props;

    let [tagLabels, setTagLabels] = useState<Array<string>>([]);

    useEffect(() => {
        let tagsDict = require(`../../db/${projectsType}/tags.json`)['tags'];
        setTagLabels(tagIds.map((tagId: string) => tagsDict[tagId]));
    }, [projectsType, tagIds]);

    const toggleTag = (index: number) => () => {
        if (selectedTagIds.includes(tagIds[index])) {
            setSelectedTagIds(selectedTagIds.filter((selectedTagId: string) => selectedTagId !== tagIds[index]));
        } else {
            setSelectedTagIds([...selectedTagIds, tagIds[index]]);
        }
    }

    return (
        <div>
            <ul className="tags">
                {tagLabels.map((tagLabel: string, index: number) => (
                    <li key={index} className={`tag ${selectedTagIds.includes(tagIds[index]) ? 'selected' : undefined}`} onClick={setSelectedTagIds ? toggleTag(index) : undefined}>
                        { tagLabel }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagsList;