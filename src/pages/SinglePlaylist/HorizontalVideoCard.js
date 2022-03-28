const HorizontalVideoCard = () => {
  return (
    <div className="card card-badge horizontal-video-card">
      <div className="card-horizontal">
        <img className="card-img" src="https://picsum.photos/300/200" />
        <button className="btn card-icon c-badge-right material-icons">
          cancel
        </button>
        <div className="card-content">
          <div className="card-title">Our Changing Planet</div>
          <div className="card-subtitle">by Michael Scarn</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
