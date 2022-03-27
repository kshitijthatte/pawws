import { Link } from "react-router-dom"

const PlaylistCard = () => {
  return (
    <Link className="card video-card" to="/">
    <img className="card-img" src="https://picsum.photos/300/200" />
    <div className="card-title">Playlist Title</div>
    <div className="card-subtitle">by User</div>
    <button className="btn btn-transparent btn-sm video-card-btn">View Full Playlist</button>
  </Link>
  )
}

export default PlaylistCard