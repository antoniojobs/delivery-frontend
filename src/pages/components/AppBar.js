import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBarBuntton: {
    color: "#FFFFFF",
    fontSize: "13px",
    background: "#d34836",
    height: "inherit",
    borderRight: "solid 1px #ff9375",
  },
  AppBarBrand: {
    overflowY: "overlay",
    color: "#FFFFFF",
    fontSize: "30px",
    // background: "#d34836",
    height: "100vh",
    fontFamily:'roboto',
    // textTransform: "uppercase"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.AppBarBrand} to="/">
              Brandescacinu
            </Link>
          </Typography>

          <Link to="/">
            <Button className={classes.AppBarBuntton}>Lista de entregas</Button>
          </Link>
          <Link to="/cadastro">
            <Button className={classes.AppBarBuntton}>
              Cadastro de entregas
            </Button>
          </Link>
          <Link to="/mapa">
            <Button className={classes.AppBarBuntton}>Mapa</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
