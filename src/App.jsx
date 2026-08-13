import Footer from "./props-practise/Footer"
import Header from "./props-practise/Header"

function App(){

  const name= "dhoni"
  return (
    <>
    <h2>this is react class</h2>
    <h2>my fav player name is {name}</h2>
    <Header fullname ={name} />
    <Footer />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quia error veniam perferendis, pariatur labore maiores vero beatae adipisci.</p>
    </>
  );
  }

export default App;
