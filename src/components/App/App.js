import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../Postlist";
import PostAddForm from "../PostAddForm/PostAddForm";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "I am goinh to learn React Js",
          important: false,
          like: false,
          id: 1,
        },
        {
          label: "What a work you are  doing here",
          important: false,
          like: false,
          id: 2,
        },
        {
          label: "I am going to learn TyoeScript also in nexr two montyhs",
          important: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };

    this.maxId = 4;
  }

  addItem = (label) => {
    const newItem = {
      label: label,
      important: false,
      like: false,
      id: this.maxId++,
    };

    const newArray = [...this.state.data, newItem];
    this.setState({ data: newArray });
  };

  onToggleImportant = (id) => {
    const { data } = this.state;
    const index = data.findIndex((item) => item.id === id);
    const oldItem = data[index];
    const newItem = { ...oldItem, important: !oldItem.important };

    const newArray = [
      ...data.slice(0, index),
      newItem,
      ...data.slice(index + 1),
    ];
    this.setState(({ data }) => {
      return { data: newArray };
    });
  };

  onToggleLiked = (id) => {
    const { data } = this.state;
    const index = data.findIndex((item) => item.id === id);
    const oldItem = data[index];
    const newItem = { ...oldItem, like: !oldItem.like };

    const newArray = [
      ...data.slice(0, index),
      newItem,
      ...data.slice(index + 1),
    ];
    this.setState(({ data }) => {
      return { data: newArray };
    });
  };

  searchPosts = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const visiblePosts = this.searchPosts(this.filterPost(data, filter), term);
    const likes = visiblePosts.filter((item) => item.like);
    const posts = visiblePosts.length;

    return (
      <div className="App">
        <AppHeader likes={likes.length} posts={posts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={this.state.filter}
            onUpdateFilter={this.onUpdateFilter}
          />
        </div>
        <PostList
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          data={visiblePosts}
          onDelete={(id) => {
            this.setState({ data: data.filter((item) => item.id !== id) });
          }}
        />
        <PostAddForm searchPosts={this.searchPosts} addItem={this.addItem} />
      </div>
    );
  }
}
