const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
},
deleteTodo = (todoId) => {
    return {
        type: 'DELETE_TODO',
        payload: todoId
    };
};


export default {addTodo, deleteTodo};