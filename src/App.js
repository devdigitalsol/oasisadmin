import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default App;
