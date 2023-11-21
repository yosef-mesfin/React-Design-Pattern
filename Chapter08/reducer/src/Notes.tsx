import { useState, useReducer, ChangeEvent, FormEvent } from "react";

type Note = {
	id: number;
	note: string;
};

type Action = {
	type: string;
	payload?: any;
};

type ActionTypes = {
	ADD: "ADD";
	DELETE: "DELETE";
	UPDATE: "UPDATE";
};

const actionType: ActionTypes = {
	ADD: "ADD",
	DELETE: "DELETE",
	UPDATE: "UPDATE",
};

const initialState: Note[] = [
	{
		id: 1,
		note: "This is a note",
	},
	{
		id: 2,
		note: "This is another note",
	},
	{
		id: 3,
		note: "This is a third note",
	},
];

const reducer = (state: Note[], action: Action) => {
	switch (action.type) {
		case actionType.ADD:
			return [...state, action.payload];

		case actionType.DELETE:
			return state.filter((note) => note.id !== action.payload);

		case actionType.UPDATE:
			return state.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}
				return note;
			});
		default:
			return state;
	}
};

const Notes = () => {
	const [notes, dispatch] = useReducer(reducer, initialState);
	const [note, setNote] = useState<string>("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newNote: Note = {
			id: Date.now(),
			note: note,
		};
		dispatch({ type: actionType.ADD, payload: newNote });
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	};

	return (
		<div>
			<h2>Notes</h2>
			<ul>
				{notes.map((n: Note) => (
					<li key={n.id}>
						{n.note}{" "}
						<button
							onClick={() =>
								dispatch({ type: actionType.DELETE, payload: n.id })
							}
						>
							Delete
						</button>
						<button
							onClick={() =>
								dispatch({
									type: actionType.UPDATE,
									payload: { ...n, note },
								})
							}
						>
							Update
						</button>
					</li>
				))}
			</ul>

			<form onSubmit={handleSubmit}>
				<input
					placeholder="New Note"
					value={note}
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
};

export default Notes;
