export const Button = (p) => {
  const { children } = p;
  return (
    <div className="flex justify-center mt-4  items-center">
      <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
        {children}
      </button>
    </div>
  );
};
