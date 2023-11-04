import Footer from "./Footer";
import Navigation from "./Navigation";

const App = () => {

  return (
    <>
      <Navigation />
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <h1>Hello, My Name is Mary Washburn.</h1>
          <h2>Nice to see you!</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            <div className="p-4">box 1</div>
            <div className="p-4">box 2</div>
          </div>
          <div className="flex">
            <div className="p-4">box 3</div>
            <div className="p-4">box 4</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;