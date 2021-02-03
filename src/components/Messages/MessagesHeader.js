import React from "react";
import { Header, Segment, Input } from "semantic-ui-react";

//class component for message header
class MessagesHeader extends React.Component {
  render() {
    const { channelName } = this.props;
    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>{channelName}</span>
          <Header.Subheader>2 users</Header.Subheader>
        </Header>

        {/* Channel Search Input */}
        <Header floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
