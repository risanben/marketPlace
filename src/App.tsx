import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import { Navbar } from "./cmps/navbar"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Store } from "./pages/store"

function App() {
    return (
        <>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </>
    )
}

export default App
