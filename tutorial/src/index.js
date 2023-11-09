import ReactDOM from 'react-dom/client';

const Greetings = ()=>{
    return <h1>Hello World! This is my First Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greetings/>)