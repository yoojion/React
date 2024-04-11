const style = { color: "red", fontSize: "32px", backgroundColor: "black" };
const lemo = { color: "blue", backgroundColor: "yellow", textAlign: "center" };
const melon = { color: "green" };
const Orange = () => {
  return (
    <div style={style}>
      <h3>Orange</h3>
    </div>
  );
};

/* 리턴 안에 js 문법을 쓸때는 {} 안에 써야함 */
const Lemon = () => {
  return <h3 style={lemo}>Lemon</h3>;
};
export { Orange, Lemon };

// const Orange = () => {
//     return <div>Orange</div>;
//   };
//   export default Orange;

const Melon = () => {
  return <p style={melon}>melon</p>;
};
export default Melon;
