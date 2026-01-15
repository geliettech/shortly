import Header from "./components/header";
import Hero from "./components/hero";
import Shorten from "./components/shorten";
import Statistics from "./components/statistics/statistics";
import Boost from "./components/boost";
import Footer from "./components/footer/footer";


// const App = () => {
//   return (
//     <>
//       {/* Header Section */}
//       <Header />
//       {/* Hero Section */}
//       <Hero />
//       {/* url shorten section */}
//       <Shorten />
//       {/* Advanced Statistics Section */}
//       <Statistics />
//       {/* link boost section */}
//       <Boost />
//       {/* footer section */}
//       <Footer />
//     </>
//   );
// };

// export default App;
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
