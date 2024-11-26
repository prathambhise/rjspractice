import propTypes from "prop-types";
function ListProp(props) {
  const items = props.items;

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

ListProp.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number,
      })
    ),
  };
  
  ListProp.defaultProps = {
    category: "category",
    items: [],
  };

export default ListProp;
