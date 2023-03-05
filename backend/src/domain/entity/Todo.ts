type NewTodoArgs = {
  id: string;
  text: string;
};

export class Todo {
  public id: string;
  public text: string;

  constructor(args: NewTodoArgs) {
    this.id = args.id;
    this.text = args.text;
  }
}
