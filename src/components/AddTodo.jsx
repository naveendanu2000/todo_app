const AddTodo = () => {
  return (
    <div className="row p-3 my-3 mx-5 rounded-4 border add-todo shadow">
      <input
        className="col-9 text-center border-0"
        type="text"
        id="message"
        placeholder="Enter Todo Item"
      />
      <div className="col-2 align-content-center text-center">
        <input type="checkbox" className="mx-2" id="imp" />
        <label for="imp">Important</label>
      </div>
      <div className="col-1 text-center align-content-center">
        <button role="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
