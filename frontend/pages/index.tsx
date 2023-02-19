import { FC } from 'react';
import { Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

const Home: FC = () => {
  return (
    <>
      <Heading>やりたいことリスト</Heading>
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
    </>
  );
};

export default Home;
