interface calculate {
  count: number;
  packed: number;
}
const Footer = ({ count, packed }: calculate) => {
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
          <em>
            You have {count} items on your list, and you already packed {packed}{" "}
            ({((packed / count) * 100).toFixed(2)}%)
          </em>
        </p>
      </div>
    </div>
  );
};

export default Footer;
