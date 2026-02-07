// import { useState, FormEvent, useEffect } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import axios from "axios";

// const Shorten = () => {
//   const [url, setUrl] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [shortenUrl, setShortenUrl] = useState("https://toss.so/SEQ");
//   const [copied, setCopied] = useState(false);
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCopied(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [copied]);
  

//   const handleClick = (event: FormEvent) => {
//     event.preventDefault();
//     if (!url) {
//       setErrorMessage("Please add a link");
//     }
//     setUrl("");
//   };

//   const fetchData = async () => {
//     try{
//       setLoading(true);

//       const res = axios(`=${url}`)
//       setShortenUrl(res.data)
//     } catch(err) {

//     } finally {

//     }
//   }

//   return (
//     <section className="relative bg-gray-100 ">
//       <div className="container mx-auto px-4 lg:px-24">
//         {/* Form */}
//         <form
//           className="
//             relative
//             flex flex-col lg:flex-row
//             items-start
//             gap-4
//             bg-purple-950
//             bg-[url('/images/bg-shorten-mobile.svg')]
//             lg:bg-[url('/images/bg-shorten-desktop.svg')]
//             bg-no-repeat bg-cover
//             p-6 sm:p-8 lg:p-12
//             rounded-lg
//             -mt-28
//           "
//         >
//           <div className="flex-1 w-full">
//             <input
//               type="text"
//               placeholder="Shorten a link here..."
//               className={`
//                 bg-white
//                 w-full
//                 p-4
//                 rounded-lg
//                 outline-none
//                 placeholder:text-gray-400
//               ${errorMessage ? "border-2 border-red-400 placeholder:text-red-400" : ""}`}
//               value={url}
//               onChange={(event) => setUrl(event.target.value)}
//             />
//             {errorMessage && (
//               <p className="text-red-400 text-sm italic mt-1 font-normal">
//                 {errorMessage}
//               </p>
//             )}
//           </div>

//           <button
//             className="btn-primary p-4 w-full lg:w-auto rounded-lg"
//             onClick={handleClick}
//           >
//             Shorten It!
//           </button>
//         </form>

//         {/* Result */}
//         <div className="mt-6 space-y-4">
//           <div
//             className="
//               bg-white
//               p-4 sm:p-6
//               rounded-lg
//               flex flex-col lg:flex-row
//               justify-between
//               items-start lg:items-center
//               gap-4
//               shadow text-center
//             "
//           >
//             <span className="text-gray-950 break-all">{url}</span>

//             <hr className="w-full lg:hidden border-gray-400" />

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
//               <a
//                 href="https://toss.so/SEQ"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 font-semibold break-all"
//               >
//                 {shortenUrl}
//               </a>

//               <CopyToClipboard text={shortenUrl} onCopy={() => setCopied(true)}>
//                 <button
//                   className={`btn-primary w-full sm:w-auto rounded-lg ${copied ? "bg-purple-950" : ""}`}
//                 >
//                   {copied ? "Copied!" : "Copy"}
//                 </button>
//               </CopyToClipboard>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shorten;
import { useState, FormEvent, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!url) {
      setErrorMessage("Please add a link");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      setShortenUrl(res.data.result.full_short_link);
      setUrl("");
    } catch (error) {
      setErrorMessage("Failed to shorten link. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 lg:px-24">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
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
              className={`
                bg-white w-full p-4 rounded-lg outline-none
                placeholder:text-gray-400
                ${errorMessage ? "border-2 border-red-400 placeholder:text-red-400" : ""}
              `}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {errorMessage && (
              <p className="text-red-400 text-sm italic mt-1">
                {errorMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary p-4 w-full lg:w-auto rounded-lg"
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </button>
        </form>

        {/* Result */}
        {shortenUrl && (
          <div className="mt-6">
            <div
              className="
                bg-white p-4 sm:p-6 rounded-lg
                flex flex-col lg:flex-row
                justify-between items-start lg:items-center
                gap-4 shadow
              "
            >
              <span className="text-gray-950 break-all">{shortenUrl}</span>

              <hr className="w-full lg:hidden border-gray-400" />

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href={shortenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold break-all"
                >
                  {shortenUrl}
                </a>

                <CopyToClipboard
                  text={shortenUrl}
                  onCopy={() => setCopied(true)}
                >
                  <button
                    className={`btn-primary rounded-lg ${
                      copied ? "bg-purple-950" : ""
                    }`}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorten;
