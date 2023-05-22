import "./artistcard.css";
import { Fragment } from "react";

const ArtistCard = ({ artist, id }) => {
  return (
    <Fragment>
      {id <= 3 && (
        <div className="artist-container">
          <img className="artist-img" src={artist?.images[0]?.url} alt="" />
          <div className="artist-details">
            <h3 className="artist-name">{artist.name}</h3>
            <span className="artist-description">{artist.type}</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ArtistCard;
