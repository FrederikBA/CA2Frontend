import apiUtils from "../utils/apiUtils"
import { useEffect, useState } from "react"
import axios from "axios";

const Home = () => {
    const [galleries, setGalleries] = useState([]);
    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getGalleries = async () => {
            const response = await axios.get(URL + '/gallery/all')
            setGalleries(response.data.galleries)
            console.log(response.data.galleries);
        }
        getGalleries()
    }, [URL, setGalleries]);

    return (
        <div>
            <h1>Welcome</h1>
            <select>
                {galleries.map((gallery) => <option key={gallery.id} value={gallery.galleryName}>{gallery.galleryName}</option>)}
            </select>
            <button>Click me</button>
        </div>
    )
}

export default Home