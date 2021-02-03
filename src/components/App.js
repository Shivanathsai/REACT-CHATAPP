import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import "./App.css";

import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";

const App = ({ currentUser, currentChannel }) => {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <SidePanel
        key={currentUser && currentUser.uid}
        currentUser={currentUser}
      />

      <Grid.Column style={{ marginLeft: 350 }}>
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
        />
      </Grid.Column>
    </Grid>
  );
};

//mapping to state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
});

export default connect(mapStateToProps)(App);
