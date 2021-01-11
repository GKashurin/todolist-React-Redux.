import {
	ADD_TODO,
	DELETE_TODO,
	UPDATE_TODO
} from "../actions/actions"
import {todos} from "../initialState";

export const reducer = (state = todos, action) => {
	let newTodos;
	switch (action.type) {
		case ADD_TODO:
			newTodos = [...state];
			newTodos = newTodos.push(action.payload)
			return newTodos

		case DELETE_TODO:
			newTodos = [...state];
			// eslint-disable-next-line eqeqeq
			newTodos = newTodos.filter(function (todo) { // newTodos = newTodos.filter(todo => todo.id !== action.payload)
				return todo.id !== action.payload
			})
			return newTodos

		case UPDATE_TODO: {
			return {}
		}
		default:
			return state
	}
}

// Мы вызываем метод filter() на массиве newTodos(является копией стейта), состоящим из объектов и передаём функцию, которая отрабатывает на каждом элементе этого массива. Внутри функции мы проверяем значение id. Если id элемента не совпадает с тем, по которому кликнул пользователь, то элемент остается в новом массиве. Метод filter(), работая с финальным массивом, включит в него только элементы, на котором отработала функция и который подошел по всем условиям, выдав true.