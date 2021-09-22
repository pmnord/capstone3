import React, { useState } from 'react';
import './Task.css';
import { Draggable } from 'react-beautiful-dnd';

import Tags from '../Tags/Tags';
import TaskNotes from '../TaskNotes/TaskNotes';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddButton from '../AddButton/AddButton';

interface Props {
  addTag: (categoryIndex: number, taskIndex: number, tag: string) => void;
  addNote: (categoryIndex: number, taskIndex: number, note: string) => void;
  categoryIndex: number;
  color: string;
  deleteNote: (
    categoryIndex: number,
    taskIndex: number,
    noteIndex: number
  ) => void;
  deleteTag: (
    categoryIndex: number,
    taskIndex: number,
    tagIndex: number
  ) => void;
  deleteTask: (categoryIndex: number, taskIndex: number) => void;
  hue: string;
  index: number;
  notes: string[];
  tags: string[];
  title: string;
  uuid: string;
}

const Task = ({
  addNote,
  addTag,
  categoryIndex,
  color,
  deleteNote,
  deleteTag,
  deleteTask,
  hue,
  index,
  notes,
  tags,
  title,
  uuid,
}: Props) => {
  const [showEditDelete, setShowEditDelete] = useState(false);

  function handleDeleteTask() {
    deleteTask(categoryIndex, index);
  }

  return (
    <Draggable draggableId={uuid} index={index}>
      {(provided) => (
        <div>
          <div
            className={`Task ${color && `task--${color}`}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onMouseEnter={() => setShowEditDelete(true)}
            onMouseLeave={() => setShowEditDelete(false)}
            onFocus={() => setShowEditDelete(true)}
          >
            <div className='Task__body'>
              <div className='Task__header'>
                <h4>{title}</h4>

                <div className='Task-header__delete-button-container'>
                  {showEditDelete && (
                    <DeleteButton
                      hue={hue}
                      id={`cat-${categoryIndex}-task-${index}-delete`}
                      deleteCallback={handleDeleteTask}
                      thingDeleted='task'
                    />
                  )}
                </div>
              </div>

              {tags.length > 0 && (
                <Tags
                  tags={tags}
                  color={color}
                  taskIndex={index}
                  deleteTag={deleteTag}
                  categoryIndex={categoryIndex}
                />
              )}

              {notes.length > 0 && (
                <TaskNotes
                  notes={notes}
                  taskIndex={index}
                  deleteNote={deleteNote}
                  categoryIndex={categoryIndex}
                />
              )}
            </div>
            <div className='Task__buttons'>
              <AddButton
                type='tag'
                onSubmit={(tag) => {
                  addTag(categoryIndex, index, tag);
                }}
              />
              <AddButton
                type='note'
                onSubmit={(note) => {
                  addNote(categoryIndex, index, note);
                }}
              />
              {/* FUTURE DATE PICKER AND COLOR PICKER */}
              {/* <AddButton type='date' /> */}
              {/* <AddButton type='color' /> */}
              {/* TODO: hide action buttons when not in use */}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
