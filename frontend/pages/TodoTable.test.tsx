import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import TodoTable from './TodoTable';
import userEvent from '@testing-library/user-event';

describe('sample test', () => {
  test('should pass', () => {
    expect(1).toBe(1);
  });
});

describe('TodoTable', () => {
  const initTodos: Todo[] = [
    new Todo({ name: '海外旅行' }),
    new Todo({ name: '個人開発で1000万' }),
  ];

  test('render', () => {
    render(<TodoTable todos={initTodos} />);

    expect(screen.getByText('やりたいこと')).toBeInTheDocument();
  });

  describe('Add todo', () => {
    test('When click add button, new todo added', async () => {
      const user = userEvent.setup();
      render(<TodoTable todos={initTodos} />);

      expect(screen.getAllByRole('textbox')).toHaveLength(2);

      await user.click(screen.getByText('新しいやりたいことを追加'));

      expect(screen.getAllByRole('textbox')).toHaveLength(3);
    });

    test('When click add button and type keywords, input filled by keywords', async () => {
      const user = userEvent.setup();
      render(<TodoTable todos={initTodos} />);

      expect(screen.getAllByRole('textbox')).toHaveLength(2);

      await user.click(screen.getByText('新しいやりたいことを追加'));

      expect(screen.getAllByRole('textbox')).toHaveLength(3);

      await user.type(screen.getAllByRole('textbox')[2], 'プログラミングの勉強');

      expect(screen.getAllByRole('textbox')[2]).toHaveValue('プログラミングの勉強');
    });

    test('When click add button and blur, added new todo deleted', async () => {
      const user = userEvent.setup();
      render(<TodoTable todos={initTodos} />);

      expect(screen.getAllByRole('textbox')).toHaveLength(2);

      await user.click(screen.getByText('新しいやりたいことを追加'));

      expect(screen.getAllByRole('textbox')).toHaveLength(3);

      // blur from input
      await user.keyboard('{Tab}');

      expect(screen.getAllByRole('textbox')).toHaveLength(2);
    });
  });
});
