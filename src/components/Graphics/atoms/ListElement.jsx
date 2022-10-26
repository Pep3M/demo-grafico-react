const ListElement = ({ title, elements, value, callback }) => {
  const handlerChange = (event) => {
    callback(event.target.value);
  };

  return (
    <div
      style={{
        display: "inherit",
        alignItems: "center",
      }}
    >
      {elements ? (
        <>
          <p style={{ marginRight: 5 }}>{title}</p>
          <select
            id={title}
            name={title}
            onChange={handlerChange}
            value={value}
          >
            {elements.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListElement;
