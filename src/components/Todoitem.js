import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../actions/actions";

function TodoItem({todo}) {
	const [editable, setEditable] = useState(false)
	const [name, setName] = useState(todo.name)

	let dispatch = useDispatch();
	return (
		<>
			<div className="row mx-2 align-items-center">
				<div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
				<div className="col">
					{editable ? <input
							type="text"
							className="form-control"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/> :
						<h4>{todo.name}</h4>}
				</div>
				<button
					onClick={() => {
						dispatch(updateTodo(
							{
								...todo,
								name: name
							}
						))
						if (editable) {
							setName(todo.name);
						}
						setEditable(!editable);
					}}
					className="btn btn-primary m-2">{editable ? "Обновить" : "Изменить"}
				</button>

				<button
					onClick={() => dispatch(deleteTodo(todo.id))}
					className="btn btn-danger m-2">Удалить
				</button>
			</div>
		</>
	)
}

export default TodoItem