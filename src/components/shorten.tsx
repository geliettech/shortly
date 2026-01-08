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
          p-14 rounded-lg -mt-20
        "
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="bg-white w-full md:flex-1 p-3 rounded-lg outline-none placeholder:text-gray-400"
        />

        <button className="btn-primary p-3 w-full md:w-auto rounded-lg">
          Shorten It!
        </button>
      </div>
    </section>
  );
};

export default Shorten;
