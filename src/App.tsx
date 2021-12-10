import { useEffect } from "react";
import halfmoon from "halfmoon";
import { Route, Routes } from "react-router";
import Auth from "./pages/auth/auth";
import Dash from "./pages/dash";

const App = () => {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  });

  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
