const count = 0;
const Footer = () => {
  return (
    <div>
      <div
        id="wrapper"
        className="p-2 text-center"
        style={{
          backgroundColor: "#00e699",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        <p>
          You have {count} items on your list, and you already packed 0 (0%)
        </p>
      </div>
    </div>
  );
};

export default Footer;
