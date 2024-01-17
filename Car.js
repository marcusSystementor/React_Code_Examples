import "./CarStyle.css";

const Car = (props) => {
  return (
    <div>
      <p>{props.brand} - </p>
      <p>{props.description}</p>
    </div>
  );
};

export default Car;
