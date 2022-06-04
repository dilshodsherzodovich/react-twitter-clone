import React from "react";
import "./PostListItem.css";

export default function PostListItem(props) {
  const { label, onDelete, onToggleImportant, onToggleLiked, important, like } =
    props;
  let classNames = "app-list-item d-flex justify-content-between";
  if (important) {
    classNames += " important";
  }

  if (like) {
    classNames += " like";
  }

  return (
    <div className="PostListItem">
      <div className={classNames}>
        <span onClick={onToggleLiked} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleImportant}
            type="button"
            className="btn btn-star btn-sm"
          >
            <i className="fa fa-star "></i>
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-trash btn-sm"
          >
            <i className="fa fa-trash"></i>
          </button>
          <i className="heart-icon fa fa-heart"></i>
        </div>
      </div>
    </div>
  );
}
