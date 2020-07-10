import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import ClearIcon from "@material-ui/icons/Clear"

import { TodoItem } from "../models/todo"
import {
  completeTodo,
  createTodo,
  fetchTodos,
  selectCompleteTodos,
  selectIncompleteTodos,
  uncompleteTodo,
} from "../store/todo"

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  column: {
    flex: 10,
    display: "flex",
    flexDirection: "column",
    maxWidth: "64rem",
  },
  header: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filler: {
    flex: 1,
  },
  caption: {
    textAlign: "center",
    marginTop: "1rem",
  },
  todoItem: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    alignItems: "center",
  },
  completedTodo: {
    textDecoration: "line-through",
  },
})

const TodoPage = (): JSX.Element => {
  const dispatch = useDispatch()

  const completeTodos = useSelector(selectCompleteTodos)
  const incompleteTodos = useSelector(selectIncompleteTodos)
  
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  
  const addTodo = (): void => {
    dispatch(createTodo({
      label: `Todo ${[...completeTodos, ...incompleteTodos].length}`,
    }))
  }

  const checkTodo = (todo: TodoItem): void => {
    if (!todo._id) {
      return
    }
    dispatch(completeTodo(todo._id))
  }

  const uncheckTodo = (todo: TodoItem): void => {
    if (!todo._id) {
      return
    }
    dispatch(uncompleteTodo(todo._id))
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.filler}></div>
      <div className={classes.column}>
        <div className={classes.header}>
          <Typography component="h6" variant="h4">Todo Items</Typography>
          <Button color="primary" onClick={addTodo}>Create Todo</Button>
        </div>
        {/* if there are no todos, show a message */}
        {incompleteTodos.length <= 0 && (
          <Typography className={classes.caption} component="p" variant="body1">You're all caught up :)</Typography>
        )}
        {incompleteTodos.length > 0 && incompleteTodos.map(todo => (
          <div className={classes.todoItem}>
            <IconButton color="inherit" onClick={() => checkTodo(todo)}>
              <CheckIcon />
            </IconButton>
            <span>{todo.label}</span>
          </div>
        ))}

        {/* complete items */}
        {completeTodos.length > 0 && (
          <>
            <div className={classes.header}>
              <Typography component="h6" variant="h4">Completed Items</Typography>
            </div>
            {completeTodos.map(todo => (
              <div key={todo._id} className={classes.todoItem}>
                <IconButton color="inherit" onClick={() => uncheckTodo(todo)}>
                  <ClearIcon />
                </IconButton>
                <span>{todo.label}</span>
              </div>      
            ))}
          </>
        )}
      </div>
      <div className={classes.filler}></div>
    </div>
  )
}
export default TodoPage
