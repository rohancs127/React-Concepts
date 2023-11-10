import ReactDOM from 'react-dom/client';

const Greetings = ()=>{
    return (<div><h1>Hello World! This is my First Component</h1>
    <h2>I'm learning react</h2>
    <input placeholder='demo'/>
    <Component/>
    </div>)
}

const Component = ()=> {
    return <h3>This is an external component</h3>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greetings/>)