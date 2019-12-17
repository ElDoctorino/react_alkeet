import React, {useState} from 'react';
import '../App.css';
        
const ImageInfo =({imageData, addLike}) => {
    // console.log(imageData.title);
    const [show,setShow] = useState(false);

    if(show){
        return(
            <div>
            <h1 onClick={e => setShow(false)}> {imageData.title}</h1>
            <img className="imagelist" src={imageData.url} alt={imageData.title} />
            <p> {imageData.description} </p>
            <h2> Tykkäyksiä:  {imageData.amount} </h2>
            <button onClick={e => addLike(imageData.id)}>Tykkään tästä </button>
            </div>
        ) } else {
            return (
                <div>
                    <h1 onClick={e => setShow(true)}> {imageData.title} </h1>
                </div>
            )
            }
    }
const ImagesInfo = ({images, updateImages}) => {
    const addLike = id => {
        const tempImages = [...images];
        // console.log(tempImages);
        tempImages.find(img => img.id === id).amount++;
        updateImages(tempImages);
    }
    return (
        <div>
            <h1> Kuvat näkyvät tässä </h1>
            {images.map(img => (
                <ImageInfo imageData={img} key={img.id} addLike = {addLike}/>
            ))}
        </div>
    )
}

export default ImagesInfo;