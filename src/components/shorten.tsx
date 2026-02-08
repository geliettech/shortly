import { useState, FormEvent, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    } else {
      const timer = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!url) {
      setErrorMessage("Please add a link");
      return;
    } else {
      setErrorMessage("");
      setLoading(true);

      try {
        setSubmittedUrl(url);

        const res = await axios.get(
          `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`,
        );

        setShortenUrl(res.data);
        setUrl("");
      } catch (error) {
        setErrorMessage("Failed to shorten link. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  // const handleSubmit = async (event: FormEvent) => {
  //   event.preventDefault();

  //   if (!url) {
  //     setErrorMessage("Please add a link");
  //     return;
  //   }

  //   setErrorMessage("");
  //   setLoading(true);

  //   try {
  //     const res = await axios.post(
  //       "https://cleanuri.com/api/v1/shorten",
  //       new URLSearchParams({ url }),
  //     );

  //     setShortenUrl(res.data.result_url); // CleanURI returns { result_url: "..." }
  //     setUrl("");
  //   } catch (error) {
  //     setErrorMessage("Failed to shorten link. Try again.");
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
              <p className="text-red-400 text-sm italic mt-1 font-normal">
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
        {submittedUrl && shortenUrl && (
          <div className="mt-6">
            <div
              className="bg-white
              p-4 sm:p-6
              rounded-lg
              flex flex-col lg:flex-row
              justify-between
              items-start lg:items-center
              gap-4
              shadow text-center"
            >
              <span className="text-gray-950 break-all">{submittedUrl}</span>

              <hr className="w-full lg:hidden border-gray-400" />

              <div className="flex flex-col items-center sm:flex-row gap-4 w-full lg:w-auto">
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
                    className={`btn-primary w-full sm:w-auto rounded-lg ${
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
