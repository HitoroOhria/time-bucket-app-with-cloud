import Todo from './Todo';
import { ChangeEvent, FC, useState } from 'react';
import { Button, IconButton, Input, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

type TodoTableRowProps = {
  index: number;
  todo: Todo;
  autoFocus?: boolean;
  handleSave: (index: number, todo: Todo) => void;
  handleDelete: (index: number) => void;
};

const TodoTableRow: FC<TodoTableRowProps> = (props) => {
  const [todo, setTodo] = useState<Todo>(props.todo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodo = new Todo({ ...props.todo, name: e.target.value });
    setTodo(newTodo);
  };

  const handleBlur = () => {
    if (todo.isEmpty()) {
      return props.handleDelete(props.index);
    }

    props.handleSave(props.index, todo);
  };

  const handleSave = () => {
    props.handleSave(props.index, todo);
  };

  const handleDelete = () => {
    props.handleDelete(props.index);
  };

  return (
    <Tr key={props.todo.id}>
      <Td>
        <Input
          variant={'filled'}
          value={todo.name}
          onChange={handleChange}
          autoFocus={props.autoFocus}
          onBlur={handleBlur}
        />
      </Td>
      <Td width={'10%'}>
        <IconButton
          aria-label={'Delete todo'}
          colorScheme={'red'}
          icon={<DeleteIcon />}
          onClick={handleDelete}
        />
      </Td>
    </Tr>
  );
};

export default TodoTableRow;
