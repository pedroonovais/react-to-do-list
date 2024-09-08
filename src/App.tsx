import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home"))
const LazyProfile = lazy(() => import("./pages/Profile/Profile"))
const LazyNewList = lazy(() => import("./pages/NewList/NewList"))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<>Carregando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome/>}/>
                    <Route path="/perfil" element={<LazyProfile/>}/>
                    <Route path="/nova-lista" element={<LazyNewList/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
