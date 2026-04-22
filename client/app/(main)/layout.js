import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function MainLauout ({children}) {
    return (
        <>
    <Navbar />
    {children}
    <Footer />
    </>
    )
}

