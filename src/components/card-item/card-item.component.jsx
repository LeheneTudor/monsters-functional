import "./card-item.styles.css";

const CardItem = (props) => {
  const { name, id, email } = props.monster;

  return (
    <div className="card-container" key={id}>
      <img alt={name} src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardItem;
