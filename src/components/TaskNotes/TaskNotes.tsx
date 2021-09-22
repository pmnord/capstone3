import React from 'react';
import './TaskNotes.css';

interface Props {
  categoryIndex: number;
  deleteNote: (
    categoryIndex: number,
    taskIndex: number,
    noteIndex: number
  ) => void;
  notes: string[];
  taskIndex: number;
}

function TaskNotes({ categoryIndex, deleteNote, notes, taskIndex }: Props) {
  return (
    <div className='TaskNotes'>
      <label>Notes</label>
      <ul className='TaskNotes__ul'>
        {notes &&
          notes.map((note, noteIndex) => (
            <li
              className='TaskNotes__note'
              key={noteIndex}
              onClick={() => {
                deleteNote(categoryIndex, taskIndex, noteIndex);
              }}
            >
              {note}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskNotes;
