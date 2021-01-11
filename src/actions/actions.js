export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "DELETE_TODO";


export const addTodo = todo => ({type: ADD_TODO, payload: todo});

export const deleteTodo = todoId => ({type: DELETE_TODO, payload: todoId});

export const updateTodo = todo => ({type: UPDATE_TODO, payload: todo});