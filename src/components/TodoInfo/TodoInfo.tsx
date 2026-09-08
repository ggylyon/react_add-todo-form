import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }: { todo: TodoMerged }) => {
  return (
    <article
      data-id={todo.id}
      className={classNames(
        'TodoInfo',
        todo.completed && 'TodoInfo--completed',
      )}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
