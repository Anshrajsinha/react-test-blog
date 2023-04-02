import { useEffect, useState } from "react";
import "./App.css"
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    
    const imageListRef = ref(storage, `img/`) 
    const uploadImage = () => {
        if (imageUpload == null) return;
        console.log(imageUpload)
        const imageRef = ref(storage, `img/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            //alert("image uploaded")
            console.log(snapshot)
            console.log(snapshot.ref)
            getDownloadURL(snapshot.ref).then((url) => {
              setImageList((prev) => [...prev, url])
            })
            //setImageList((prev) => [...prev, ])
        })
    }
    
    useEffect(() => {
      listAll(imageListRef).then((response) => {
        console.log(response)
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) =>  [...prev, url] )
          })
        })
      })
    }, [])

    return (
      <div className="App">
        <input type="file" 
            onChange={(event) => {
                setImageUpload(event.target.files[0])
                }}/>
        <button onClick={uploadImage}>Upload Image</button>
        {imageList.map((imgUrl) => {
          return <img src={imgUrl}/>
        })}
      </div>
    );
  }
export default App;