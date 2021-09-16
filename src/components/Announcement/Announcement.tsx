import React from 'react';
import './Announcement.css';

interface Props {
  message: string;
}

const Announcement = ({ message }: Props) => {
  return <div className='Announcement'>{message}</div>;
};

export default Announcement;
