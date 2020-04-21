export default function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload.user
            };

        case 'LOGOUT_USER':
            return {
                ...state,
                user: null
            };

        case 'GET_LISTS':
            return {
                ...state,
                lists: action.payload.lists
            };

        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            };

        case 'GET_LIST_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            }

        case 'CREATE_TODO':
            return {
                ...state,
                todos: state.todos.push(action.payload.todo)
            }

        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.todo.id) {
                        return {
                            ...todo,
                            ...action.payload.todo
                        }
                    }

                    return todo
                })
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo !== action.payload.todoId)
            }

        default:
            return state;
    }
}