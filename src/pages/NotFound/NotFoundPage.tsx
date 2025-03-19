import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h2>Not Found Page</h2>
      <button>
        <Link to="/">go to Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
