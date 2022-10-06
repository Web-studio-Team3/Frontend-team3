import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>main</>} />
        <Route path="/account" element={<>acc</>} />
        <Route path="/market" element={<>market</>} />
        <Route path="/market-item" element={<>market-item</>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
