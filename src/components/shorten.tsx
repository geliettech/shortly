// const Shorten = () => {
//   return (
//     <section className="container">
//       <div className="flex flex-col md:flex-row items-center bg-[url("images/bg-shorten-mobile.svg")] bg-purple-950 p-6 rounded-lg -mt-15 gap-4">
//         <input
//           type="text"
//           className="bg-white"
//           placeholder=" Shorten a link here..."
//         />
//         <button className="btn-primary !rounded-lg">Shorten It!</button>
//       </div>
//     </section>
//   );
// };

// export default Shorten;
const Shorten = () => {
  return (
    <section className="container">
      <div
        className="
          flex flex-col md:flex-row items-center gap-4
          bg-purple-950
          bg-[url('/images/bg-shorten-mobile.svg')]
          md:bg-[url('/images/bg-shorten-desktop.svg')]
          bg-no-repeat bg-cover
          p-8 rounded-lg -mt-20
        "
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="bg-white w-full md:flex-1 p-3 rounded-lg outline-none"
        />

        <button className="btn-primary p-3 w-full md:w-auto rounded-lg">
          Shorten It!
        </button>
      </div>
    </section>
  );
};

export default Shorten;
