import Footer from "../components/landing_page/footer";
import Top from "../components/landing_page/top";
import { ReactComponent as CircleShape } from "../components/landing_page/assets/Circle.svg";
//import RoofSvg from "../components/landing_page/assets/roof.svg";client/src/components/landing_page/assets/Circle.svg

function Home() {
  return (
    <div className="Landing-page">
        <Top />
        <div className="content">
            <section className="Top-section">
                <div className="Shapes">
                    <CircleShape className="Circle"/>
                </div>
                <div className="container">
                    <div className="Left">
                        <div className="Roof">
                            <img src="/roof.png"  alt="roof"/>
                        </div>
                        <div className="Text">
                            <div className="Heading">
                                <h1>Home of your best music</h1>
                            </div>
                            <div className="Body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Right">
                    <div className="Fun-img">
                        <img src="/music1.jpg" alt="" />
                    </div>
                </div>
                </div>
            </section>
            <section className="Middle-section">
                <div className="Relax-img">
                    <img src="/music2.png" alt="" />
                </div>
                <div className="Text">
                    <div className="Heading">
                        <h1>All Your Best Music</h1>
                    </div>
                    <div className="Body">
                        <p>Find all your best music in one place. Find new music , classic music, live streams, album premieres, live studio sessions and interviews.</p>
                    </div>
                </div>
            </section>
            <section className="Bottom-section">
            <p>Landing page Here</p>
            </section>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
