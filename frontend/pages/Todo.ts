import { ulid } from 'ulid';

type NewTodoArgs = {
  id: string;
  name: string;
};

class Todo {
  public id: string;
  public name: string;

  constructor(args: NewTodoArgs) {
    this.id = args.id;
    this.name = args.name;
  }

  static newEmpty(): Todo {
    return new Todo({ id: ulid(), name: '' });
  }

  public isEmpty(): boolean {
    return this.name === '';
  }
}

export default Todo;
