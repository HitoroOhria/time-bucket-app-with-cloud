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

const initTodos: Todo[] = [new Todo({ name: '海外旅行' }), new Todo({ name: '個人開発で1000万' })];

const Home: FC = () => {
  // todos の要素は TodoTableRow の onChange では更新されないことに注意
  // TodoTableRow の onSave で更新される
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const handleCreate = () => {
    setTodos([...todos, Todo.newEmpty()]);
  };

  const handleSave = (index: number, todo: Todo) => {
    setTodos([...todos].splice(index, 1, todo));
  };

  const handleDelete = (index: number) => {
    setTodos([...todos].splice(index, 1));
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
                    key={i}
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
