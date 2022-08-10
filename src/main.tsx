import { Suspense, lazy, StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

const ChunkOne = lazy(() => import("./ChunkOne"));
const ChunkTwo = lazy(() => import("./ChunkTwo"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="chunk-one" element={<ChunkOne />} />
          <Route path="chunk-two" element={<ChunkTwo />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
