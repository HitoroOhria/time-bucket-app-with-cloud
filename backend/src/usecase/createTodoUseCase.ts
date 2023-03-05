import { Todo } from '../domain/entity/Todo';
import { TodoRepositoryInterface } from '../domain/repository/TodoRepositoryInterface';

type CreateTodoUseCaseDeps = {
  todoRepository: TodoRepositoryInterface;
};

type CreateTodoArgs = {
  id: string;
  text: string;
};

export class CreateTodoUseCase {
  private readonly todoRepository: TodoRepositoryInterface;

  constructor(deps: CreateTodoUseCaseDeps) {
    this.todoRepository = deps.todoRepository;
  }

  async exec(args: CreateTodoArgs): Promise<void> {
    const todo = new Todo({
      id: args.id,
      text: args.text,
    });

    await this.todoRepository.create(todo);

    return;
  }
}
