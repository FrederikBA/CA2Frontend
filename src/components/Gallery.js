import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import apiUtils from "../utils/apiUtils"

const Gallery = () => {
  const [artCollection, setArtCollection] = useState([]);
  const [painting, setPainting] = useState("");

  const URL = apiUtils.getUrl()
  const galleryName = useParams().id

  useEffect(() => {
    const getGallery = async () => {
      const response = await axios.get(URL + '/gallery/name/' + galleryName)
      setArtCollection(response.data.artCollection);
    }
    getGallery()
  }, [URL, galleryName]);

  useEffect(() => {
    const getAnimals = async () => {
      const response = await axios.get(URL + '/animals')
      setPainting(response.data.duckDTO.url);
    }
    getAnimals()
  }, [URL]);

  return (
    <div class="centered">
      <h1>This is the art collection of {galleryName}</h1>
      {artCollection.map((a) => <div className="frame" key={a.id}><img className="painting" src={painting} alt="" /> <p className="painting-title">{a.year + ", " + a.artist + ", " + "'" + a.name + "'"}</p></div>)}
    </div>
  )
}

export default Gallery