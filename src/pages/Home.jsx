import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="w-full mx-auto my-auto justify-center items-center text-center max-w-5xl">
      <div className="relative overflow-hidde rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="my-auto text-center">
          <h3 className="text-4xl font-bold sm:text-5xl my-auto py-8">
            Welcome to MadeForGeeks!
          </h3>
        </div>

        <TypeAnimation
          sequence={[
            "Your Ultimate Visual Learning Platform for Mastering Data    Structures and Algorithms!",

            1000,
          ]}
          className="font-sans md:font-serif text-cyan-800 my-5"
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="lg order-2 mt-8 items-center"></div>
      </div>
      <div className="flex justify-between space-x-12">
        <div className="card w-96 bg-base-300 text-base-content shadow-sm-light">
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-4">🔍 In-Depth Explanations</h2>
            <p>
              Struggling to grasp a concept? Our in-depth explanations break
              down complex ideas into digestible pieces. With our comprehensive
              resources, you'll not only understand the 'what' but also the
              'why' behind each algorithm and data structure.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-300 text-base-content shadow-sm-light">
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-4"> 🎓 Curated Learning Paths</h2>
            <p>
              Don't know where to start? We've got you covered. Choose from
              expertly curated learning paths that guide you through a logical
              progression, ensuring you build a solid foundation and advance
              seamlessly to more advanced topics.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-300 text-base-content shadow-sm-light">
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-4"> 👩‍💻 Learn at Your Pace</h2>
            <p>
              Life is busy, and we understand that. Learn at your own pace, on
              your schedule. Whether you're a coding prodigy or just getting
              started, our platform caters to all skill levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
