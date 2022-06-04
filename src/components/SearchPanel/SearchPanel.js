import "./SearchPanel.css";
import React from "react";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  UpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.term}
        onChange={this.UpdateSearch}
        className="form-control search-input"
        placeholder="Search by Posts"
      />
    );
  }
}
