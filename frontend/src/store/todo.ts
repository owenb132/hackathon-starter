import { TodoItem } from "../models/todo"
import { State as RootState } from "./index"

// State type
// this interface represents the schema for the Todo state
export type TodoState = TodoItem[]

// Actions
// these represent the redux actions that can be dispatched

export interface TodoCreated {
  type: "TODO_CREATED"
  payload: {
    todo: TodoItem
  }
}

export interface TodoCompleted {
  type: "TODO_COMPLETED"
  payload: {
    guid: string
  }
}

export interface TodoIncompleted {
  type: "TODO_INCOMPLETED"
  payload: {
    guid: string
  }
}

// TodoAction type
// this is a type which can refer to any of the action types defined above
// this is useful for the reducer
export type TodoAction = TodoCreated | TodoCompleted | TodoIncompleted

// Default state
// when the app initializes, this will be the default redux state
const defaultState: TodoState = []

// Reducer
const reducer = (state: TodoState = defaultState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "TODO_CREATED": {
      return [
        ...state,
        action.payload.todo,
      ]
    }
    case "TODO_COMPLETED": {
      return state.map(todo => {
        if (todo.guid === action.payload.guid) {
          return { ...todo, complete: true }
        } else {
          return todo
        }
      })
    }
    case "TODO_INCOMPLETED": {
      return state.map(todo => {
        if (todo.guid === action.payload.guid) {
          return { ...todo, complete: false }
        } else {
          return todo
        }
      })
    }
    default: {
      return state
    }
  }
}
export default reducer

// Actions
// these are dispatchable functions which update the redux state

export const createTodo = (todo: TodoItem): TodoCreated => {
  return { type: "TODO_CREATED", payload: {todo} }
}

export const completeTodo = (guid: string): TodoCompleted => {
  return { type: "TODO_COMPLETED", payload: {guid} }
}

export const incompleteTodo = (guid: string): TodoIncompleted => {
  return { type: "TODO_INCOMPLETED", payload: {guid} }
}

// Selectors
// these are functions to be used by useSelector in order to get data from redux

export const selectTodos = (state: RootState): TodoItem[] => state.todo ?? []
export const selectCompleteTodos = (state: RootState): TodoItem[] => state.todo.filter(item => item.complete) ?? []
export const selectIncompleteTodos = (state: RootState): TodoItem[] => state.todo.filter(item => !item.complete) ?? []
