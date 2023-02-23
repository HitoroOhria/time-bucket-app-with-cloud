import React, { FC } from 'react';
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import Todo from './Todo';
import TodoTable from './TodoTable';

const initTodos: Todo[] = [new Todo({ name: '海外旅行' }), new Todo({ name: '個人開発で1000万' })];

const Home: FC = () => {
  return (
    <>
      <Card m={'20px'}>
        <CardHeader>
          <Heading size={'md'}>やりたいことリスト</Heading>
        </CardHeader>
        <CardBody>
          <TodoTable todos={initTodos} />
        </CardBody>
      </Card>
    </>
  );
};

export default Home;
