const Shorten = () => {
  return (
    <section className="container">
      <div
        className="
          flex flex-col lg:flex-row items-center gap-4
          bg-purple-950
          bg-[url('/images/bg-shorten-mobile.svg')]
          lg:bg-[url('/images/bg-shorten-desktop.svg')]
          bg-no-repeat bg-cover
          p-8 lg:p-14 rounded-lg absolute -mt-22 left-6 right-6 lg:left-24 lg:right-24"
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="bg-white w-full lg:flex-1 p-3 rounded-lg outline-none placeholder:text-gray-400"
        />

        <button className="btn-primary p-3 w-full lg:w-auto rounded-lg">
          Shorten It!
        </button>
      </div>
    </section>
  );
};

export default Shorten;