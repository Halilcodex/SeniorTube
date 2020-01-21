import React from "react";

class SearchCard extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onVideoSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid action input">
            <input
              onChange={e => this.setState({ searchTerm: e.target.value })}
              type="text"
              value={this.state.searchTerm}
              placeholder="Search..."
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchCard;
