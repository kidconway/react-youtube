import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div>
        <div className="search-bar ui-segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor="search">Video Search</label>
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={e => this.setState({ query: e.target.value })}
                  value={this.state.query}
                />
                <i className="search icon"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
