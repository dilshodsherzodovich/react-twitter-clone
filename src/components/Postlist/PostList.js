import PostListItem from "../PostListItem";
import "./PostList.css";

const PostList = ({ data, onDelete, onToggleImportant, onToggleLiked }) => {
  let elements = data.map((info) => {
    const { id, ...infoItem } = info;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          onToggleLiked={() => onToggleLiked(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onDelete={() => onDelete(id)}
          {...infoItem}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
