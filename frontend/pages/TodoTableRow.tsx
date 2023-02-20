import Todo from './Todo';
import { ChangeEvent, FC, useState } from 'react';
import { Button, Input, Td, Tr } from '@chakra-ui/react';

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
    <Tr key={props.todo.name}>
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
        <Button colorScheme={'blue'} onClick={handleSave}>
          保存
        </Button>
      </Td>
      <Td width={'10%'}>
        <Button colorScheme={'red'} onClick={handleDelete}>
          削除
        </Button>
      </Td>
    </Tr>
  );
};

export default TodoTableRow;
