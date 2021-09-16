import React from 'react';
import './Category.css';
import { Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';

import Task from '../Task/Task';
import AddButton from '../AddButton/AddButton';
import DeleteButton from '../DeleteButton/DeleteButton.js';
import { Task as ITask } from '../../types';

interface Props {
  index: number;
  uuid: string;
  color: string;
  title: string;
  deleteCategory: (index: number) => void;
  tasks: Array<ITask>;
  hue: number;
  moveTask: () => void;
  deleteTask: () => void;
  addTag: () => void;
  deleteTag: () => void;
  addNote: () => void;
  deleteNote: () => void;
  createTask: (index: number, uuid: string, newTaskTitle: string) => void;
}

export default function Category({
  index,
  uuid,
  color,
  title,
  deleteCategory,
  tasks,
  hue,
  moveTask,
  deleteTask,
  addTag,
  deleteTag,
  addNote,
  deleteNote,
  createTask,
}: Props) {
  const handleDeleteCategory = () => {
    deleteCategory(index);
  };

  return (
    <Draggable draggableId={uuid} index={index}>
      {(provided: DraggableProvided) => (
        <div
          className={`category ${color && `category--${color}`}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className='category__header' {...provided.dragHandleProps}>
            <h3 onDoubleClick={() => {}}>{title}</h3>

            {/* X icon */}
            <div className='category__delete-button-container'>
              {/* Only display a delete button if the category is empty */}
              {tasks.length === 0 ? (
                <DeleteButton
                  id={`cat-${index}-delete`}
                  hue={hue}
                  thingDeleted='category'
                  deleteCallback={handleDeleteCategory}
                />
              ) : null}
            </div>
          </div>

          <Droppable droppableId={uuid} type='task'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ul className='category__tasks-ul'>
                  {tasks &&
                    tasks.map((task, idx) => (
                      <li key={task.uuid}>
                        <Task
                          index={idx}
                          dbIndex={task.index}
                          uuid={task.uuid}
                          title={task.title}
                          tags={task.tags}
                          notes={task.notes}
                          categoryIndex={index}
                          category_uuid={task.category_uuid}
                          moveTask={moveTask}
                          deleteTask={deleteTask}
                          addTag={addTag}
                          deleteTag={deleteTag}
                          addNote={addNote}
                          deleteNote={deleteNote}
                          color={color}
                        />
                      </li>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>

          <AddButton
            type='task'
            onSubmit={(newTaskTitle) => {
              createTask(index, uuid, newTaskTitle);
            }}
            id={`cat-${index}-add-task`}
          />
        </div>
      )}
    </Draggable>
  );
}
