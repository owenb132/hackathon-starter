import React from "react"
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
  menuButton: {
    marginRight: "1rem",
  },
})

const Navbar = (): JSX.Element => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          My Cool App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
