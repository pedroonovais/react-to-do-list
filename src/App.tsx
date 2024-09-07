import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home"))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<>Carregando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
