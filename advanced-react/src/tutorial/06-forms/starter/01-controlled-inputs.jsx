const ControlledInputs = () => {
  return (
    <section>
      <form className="form">
        <h1>Controlled inputs</h1>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className="form-input"/>
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" className="form-input"/>
        </div>

          <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
};
export default ControlledInputs;
