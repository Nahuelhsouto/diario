import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 800
  }
});

export function Top() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab
          icon={<PhoneIcon />}
          aria-label="phone"
          component={Link}
          to={"./"}
        />
        <Tab
          icon={<FavoriteIcon />}
          aria-label="favorite"
          component={Link}
          to={"./categories"}
        />
        <Tab
          icon={<PersonPinIcon />}
          aria-label="person"
          component={Link}
          to={"./weather"}
        />
      </Tabs>
    </Paper>
  );
}
