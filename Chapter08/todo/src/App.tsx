import {
	useState,
	useEffect,
	FC,
	useCallback,
	useMemo,
	ChangeEvent,
} from "react";

import List, { Todo } from "./List";

const initialTodos: Todo[] = [
	{ id: 1, task: "Learn React" },
	{ id: 2, task: "Learn TypeScript" },
];

const App: FC = () => {
	const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
	const [task, setTask] = useState<string>("");

	useEffect(() => {
		console.log("Rendering <App />");
	});

	const handleCreate = () => {
		const newTodo = {
			id: Date.now(),
			task,
		};

		//pushing the new todos to the list
		setTodoList([...todoList, newTodo]);

		//resetting the task
		setTask("");
	};
	return (
		<>
			<input
				type="text"
				value={task}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
			/>
			<button onClick={handleCreate}>Create</button>
			<List todoList={todoList} />
		</>
	);
};

export default App;
