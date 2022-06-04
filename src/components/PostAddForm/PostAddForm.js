import React from "react";
import "./PostAddForm.css";

// const PostAddForm = () => {
//   return (
//     <form className="bottom-panel d-flex justify-content-between">
//       <input
//         type="text"
//         placeholder="what are you thinking about"
//         className="form-control new-post-label"
//       />
//       <button
//         type="submit"
//         className="btn btn-outline-secondary"
//       >
//         Add posts
//       </button>
//     </form>
//   );
// };
// export default PostAddForm;

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: "",
    };
  }
  render() {
    const { addItem } = this.props;
    return (
      <div className="bottom-panel d-flex justify-content-between">
        <input
          type="text"
          onChange={(e) => {
            this.setState({ plan: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              addItem(this.state.plan);
              this.setState({ plan: "" });
            }
          }}
          value={this.state.plan}
          placeholder="what are you thinking about"
          className="form-control new-post-label"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(this.state.plan);
            this.setState({ plan: "" });
          }}
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add posts
        </button>
      </div>
    );
  }
}
