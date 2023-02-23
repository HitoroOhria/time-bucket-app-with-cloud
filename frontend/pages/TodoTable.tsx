import { FC, useState } from 'react';
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TodoTableRow from './TodoTableRow';
import Todo from './Todo';

type TodoTableProps = {
  todos: Todo[];
};

const TodoTable: FC<TodoTableProps> = (props) => {
  // todos の要素は TodoTableRow の onChange では更新されないことに注意
  // TodoTableRow の onSave で更新される
  const [todos, setTodos] = useState<Todo[]>(props.todos);

  const handleCreate = () => {
    setTodos([...todos, Todo.newEmpty()]);
  };

  const handleSave = (index: number, todo: Todo) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, todo);

    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <TableContainer>
      <Table variant={'simple'}>
        <Thead>
          <Tr>
            <Th>やりたいこと</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo, i) => (
            <TodoTableRow
              key={todo.id}
              index={i}
              todo={todo}
              autoFocus={todo.isEmpty()}
              handleSave={handleSave}
              handleDelete={handleDelete}
            />
          ))}
          <Tr>
            <Td>
              <Button
                colorScheme={'blue'}
                variant={'outline'}
                leftIcon={<AddIcon />}
                onClick={handleCreate}
              >
                新しいやりたいことを追加
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TodoTable;
