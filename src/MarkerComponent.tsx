import React, { useState, useEffect } from 'react'
import {Marker } from "react-mapbox-gl"

export default function MarkerComponent() {
  const [modal, setModal] = useState(false);
  const [colorValue, setColorValue] = useState('');
  const [id, setId] = useState('');

  const toggleModal = (e: any): void => {
    setId(e.target.id);
    setModal(!modal);
  };

  const click = (): void => {
    setModal(false)
    const markerDiv = document.getElementById(id);
    if(markerDiv !== null){

      if (id === markerDiv.id) {
        markerDiv.style.backgroundColor = colorValue;
      }
    }    
  };

  interface dataType{
    0: number
    1: number
  }

  const [data, setData] = useState<dataType[]>([]);


  const fetchFunction = async (data: string[]) => {
    return Promise.all(
      data.map((url: string) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => data[0].capitalInfo.latlng)
      )
    );
  };


  

  useEffect(() => {
    (async () => {
      try {
        const source = await fetchFunction([
          'https://restcountries.com/v3.1/capital/Berlin',
          'https://restcountries.com/v3.1/capital/Paris',
          'https://restcountries.com/v3.1/capital/Brussels',
        ]);
        setData(source);
      } catch (exception) {
        console.log('failed to fatch data with ...', { exception });
      }
    })();
  }, []);
  

  return (
    <div>
      {data.map((item: dataType, index: number) => {
        return <Marker key={index} coordinates={[item[1], item[0]]} >
        <div className='marker' id={index.toString()} onClick={(e) => toggleModal(e)}>
        </div>
      </Marker>;
      })}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <button className="close-button" onClick={toggleModal}>
              X
            </button>
            <div className='input-container'>
            <label>Select background color</label>
              <input
                type="color"
                onChange={(e) => setColorValue(e.target.value)}
              />
              </div>
            <button onClick={click}>Apply Color</button>
          </div>
        </div>
      )}
    </div>
  )
}
