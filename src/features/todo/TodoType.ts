export interface ITodo {
  id: string;
  title: string;
  completed: boolean | undefined;
}

export interface TodoState {
  todos: ITodo[];
}

export type RemoveAndToggle = { payload: { id: string } };

export interface TodoItemProps {
  setTodoInput: (input: string) => void;
  setIsTodoEditable: (editable: boolean) => void;
  setId: (id: string) => void;
}
