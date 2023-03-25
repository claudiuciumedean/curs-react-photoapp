import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Photo App</h1>
      <Outlet />
    </>
  );
}

export default App;
