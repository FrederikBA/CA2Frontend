import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import apiUtils from "../utils/apiUtils"

const Gallery = () => {
  const [artCollection, setArtCollection] = useState([]);

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
    const getAnimals = () => {
      const response = await.axios.get(URL + '/animals')
      console.log(response.data);
    }
  }, []);

  return (
    <div>
      <h1>This is the art collection of {galleryName}</h1>
      <ul>{artCollection.map((a) => <li key={a.id}>{a.name}</li>)}</ul>
    </div>
  )
}

export default Gallery