import { beforeEach } from 'vitest';
import { Todo } from '../../domain/entity/Todo';
import { deleteCollection, initTestFirestore } from '../../test/util/firestore';
import { collections, initFirestore } from '../firestore/firestore';
import { TodoRepository } from './TodoRepository';

describe('TodoRepository', () => {
  const db = initTestFirestore();
  const todoRepository = new TodoRepository(db);

  beforeEach(async () => {
    await deleteCollection(db, collections(db).todo.path);
  });

  describe('create', () => {
    test('should create todo', async () => {
      const todo = new Todo({
        id: '1',
        text: 'go oversea travel',
      });

      await todoRepository.create(todo);

      const snap = await collections(db).todo.doc(todo.id).get();
      const data = snap.data();

      expect(data).not.toBeUndefined();
      expect(snap.id).toBe('1');
      expect(data).toStrictEqual({
        text: 'go oversea travel',
      });
    });

    test('when same id is exists, should not create todo', async () => {
      const existTodo = new Todo({
        id: '1',
        text: 'go oversea travel',
      });

      await todoRepository.create(existTodo);

      const newTodo = new Todo({
        id: '1',
        text: 'gift for my parents',
      });

      await todoRepository.create(newTodo);
    });
  });
});
