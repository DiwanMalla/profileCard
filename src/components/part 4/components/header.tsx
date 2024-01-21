const header = () => {
  return (
    <div>
      <div id="wrapper" className="h-[100px]">
        <div
          className="flex justify-center"
          style={{ backgroundColor: "#ffa31a" }}
        >
          <img src="coconutTree.png" className="h-[100px]"></img>
          <h2
            className="mt-5 text-5xl"
            style={{
              fontFamily: "Devinyl Line Trial,sans-serif",
            }}
          >
            FAR AWAY
          </h2>
          <img src="leatherBag.png" className="h-[100px]"></img>
        </div>
      </div>
    </div>
  );
};

export default header;
