import Header from "./components/Header";
const App = () => {
  return (
    <>
      <div style={{
        background: "linear-gradient(to bottom right, black 40%, #1D0A53 100%)",
        minHeight: "100vh"
        }}
      >
        <Header />
        <h1 className="text-3xl font-bold underline text-cyan-50">
          Hello world!
        </h1>
      </div>
    </>
    
  );
}
export default App
