import { Component } from "react";
import React from "react";
import { List } from "../component/List";
import { Preloader } from "../component/Preloader";
import { Search } from "../component/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    list: [],
    loading: true,
  };

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=46e3e245&s=Sword Art Online`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ list: data.Search, loading: false }));
  }

  searchFilm = (str) => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=46e3e245&s=${str}`)
      .then((res) => res.json())
      .then((data) => this.setState({ list: data.Search, loading: false }));
  };

  render() {
    const { list, loading } = this.state;

    return (
      <main className="content">
        <Search searchFilm={this.searchFilm} />
        {loading.length ? <Preloader /> : <List list={this.state.list} />}
      </main>
    );
  }
}

export { Main };
