import React from 'react'

import { EncomGlobe } from 'encom-globe-react'
import 'encom-globe-react/dist/index.css'

const marker1 = {lat: 49.25, lon: -123.1, label: "Toronto"};
const marker5 = {lat: 130.6895, lon: 100.69171, label: "Silicon Valley"};
const marker2 = {lat: 35.6895, lon: 129.69171, label: "Tokyo", connected: true};
const marker3 = {lat: 60.6895, lon: 110.69171, label: "Nigeria", connected: true};
const marker4 = {lat: 90.6895, lon: 100.69171, label: "L o r g a r i t h m    i n c.", connected: true};
const demoMarkers = [marker1, marker2, marker3, marker4, marker5];

const EncomEarthGlobe = () => {

  const [state, setState] = React.useState({width: window.innerWidth, height: window.innerHeight});
  React.useEffect(()=> {

      const cb = () => setState({width: window.innerWidth, height: window.innerHeight});

      window.addEventListener( 'resize', cb, false );

      return () => window.removeEventListener('resize', cb)
  });

  const [markers, setMarkers] = React.useState([]);
  const [constellations, setConstellations] = React.useState([]);

  const demo = () => {
    console.log("Run demo");
    // ADD MARKERS
    setTimeout(() => setMarkers(demoMarkers), 4000);

    //ADD SATELLITES
    setTimeout(()=>{
        const constellation = [];
        const opts = {
            waveColor: "#FFF",
            coreColor: "#FF0000",
            shieldColor: "#fff",
            numWaves: 8
        };
        const alt =  1.3;

        for(let i = 0; i< 2; i++){
            for(let j = 0; j< 3; j++){
                 constellation.push({
                    lat: 50 * i - 30 + 15 * Math.random(), 
                     lon: 120 * j - 120 + 30 * i, 
                     altitude: alt
                     });
            }
        }

        setConstellations([{
          opts,
          sats: constellation
        }])
    }, 6000)
  }
  
  return <EncomGlobe 
    width={state.width} 
    height={state.height} 
    markers={markers}
    // satellites={satellites}
    constellations={constellations}
    globeReadyCb={demo}
  />
}

export default EncomEarthGlobe