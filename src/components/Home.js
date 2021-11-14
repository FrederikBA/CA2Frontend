import apiUtils from "../utils/apiUtils"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [galleries, setGalleries] = useState([]);
    const [selected, setSelected] = useState("");
    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getGalleries = async () => {
            const response = await axios.get(URL + '/gallery/all')
            setGalleries(response.data.galleries)
            setSelected(response.data.galleries[0].galleryName)
        }
        getGalleries()
    }, [URL, setGalleries]);


    const onChange = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div className="centered">
            <h1>Welcome</h1>
            <select className="form-select" onChange={onChange}>{galleries.map((gallery) => <option key={gallery.id} value={gallery.galleryName}>{gallery.galleryName}</option>)}</select>
            <NavLink to={`/${selected}`}><button className="btn btn-secondary m-2 homebtn">Visit Gallery</button></NavLink>
        </div>
    )
}

export default Home