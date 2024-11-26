import ListSimple from "./list_simple/ListSimple.jsx";
import ListProp from "./list_prop/ListProp.jsx";
import "./Lists.module.css";

function Lists() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 3, name: "carrots", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "broccoli", calories: 50 },
  ];

  const trees = []
  const animals = []

  return (
    <>
      <ListSimple />
      {fruits.length > 0 && <ListProp items={fruits} category="Fruits" />}
      {vegetables.length > 0 ? (<ListProp items={vegetables} category="Vegetables" />) : null}
      {trees.length > 0 && <ListProp items={trees} category="trees" />}
      <ListProp />
    </>
  );
}

export default Lists;
