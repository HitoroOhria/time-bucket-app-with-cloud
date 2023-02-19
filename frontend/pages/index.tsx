import { FC } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

type Todo = {
  name: string;
};

const todos: Todo[] = [{ name: '海外旅行' }, { name: '東京でデート' }];

const Home: FC = () => {
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
                {todos.map((todo) => (
                  <Tr key={todo.name}>
                    <Td>{todo.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
};

export default Home;
