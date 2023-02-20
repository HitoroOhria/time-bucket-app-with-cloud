import { FC, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Todo from './Todo';
import TodoTableRow from './TodoTableRow';
import { ulid } from 'ulid';

const initTodos: Todo[] = [
  new Todo({ id: ulid(), name: '海外旅行' }),
  new Todo({
    id: ulid(),
    name: '個人開発で1000万',
  }),
];

const Home: FC = () => {
  // todos の要素は TodoTableRow の onChange では更新されないことに注意
  // TodoTableRow の onSave で更新される
  const [todos, setTodos] = useState<Todo[]>(initTodos);

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
    <>
      <Card m={'20px'}>
        <CardHeader>
          <Heading size={'md'}>やりたいことリスト</Heading>
        </CardHeader>
        <CardBody>
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
                    <Button colorScheme={'blue'} variant={'outline'} onClick={handleCreate}>
                      新しいやりたいことを追加
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
};

export default Home;
