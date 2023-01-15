import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div className='pages'>
        <Route>
          <Route 
          path='/'
       //   element={ }
          />
        </Route>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
