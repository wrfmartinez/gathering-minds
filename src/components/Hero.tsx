const Hero = () => {
  return (
    <section className="hero mx-auto max-w-7xl flex flex-col justify-center items-center gap-10 p-10 md:p-20 md:flex-row md:justify-around md:items-center">
      <div className="hero-text mt-20 md:w-[50%]">
        <h1 className="text-center md:text-start text-4xl font-bold mb-4">
          A place for the children of God to gather
        </h1>
        <p className="text-xl mt-10">
          We should never walk this journey of following Christ alone. Here at
          Gathering Minds we grow spiritually, share experiences, & connect with
          others that are dedicated to living out the teachings of Jesus.
        </p>
        <p className="text-center text-sm md:text-start font-semibold mt-10">"Let us be concerned for one another, to help one another to show love and to do good. Let us not give up the habit of meeting together, as some are doing. Instead, let us encourage one another all the more, since you see that the Day of the Lord is coming nearer."</p>
        <p className="text-center text-xs md:text-start font-semibold mt-4">Hebrews 10:24-25</p>
      </div>
      <img
        className="w-auto md:w-[50%] rounded-[50px] opacity-96"
        src="https://images.unsplash.com/photo-1564247556387-6e97f44aa0cd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </section>
  );
};

export default Hero;
