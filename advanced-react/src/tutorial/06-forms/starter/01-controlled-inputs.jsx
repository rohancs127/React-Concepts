const ControlledInputs = () => {
  return (
    <section>
      <form className="form">
        <h1>Controlled inputs</h1>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className="form-input"/>
        </div>
      </form>
    </section>
  );
};
export default ControlledInputs;
