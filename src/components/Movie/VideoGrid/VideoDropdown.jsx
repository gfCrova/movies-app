import ReactPlayer from 'react-player';

export default function VideoDropdown({movie, type}) {

  return (

    <div className="d-flex gap-2">
        {movie &&
          movie.results.map((video) => {
            if(video.type === type) {
            return (
                <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.key}`}
                width="100%"
                controls
              />
            );
          } else{
            return null;
          }})}
    </div>
    
  )
}
