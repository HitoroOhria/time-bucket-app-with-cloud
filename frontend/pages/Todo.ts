type NewTodoArgs = {
  name: string;
};

class Todo {
  public name: string;

  constructor(args: NewTodoArgs) {
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
