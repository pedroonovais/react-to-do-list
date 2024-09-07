import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home"))
const LazyProfile = lazy(() => import("./pages/Profile/Profile"))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<>Carregando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome/>}/>
                    <Route path="/perfil" element={<LazyProfile/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
