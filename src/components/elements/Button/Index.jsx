export const Button = (p) => {
  // Buatkan kondisi id alert
  const { children, onClick = () => {}, type } = p;
  // const sayHello = (name) =>
  //   id === "login"
  //     ? alert(`Hello ${name}, you click login`)
  //     : alert(`Hello ${name}, you click register`);
  return (
    <div className="flex justify-center mt-4  items-center">
      <button
        type={type}
        onClick={() => onClick()}
        className="bg-blue-500 w-full text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700"
      >
        {children}
      </button>
    </div>
  );
};
