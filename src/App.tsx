import Footer from "./Footer";
import Navigation from "./Navigation";

const App = () => {

  return (
    <>
      <Navigation />
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center h-72 bg-hero-pattern">
          <h1 className="text-2xl">Hello,</h1>
          <h1 className="text-2xl">My Name is Mary Washburn.</h1>
          <h2 className="text-xl">Nice to see you!</h2>
        </div>
        <div className="flex flex-col items-center justify-center bg-light-gray p-24">
          <div className="flex">
            <div className="p-24 bg-blue">box 1</div>
            <div className="p-24 bg-dark-gray">box 2</div>
          </div>
          <div className="flex">
            <div className="p-24 bg-gray">box 3</div>
            <div className="p-24 bg-green">box 4</div>
          </div>
          <div className="flex">
            <div className="p-24 bg-pink">box 3</div>
            <div className="p-24 bg-white">box 4</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;