const home = () => {
  return (
    <div>
      <div
        id="outer"
        className="m-6 border border-solid border-black border-2 w-[350px]"
      >
        <img src="/img1.jpg"></img>
        <div id="text" className=" m-3">
          <h1
            className="bg-blue-200"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            Lamborghini SuperCar
          </h1>

          <p>
            Full-stack web develops and teacher at Udemy. When not coding or
            preparing a course, I like to play board games, to cook, or to just
            enjoy the portugese sun at the beach.
          </p>
          <div className="">
            <span className="bg-blue-600 rounded-md p-1 pl-2 pr-2 inline-block mr-3">
              HTML+CSS
            </span>
            <span className="bg-yellow-300 rounded-md p-1 pl-2 pr-2 inline-block mr-3">
              Javascript
            </span>
            <span className="bg-green-300 rounded-md p-1 pl-2 pr-2 inline-block mr-3 mt-2">
              Web Design
            </span>
            <span className="bg-red-600 rounded-md p-1 pl-2 pr-2 inline-block mr-3">
              Git and Github
            </span>
            <span className="bg-blue-300 rounded-md p-1 pl-2 inline-block mr-3">
              React
            </span>
            <span className="bg-red-600 rounded-md p-1 pl-2 inline-block mr-3 mt-2">
              Svelte
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
