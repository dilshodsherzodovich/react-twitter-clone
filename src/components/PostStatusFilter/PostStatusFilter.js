import React from "react";
class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttons = [
      { name: "all", label: "ALL" },
      { name: "like", label: "Liked" },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { onUpdateFilter, filter } = this.props;
      const active = filter === name;
      const className = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          onClick={() => {
            onUpdateFilter(name);
          }}
          key={name}
          type="button"
          className={`btn ${className}`}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
export default PostStatusFilter;
