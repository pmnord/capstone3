import React, { useState } from 'react';
import './Landing.css';
import ApiService from '../../services/api-service';
import { useHistory } from 'react-router-dom';

export default function Landing() {
  const [newProjectClicked, setNewProjectClicked] = useState(false);
  const history = useHistory();

  const handleNewProject = () => {
    // Prevent multiple clicks from making multiple API requests
    if (newProjectClicked) {
      return;
    } else {
      setNewProjectClicked(true);

      ApiService.postProject().then((uuid) => {
        return history.push(`/project/${uuid}`);
      });
    }
  };

  return (
    <section className='landing'>
      <div className='landing__main'>
        <section className='landing__pitch'>
          <h1 className='landing__h1'>kanbanwe</h1>
          <h2 className='landing__h2'>
            start collaberating on a no-frills kanban board
          </h2>
        </section>
        <button className='btn--hover--black' onClick={handleNewProject}>
          {newProjectClicked ? 'Waiting for Heroku...' : 'New Kanban'}
        </button>
        <p>Plan and track your tasks — the agile way!</p>
      </div>
      <footer className='footer landing__footer'>
        <a
          className='footer__source'
          href='https://github.com/pmnord/todo-management-react-capstone-client'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='source__p'>View Source on </p>
          <img
            className='source__img'
            src={require('../../assets/GitHub_Logo.png')}
            alt='GitHub'
          ></img>
        </a>
        <p>©mit license</p>
      </footer>
    </section>
  );
}
