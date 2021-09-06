import React from 'react';
import './Tag.css';

interface Props {
  deleteTag: (index: number) => void;
  color: string;
  title: string;
  index: number;
}

const Tag = ({ deleteTag, color, title, index }: Props) => {
  const handleDeleteTag = () => {
    deleteTag(index);
  };

  return (
    <span
      className={`tag ${color && `tag--${color}`}`}
      onClick={handleDeleteTag}
    >
      {title}
    </span>
  );
};

export default Tag;
