const HorizontalVideoCard = () => {
  return (
    <div class="card card-badge horizontal-video-card">
      <div class="card-horizontal">
        <img class="card-img" src="https://picsum.photos/300/200" />
        <button class="btn card-icon c-badge-right material-icons">
          cancel
        </button>
        <div class="card-content">
          <div class="card-title">Our Changing Planet</div>
          <div class="card-subtitle">by Michael Scarn</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
