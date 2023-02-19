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
                <Tr>
                  <Td>海外旅行</Td>
                </Tr>
                <Tr>
                  <Td>東京でデート</Td>
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
