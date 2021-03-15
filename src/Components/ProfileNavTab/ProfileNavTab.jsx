import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router";
function ProfileNavTab(props) {
  const tabNameToIndex = {
    view: 0,
    profilesetting: 1,
    yourblogs: 2,
    manageblogs: 3,
  };
  const indexToTabName = {
    0: "view",
    1: "profilesetting",
    2: "yourblogs",
    3: "manageblogs",
  };
  const { match } = props;
  const { params } = match;
  const { uid } = params;
  const [value, setValue] = React.useState(tabNameToIndex[uid]);
  const handleChange = (event, newValue) => {
    props.history.push(`/profile/${indexToTabName[newValue]}`)
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="View Profile" />
      <Tab label="Profile Setting" />
      <Tab label="Your Blogs" />
      <Tab label="Manage Blogs" />
    </Tabs>
  );
}

export default withRouter(ProfileNavTab);
