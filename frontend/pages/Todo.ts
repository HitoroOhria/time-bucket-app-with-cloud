import { ulid } from 'ulid';

type NewTodoArgs = {
  name: string;
};

class Todo {
  public id: string;
  public name: string;

  constructor(args: NewTodoArgs) {
    this.id = ulid();
    this.name = args.name;
  }

  static newEmpty(): Todo {
    return new Todo({ name: '' });
  }

  public isEmpty(): boolean {
    return this.name === '';
  }
}

export default Todo;
