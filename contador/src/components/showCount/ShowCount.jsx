import "./ShowCount.css";

function ShowCount({ count }) {
  return <h1 className="count-title">You clicked here {count} times</h1>;
}

export default ShowCount;