import { useState } from "react";
import kisiler from "./kisiler"
import KisiKard from "./KisiKard";
function App(){

   const [kisilerVeri, kisilerVeriGuncelle]=useState(kisiler);

   console.log(kisilerVeri)

    return(
        <>
        <div className="container">
            {kisilerVeri&&kisilerVeri.map(kisi=><div key={kisi.id}><KisiKard img={kisi.image} isim={kisi.name} /></div>)}
            
            <button onClick={()=>kisilerVeriGuncelle([])}>Listeyi Temizle</button>
        </div>
        
        </>
    )
}

export default App;