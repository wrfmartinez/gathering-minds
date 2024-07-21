const Hero = () => {
  return (
    <section className="hero mx-auto max-w-7xl flex flex-col justify-center items-center gap-10 p-10 md:p-20 md:flex-row md:justify-around md:items-center">
      <div className="hero-text md:w-[50%]">
        <h1 className="text-3xl font-bold mb-4">A place to gather with believers and grow in faith</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis. Aspernatur inventore eius in. Excepturi corporis illo voluptas et itaque inventore possimus laboriosam enim id pariatur est totam, nisi ducimus?</p>
      </div>
      <img className="w-[420px] md:w-[50%] rounded-[50px] opacity-96" src="https://images.unsplash.com/photo-1564247556387-6e97f44aa0cd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </section>
  )
}

export default Hero;