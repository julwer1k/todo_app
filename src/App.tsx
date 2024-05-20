/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import * as todosService from './api/todos';
import { ErrorNotification } from './components/ErrorNotification';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useTodos } from './lib/TodosContext';
import { UserWarning } from './UserWarning';

export const App: React.FC = () => {
  const { todos, isHeaderFocused } = useTodos();

  if (!todosService.USER_ID) {
    return <UserWarning />;
  }

  return (
    <div className="todoapp">
      <h1
        className={classNames('todoapp__title', {
          'todoapp__title--focused': isHeaderFocused,
        })}
      >
        todos
      </h1>

      <div className="todoapp__content">
        <Header />

        <TodoList />

        {!!todos.length && <Footer />}
      </div>

      <ErrorNotification />
    </div>
  );
};
