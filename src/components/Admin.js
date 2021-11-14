import apiUtils from "../utils/apiUtils"
import { useState, useEffect } from "react"

const Admin = ({ currentRoles }) => {
  const [artPieces, setArtPieces] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getArtPieces = async () => {
      try {
        const response = await apiUtils.getAuthAxios().get(URL + '/art/all')
        setArtPieces(response.data.artCollection);
        setErrorMessage('')
      } catch {
        setErrorMessage('You do not have the required role')
      }
    }
    getArtPieces()
  }, [URL]);

  return (
    <div>
      <h2>{errorMessage}</h2>
      <table className="table table">
        <thead className="mt-head">
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Artist</th>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {artPieces.map((a => <tr><td>{a.id}</td><td>{a.year}</td><td>{a.artist}</td><td>{a.name}</td><td>{a.imageUrl}</td></tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin