import stoneTabletDrawing from "../assets/stone-tablet-drawing.svg";

const Features = () => {
  return (
    <section className="features relative w-full p-10 md:p-0 flex flex-col gap-5 items-center text-center">
      <img
        className="absolute w-[500px] md:w-[170px] top-[40px] md:top-[200px] z-[-1]"
        src={stoneTabletDrawing}
        alt=""
      />
      <div className="mx-auto max-w-7xl p-20">
        <div className="mixed-text flex flex-col gap-10 items-center md:grid md:grid-row-3 w-full mb-20 text-xl md:text-3xl font-bold">
          <p>Christ Centered</p>
          <div className="w-full flex flex-col gap-10 md:pt-24 md:flex-row md:justify-between">
            <p>Prayer Sessions</p>
            <p>Bible Study</p>
          </div>
          <div className="w-full flex flex-col gap-10 md:flex-row md:justify-between md:pl-40 md:pr-40 md:pt-28">
            <p>Community</p>
            <p>Mentorship</p>
          </div>
        </div>
        <div className="features-desc grid md:grid-cols-2 gap-20 items-center">
          <div className="features-desc-subtext mb-10 mt-10">
            <h2 className="text-xl font-bold">Christ Centered</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas magnam impedit natus sint a dolores et porro
              nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis
              laudantium corrupti assumenda?
            </p>
          </div>
          <div className="features-desc-subtext">
            <h2 className="text-xl font-bold">Prayer Sessions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas magnam impedit natus sint a dolores et porro
              nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis
              laudantium corrupti assumenda?
            </p>
          </div>
          <div className="features-desc-subtext">
            <h2 className="text-xl font-bold">Community</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas magnam impedit natus sint a dolores et porro
              nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis
              laudantium corrupti assumenda?
            </p>
          </div>
          <div className="features-desc-subtext">
            <h2 className="text-xl font-bold">Mentorship</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas magnam impedit natus sint a dolores et porro
              nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis
              laudantium corrupti assumenda?
            </p>
          </div>
          <div className="features-desc-subtext">
            <h2 className="text-xl font-bold">Bible Study</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas magnam impedit natus sint a dolores et porro
              nesciunt distinctio aperiam, nemo odio iusto hic quia, facilis
              laudantium corrupti assumenda?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
