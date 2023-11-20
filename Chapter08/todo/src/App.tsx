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
	const [term, setTerm] = useState("");

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

	const handleSearch = () => {
		setTerm(task);
	};

	const filteredTodoList = useMemo(
		() =>
			todoList.filter((todo: Todo) => {
				console.log("Filtering...");
				return todo.task.toLowerCase().includes(term.toLowerCase());
			}),
		[term, todoList]
	);

	return (
		<>
			<input
				type="text"
				value={task}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
			/>
			<button onClick={handleCreate}>Create</button>
			<button onClick={handleSearch}>Search</button>
			<List todoList={todoList} />
		</>
	);
};

export default App;
