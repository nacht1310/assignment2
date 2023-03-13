import { RouterProvider } from 'react-router-dom';
import { route } from './route';
import { RecoilRoot } from 'recoil';
function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <RouterProvider router={route} />
      </RecoilRoot>
    </div>
  );
}

export default App;
