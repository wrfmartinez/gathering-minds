const Features = () => {
  return (
    <section className="features mx-auto max-w-7xl p-10 md:p-20 flex flex-col gap-5 items-center text-center">
      <div className="mixed-text relative w-full mb-20 text-xl md:text-3xl font-bold">
        <p>Christ Centered</p>
        <p className="absolute top-10 right-50">Prayer Sessions</p>
        <p className="absolute top-10 left-40">Bible Study</p>
        <p className="absolute left-24 top-20">Community</p>
        <p className="absolute right-24 top-3">Mentorship</p>
      </div>
      <div className="features-desc">
        <div className="features-desc-subtext mb-10 mt-10">
          <h2 className="font-bold">Heading One</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas magnam impedit natus sint a dolores et porro nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis laudantium corrupti assumenda?</p>
        </div>
        <div className="features-desc-subtext">
          <h2 className="font-bold">Heading Two</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas magnam impedit natus sint a dolores et porro nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis laudantium corrupti assumenda?</p>
        </div>
      </div>
    </section>
  )
}

export default Features;