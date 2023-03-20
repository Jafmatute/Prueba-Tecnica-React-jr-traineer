import { useEffect, useState } from 'react';
import '../css/App.css'
const FactRandom = () => {

  const [fact, setFact] = useState('gast state');
  const [image, setImage] = useState("");
  const CAT_ENDPOINT_FACT_RANDOM = "https://catfact.ninja/fact";
  const CAT_ENDPOINT_IMAGE_RANDOM = `https://cataas.com/cat/says/name_change?size=50&color=red&json=true`;
  const CAT_PREFIX_URL = "https://cataas.com";

  //Para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT_RANDOM).then(
      (rsp) => rsp.json()).
      then(data => {
        const { fact } = data;
        setFact(fact)
      })

  }, [])
  
  //para recuperar la imagen cada vez que tenemos una cita nueva.
  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ')[0]; //la primera palabra
    const firstThreeWord = fact.split(' ').slice(0, 3).join(' ') // las primeras tres palabras fact.split(' ', 3).join(' ')
    
    fetch(`${CAT_PREFIX_URL}/cat/says/${firstThreeWord}?size=50&color=red&json=true`)
    .then(rsp => rsp.json())
      .then(image => setImage(`${CAT_PREFIX_URL}/${image.url}`))
    
  },[fact])



  return (
    <main>
      <h1>APP de gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`Image not extracted ${fact}`} ></img>}
    </main>
  )
};

export default FactRandom;