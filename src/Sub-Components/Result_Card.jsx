import "./Result_Card.css";

// eslint-disable-next-line react/prop-types
function Result_Card({ lab_res }) {
  return (
    <div className="result_card">
      <p>{lab_res}</p>
      <img src=" download.svg" alt="" width={"20px"} />
    </div>
  );
}

export default Result_Card;
