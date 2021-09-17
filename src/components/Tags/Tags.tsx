import React from 'react';
import './Tags.css';
import Tag from '../Tag/Tag';

// Displays tags attached to a Task

interface Props {
  categoryIndex: number;
  tags: string[];
  taskIndex: number;
  color: string;
  deleteTag: (
    categoryIndex: number,
    tagIndex: number,
    taskIndex: number
  ) => void;
}

export default function Tags({
  categoryIndex,
  color,
  deleteTag,
  tags = [],
  taskIndex,
}: Props) {
  const handleDeleteTag = (tagIndex: number) => {
    deleteTag(categoryIndex, taskIndex, tagIndex);
  };

  return (
    <div className='tags'>
      <ul className='tags__ul'>
        {tags.map((tag, idx) => (
          <li key={idx}>
            <Tag
              index={idx}
              title={tag}
              deleteTag={handleDeleteTag}
              color={color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
