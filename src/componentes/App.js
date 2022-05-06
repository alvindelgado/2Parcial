import '../styles/App.css';
import { Organismo } from "./Organismo";
import matriz from '../matriz/matriz';

function App() {
    return ( 
        <> 
         <Organismo back={matriz[0].theme}/>
         <Organismo back={matriz[1].theme} />
         <Organismo back={matriz[2].theme} />
        
        </>
     
    );
}

export default App;