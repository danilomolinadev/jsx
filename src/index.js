//1. - Import the React and ReactDom libraries
	import React from 'react';
    import ReactDOM from 'react-dom/client';

//2. - get a reference to the div with the ID root
	const el = document.getElementById('root');

//3. - Tell React to take control of that element
const root = ReactDOM.createRoot(el);

function addtime(){
    const date = new Date();
    const time = date.toLocaleTimeString();
    return time;
}

//4 Create a component (return jsx)
    function App(){ 
        let message = 'Bye there!'
        if(Math.random() > 0.5){
            message = 'hello There!';
        }

        const valueInput = "5";


        return (
            <div>
                <h4>{message}</h4>
                <h1>{addtime()}</h1>
                <input type='number' min={valueInput} style={{ border: '4px solid red'}} spellCheck={false} placeholder="hi there"  />
                
            </div>
        )
    };

//5. - Show component on the screen
	root.render(<App />);  // passing jsx element

