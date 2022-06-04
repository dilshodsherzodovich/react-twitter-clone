import "./AppHeader.css";

const AppHeader = ({ likes, posts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Dilshod Murodov</h1>
      <h2>
        {posts} posts, like {likes}
      </h2>
    </div>
  );
};

export default AppHeader;
