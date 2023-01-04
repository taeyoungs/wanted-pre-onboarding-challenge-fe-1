import { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

import useDeleteTodo from './hooks/useDeleteTodo';
import useUpdateTodo from './hooks/useUpdateTodo';

interface ITodoItemProps {
  id: string;
  title: string;
  content: string;
}

function TodoItem({ id, title, content }: ITodoItemProps) {
  const { mutate: deleteTodo } = useDeleteTodo(id);
  const { mutate: updateTodo } = useUpdateTodo();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const openEditMode = () => {
    setIsEditMode(true);
  };

  const closeEditMode = () => {
    setIsEditMode(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const handleEditedTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditedContent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditedContent(e.target.value);
  };

  const handleEdit = () => {
    updateTodo({
      id,
      title: editedTitle,
      content: editedContent,
    });
    setIsEditMode(false);
  };

  const isEmpty = editedTitle === '' || editedContent === '';

  return (
    <div
      className={css`
        padding: 12px 24px;
        border-radius: 50px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin: 0 0 20px;
        height: 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      `}
    >
      {!isEditMode ? (
        <li
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 3px;
            `}
          >
            <Link to={`${id}`}>
              <h3
                className={css`
                  margin: 0;
                `}
              >
                {title}
              </h3>
            </Link>
            <p
              className={css`
                margin: 0;
              `}
            >
              {content}
            </p>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 5px;
            `}
          >
            <button type="button" onClick={openEditMode}>
              수정
            </button>
            <button type="button" onClick={() => deleteTodo({ id })}>
              삭제
            </button>
          </div>
        </li>
      ) : (
        <li
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 3px;
            `}
          >
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={handleEditedTitle}
                placeholder="제목"
              />
            </div>
            <div>
              <input
                type="text"
                value={editedContent}
                onChange={handleEditedContent}
                placeholder="내용"
                className={css`
                  min-width: 250px;
                `}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 5px;
            `}
          >
            <button type="button" disabled={isEmpty} onClick={handleEdit}>
              제출
            </button>
            <button type="button" onClick={closeEditMode}>
              취소
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default TodoItem;
