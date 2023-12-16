
import './App.css';
import { useState,useEffect, React, useRef  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';






function App() {

  const letters=['F',"I",'R','E','_','D','E','T','E','C','T','I','O','N','_','S','Y','S','T','E','M']
  const text ="not fire"
  const [texts, setTexts] = useState("not fire");
  const [temp, setTemp] = useState("not fire");
  const fetchInterval = 3000;
  
   // to load the data from backend

  const [audio] = useState(new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.mp3'));
  const [playing, setPlaying] = useState(false);
  const [flag, setFlag] = useState(false);



  document.addEventListener("click", function(event) {
    // Get the clicked element
    const clickedElement = event.target;
    
    // Do something based on the clicked element
    //console.log("You clicked on", clickedElement);
    setFlag(true);

  });



   useEffect(() => {
        
         
 

    const fetchData = async () => {
      setTimeout(fetchData, fetchInterval);
      try {
        //const response = await fetch('https://server-lyart-nine.vercel.app/api', {
        const response = await fetch('https://fire-server-nnijiuctj-abdelrahmanelzarka.vercel.app/api', {
          method: 'POST',  
          headers: {
            
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({
            text
          })
        });

      const data = await response.json();

         
          setTexts(data);
         
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    console.log(temp)
    console.log(texts)
    if(temp!=texts)
    {
      setPlaying(!playing);
      console.log(playing);
      
    }

    setTemp(texts);

    
  
   
  }, [texts]);

  useEffect(() => {
    console.log(playing&& flag);
    (playing && flag) ? audio.play() : audio.pause()
  },
  [playing]
);


  return (
    <div className="App">




  <div class="waviy">
  {letters.map((letter, index) => (
        <span
          key={letter}

        >
          {letter}
        </span>
      ))}
      
  </div>


      
   

    { texts== "fire" ?
   
 
    
     <img src="https://img.freepik.com/premium-vector/cabin-wooden-house-fire_1308-23017.jpg" width="90%" height="80%" style={{top:"10%",left:"5%", position:"absolute"}} />
   
     :
   
    
     <img src="https://img.freepik.com/free-vector/front-view-house-with-nature-elements-white-background_1308-66071.jpg" width="90%" height="80%"  style={{top:"10%",left:"5%", position:"absolute"}} />
  }
    
   

     
      
    </div>
  );
}

export default App;
