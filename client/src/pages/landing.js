import Footer from "../components/landing_page/footer";
import Top from "../components/landing_page/top";
//import RoofSvg from "../components/landing_page/assets/roof.svg";

function Home() {
  return (
    <div className="Landing-page">
        <Top />
        <div className="content">
            <section className="Top-section">
                <img src="/roof.png"  alt="roof"/>
            <p>Landing page Here</p>
            </section>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
