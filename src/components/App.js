import React, {useState, useEffect} from 'react';
import useVideos from '../hooks/useVideos';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos(''); //Custom hook

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                       <VideoDetail className="" video={selectedVideo} />
                    </div>    
                    <div className="five wide column">
                        <VideoList  className="" onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>             
                </div>
            </div>
        </div>
    )

}

export default App;

