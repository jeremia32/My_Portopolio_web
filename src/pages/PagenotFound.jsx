import Navbarhome from "../components/Navbarhome"
import Footer from "../components/Footer"
function PagenotFound() {
  return (
    <>
    <Navbarhome />
    <div className="wrapper">
        <h3>OOPS....</h3>
        <p>Halaman yang anda tuju tidak di temukan....</p>
    </div>
    <Footer/>
    </>
  )
}

export default PagenotFound