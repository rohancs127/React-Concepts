const ErrorExample = () => {
  let count=0;
  const incrementCount=()=>{
    count++;
  }
  return (
    <section>
    <h2>useState error example</h2>
    <div>{count}</div>
    <button className="btn" onClick={incrementCount}>Add</button>
    </section>
  );
};

export default ErrorExample;
