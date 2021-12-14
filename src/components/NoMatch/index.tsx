import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h2>404 - Тут нічого немає</h2>
      <p>
        <Link to="/">Наголовну</Link>
      </p>
    </>
  );
};

export default NoMatch;