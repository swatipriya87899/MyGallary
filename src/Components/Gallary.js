import React, { useEffect, useState } from "react";
import "./Gallary.css";

const Gallary = (props) => {

  //storing data to show gallary  
  const [gallaryData, setGallaryData] = useState([]);

//On Searching - fetch API's from flickr
  useEffect(() => {
      
     //fetching Images for Gallary
    const url =
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f1d878cd8954c835bbf20046680dff5a&tags=${props.searchInput}&format=json&nojsoncallback=1`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setGallaryData(data.photos.photo);
    };

    fetchData();
  }, [props.searchInput]);

  return (
    <div className="gallary_photo_wrapper">

    {/* garllaryData having image, render it */}
      {gallaryData &&
        gallaryData.map((data) => {
          return (
            <div className="gallary_photo_container" key={data.id}>
              <img
                src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
                alt="image not found" className="gallary_photo"
                key={data.id}
              ></img>
            </div>
          );
        })}
    </div>
  );
};

export default Gallary;
