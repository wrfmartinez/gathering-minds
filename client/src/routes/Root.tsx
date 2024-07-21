import Hero from "../components/Hero";
import Nav from "../components/Nav";
import "../index.css";

const Root = () => {
  return (
    <>
      <Nav/>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Root;