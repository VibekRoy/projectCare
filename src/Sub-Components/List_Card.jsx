/* eslint-disable react/prop-types */
import "./List_Card.css";

function List_Card({info}) {
  return <div className="list-card">
    <p className="h-1">{info.name}</p>
    <p className="h-2 desc">{info.description}</p>
    <p className="h-3">{info.status}</p>
  </div>;
}

export default List_Card;
