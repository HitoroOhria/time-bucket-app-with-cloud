import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Spacer,
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
          <Flex>
            <Heading size={'md'}>やりたいことリスト</Heading>
            <Spacer />
            {/* TODO テーブルの下に追加するボタンを配置する */}
            <Button colorScheme={'blue'}>追加</Button>
          </Flex>
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
                    <Td>{todo.name} </Td>
                    <Td width={'10%'}>
                      <Button colorScheme={'green'}>編集</Button>
                    </Td>
                    <Td width={'10%'}>
                      <Button colorScheme={'red'}>削除</Button>
                    </Td>
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
