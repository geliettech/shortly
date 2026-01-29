import {useState} from "react"

const Shorten = () => {
const [url, setUrl] = useState("")
const [errorMessage, setErrorMessage] = useState("")


const handleSubmit = (event: FormEvent) => {
  event.preventDefault();

  if(!url){
setErrorMessage("Please add a link")
}
}


  return (
    <section className="relative bg-gray-100 ">
      <div className="container mx-auto px-4 lg:px-24">
        {/* Form */}
        <form onSubmit={handleSubmit}
          className="
            relative
            flex flex-col lg:flex-row
            items-start
            gap-4
            bg-purple-950
            bg-[url('/images/bg-shorten-mobile.svg')]
            lg:bg-[url('/images/bg-shorten-desktop.svg')]
            bg-no-repeat bg-cover
            p-6 sm:p-8 lg:p-12
            rounded-lg
            -mt-28
          "
        >
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`}
                bg-white
                w-full
                p-4
                rounded-lg
                outline-none
                placeholder:text-gray-400
              ${errorMessage ? 'border-2 border-red-400 placeholder:text-red-400' : ''}`} value={url} onChange={(event) => setUrl(event.target.value)}
            />
            {errorMessage && (
<p className="text-red-400 text-sm italic mt-1 font-normal">
              {errorMessage}
            </p>
            )}
          </div>

          <button className="btn-primary p-4 w-full lg:w-auto rounded-lg">
            Shorten It!
          </button>
        </form>

        {/* Result */}
        <div className="mt-6 space-y-4">
          <div
            className="
              bg-white
              p-4 sm:p-6
              rounded-lg
              flex flex-col lg:flex-row
              justify-between
              items-start lg:items-center
              gap-4
              shadow text-center
            "
          >
            <span className="text-gray-950 break-all">
              https://www.frontendmentor.io/
            </span>

            <hr className="w-full lg:hidden border-gray-400" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <a
                href="https://toss.so/SEQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold break-all"
              >
                https://toss.so/SEQ
              </a>
              <button className="btn-primary w-full sm:w-auto rounded-lg">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shorten;











// import { useState } from "react";

// const Shorten = () => {
//   const [link, setLink] = useState("");
//   const [error, setError] = useState("");

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleSubmit = () => {
//     if (!link.trim()) {
//       setError("Please add a link");
//       return;
//     }

//     if (!isValidUrl(link)) {
//       setError("Please enter a valid URL");
//       return;
//     }

//     // Clear error if valid
//     setError("");

//     // 🔥 Your shorten logic / API call goes here
//     console.log("Valid link:", link);
//   };

//   return (
//     <section className="container">
//       <div
//         className="
//           flex flex-col lg:flex-row items-start gap-4
//           bg-purple-950
//           bg-[url('/images/bg-shorten-mobile.svg')]
//           lg:bg-[url('/images/bg-shorten-desktop.svg')]
//           bg-no-repeat bg-cover
//           p-8 lg:p-14 rounded-lg absolute -mt-22
//           left-6 right-6 lg:left-24 lg:right-24"
//       >
//         <div className="w-full lg:flex-1">
//           <input
//             type="text"
//             placeholder="Shorten a link here..."
//             value={link}
//             onChange={(e) => setLink(e.target.value)}
//             className={`bg-white w-full p-3 rounded-lg outline-none placeholder:text-gray-400
//               ${error ? "border-2 border-red-500" : ""}`}
//           />

//           {error && (
//             <p className="text-red-400 text-sm italic mt-1">{error}</p>
//           )}
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="btn-primary p-3 w-full lg:w-auto rounded-lg"
//         >
//           Shorten It!
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Shorten;












// import { useState } from "react";

// const Shorten = () => {
//   const [link, setLink] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleSubmit = async () => {
//     // Validation
//     if (!link.trim()) {
//       setError("Please add a link");
//       return;
//     }

//     if (!isValidUrl(link)) {
//       setError("Please enter a valid URL");
//       return;
//     }

//     setError("");
//     setShortUrl("");
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://cleanuri.com/api/v1/shorten",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: new URLSearchParams({
//             url: link,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok || data.error) {
//         throw new Error(data.error || "Something went wrong");
//       }

//       setShortUrl(data.result_url);
//     } catch (err) {
//       setError("Failed to shorten URL. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="container">
//       <div
//         className="
//           flex flex-col lg:flex-row items-start gap-4
//           bg-purple-950
//           bg-[url('/images/bg-shorten-mobile.svg')]
//           lg:bg-[url('/images/bg-shorten-desktop.svg')]
//           bg-no-repeat bg-cover
//           p-8 lg:p-14 rounded-lg absolute -mt-22
//           left-6 right-6 lg:left-24 lg:right-24"
//       >
//         <div className="w-full lg:flex-1">
//           <input
//             type="text"
//             placeholder="Shorten a link here..."
//             value={link}
//             onChange={(e) => setLink(e.target.value)}
//             className={`bg-white w-full p-3 rounded-lg outline-none placeholder:text-gray-400
//               ${error ? "border-2 border-red-500" : ""}`}
//           />

//           {error && (
//             <p className="text-red-400 text-sm italic mt-1">{error}</p>
//           )}
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="btn-primary p-3 w-full lg:w-auto rounded-lg disabled:opacity-50"
//         >
//           {loading ? "Shortening..." : "Shorten It!"}
//         </button>
//       </div>

//       {/* Result */}
    //   {shortUrl && (
    //     <div className="mt-28 px-6 lg:px-24">
    //       <div className="bg-white p-4 rounded-lg flex flex-col lg:flex-row justify-between items-center gap-4 shadow">
    //         <p className="text-gray-700 break-all">{link}</p>

    //         <div className="flex items-center gap-4">
    //           <a
    //             href={shortUrl}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-cyan-500 font-semibold"
    //           >
    //             {shortUrl}
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </section>
//   );
// };

// export default Shorten;
