import { useState, FormEvent, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

interface ShortenedLink {
  original: string;
  shortened: string;
}

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // Load shortened links from localStorage on mount
  useEffect(() => {
    const savedLinks = localStorage.getItem("shortenedLinks");
    if (savedLinks) {
      setShortenedLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Reset copied state after 1 second
  useEffect(() => {
    if (copiedIndex === null) return;

    const timer = setTimeout(() => setCopiedIndex(null), 1000);
    return () => clearTimeout(timer);
  }, [copiedIndex]);

  // Handle form submission to shorten URL
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!url) {
      setErrorMessage("Please add a link");
      return;
    } else {
      setErrorMessage("");
      setLoading(true);

      try {
        const res = await axios.get(
          `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`,
        );

        const newLink: ShortenedLink = {
          original: url,
          shortened: res.data,
        };

        const updatedLinks = [newLink, ...shortenedLinks];
        setShortenedLinks(updatedLinks);

        // Persist to localStorage
        localStorage.setItem("shortenedLinks", JSON.stringify(updatedLinks));

        setUrl("");
      } catch (error) {
        setErrorMessage("Failed to shorten link. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 lg:px-24">
        {/* Form */}
        <form
          id="shorten"
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

        {/*  Result: Shortened Links */}
        {shortenedLinks.map((link, index) => (
          <div className="mt-6">
            <div
              key={index}
              className="bg-white p-4 sm:p-6
              rounded-lg
              flex flex-col lg:flex-row
              justify-between
              items-start lg:items-center
              gap-6
              shadow text-center"
            >
              <span className="text-gray-950 break-all">{link.original}</span>
              <hr className="w-full lg:hidden border-gray-400" />
              <div className="flex flex-col items-center sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href={link.shortened}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold break-all"
                >
                  {link.shortened}
                </a>

                <CopyToClipboard
                  text={link.shortened}
                  onCopy={() => setCopiedIndex(index)}
                >
                  <button
                    className={`btn-primary w-full sm:w-auto rounded-lg ${
                      copiedIndex === index ? "bg-purple-950" : ""
                    }`}
                  >
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorten;
