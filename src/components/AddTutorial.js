import React, { useRef } from "react";

const AddTutorial = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={formSubmit} className="form m-2 p-2">
        <label className="form-label ">Title</label>
        <input
          ref={titleRef}
          className="form-control"
          type="text"
          placeholder="tittle"
        />
        <label className="form-label ">Description</label>
        <input
          ref={descRef}
          className="form-control"
          type="text"
          placeholder="tittle"
        />

        <button type="submit" className="btn btn-primary  mt-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
