import Features from "../components/Features";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import "../index.css";

const Root = () => {
  return (
    <>
      <Nav/>
      <main>
        <Hero />
        <Features />
      </main>
    </>
  )
}

export default Root;