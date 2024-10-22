import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchFilm(this.state.search, this.state.type);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div
            className="input-field inline"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              placeholder="Найти"
              type="search"
              className="search-input"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              onClick={() => this.props.searchFilm(this.state.search, this.state.type)}
              className="search-btn"
            >
              Найти
            </button>
          </div>
          <label>
            <input className="with-gap" name="group3" type="radio" />
            <span>Фильм</span>
          </label>

          <label>
            <input className="with-gap" name="group3" type="radio" />
            <span>Сериал</span>
          </label>

          <label>
            <input className="with-gap" name="group3" type="radio" />
            <span>Показывать все</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
