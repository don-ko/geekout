import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Donations from "../components/Donations";
import MastHead from "../components/MastHead";

/**
 *  @description
 *  This is the root (or index) page of our application.
 *
 *  @summary
 *  From the folder structure (being the index page), you can access this page via ---> http://localhost:3000/
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function Home() {
  return (
    <div>
      <MastHead/>
      <Navbar />
      <section>
        <div className="container">
          <h1>Welcome to Here</h1>
          <p>
            Hello World!
          </p>
        </div>
      </section>
      <Donations />
      <Footer />
    </div>
  );
}

export default Home;
