import Form from "/src/form/Form";

function Menu() {
  return (
    <>
      <div className="body-background">
        <div className="card">
          <a href="/">Add Employee</a>
          <Form/>
        </div>
      </div>
    </>
  );
}

export default Menu;
