function ListGroup() {
  const item = ["INDIA", "US", "UK", "PAKISTAN", "THANE"];

  item.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      {item.length === 0 && <p>Not found items</p>}
      <ul className="list-group">
        {item.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
