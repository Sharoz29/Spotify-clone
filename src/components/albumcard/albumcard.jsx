import "./albumcard.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Fragment } from "react";

const AlbumCard = ({ album, id, showAll }) => {
  return showAll ? (
    <div className="album-container">
      {album?.images[0]?.url ? (
        <img className="album-img" src={album?.images[0]?.url} alt="" />
      ) : (
        <MusicNoteIcon />
      )}
      <div className="album-details">
        <h4 className="album-title">{album.name}</h4>
        {album.description ? (
          <span className="album-description">
            {album?.description.length > 74
              ? album.description.slice(0, 74)
              : album.description}
          </span>
        ) : (
          <Fragment>
            {album.artists && (
              <span className="album-artits">{album?.artists[0]?.name}</span>
            )}
          </Fragment>
        )}
      </div>
    </div>
  ) : (
    <Fragment>
      {id <= 3 && (
        <div className="album-container">
          {album?.images[0]?.url ? (
            <img className="album-img" src={album?.images[0]?.url} alt="" />
          ) : (
            <MusicNoteIcon />
          )}
          <div className="album-details">
            <h4 className="album-title">{album.name}</h4>
            {album.description ? (
              <span className="album-description">
                {album?.description.length > 74
                  ? album.description.slice(0, 74)
                  : album.description}
              </span>
            ) : (
              <Fragment>
                {album.artists && (
                  <span className="album-artits">
                    {album?.artists[0]?.name}
                  </span>
                )}
              </Fragment>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default AlbumCard;
