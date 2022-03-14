// import { collection, onSnapshot } from "firebase/firestore";
// import { useState, useEffect } from "react";
import "./App.css";

// import db from "./firebase";
import Video from "./Video";

function App() {
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   onSnapshot(collection(db, "videos"), (snapshot) => {
  //     setVideos(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  const videos = [
    {
      channel: "Aliaa",
      description: "ابتهالات النقشبندى",
      likes: 150,
      messages: 1000,
      shares: 90,
      song: "قصدتك من الجهات",
      url: "https://v16-webapp.tiktok.com/2c944fbc28b520ba11114d09cc682967/622fa2c5/video/tos/useast2a/tos-useast2a-pve-0068/3251550cf176432ba0eb36d893d4f3bc/?a=1988&br=518&bt=259&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30qnz7Th2UrvDXq&l=202203141416110102230981561E1F6DB6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am04czY6Zmp1ODMzNzczM0ApNTw3NGU1ODw1NzY2ZGVmM2doMS8vcjRvaWhgLS1kMTZzczUwNjZjYy40Ml82MzM2YjI6Yw%3D%3D&vl=&vr=",
    },
    {
      channel: "Mohamed",
      description: "محمد عمران",
      likes: 150,
      messages: 1000,
      shares: 90,
      song: "قصدتك من الجهات",
      url: "https://v16-webapp.tiktok.com/01fe3e2c667e705def6c8161ccd61ead/622fa346/video/tos/useast2a/tos-useast2a-ve-0068c003/d5065a0e3708422b9f65c48e49822b32/?a=1988&br=1120&bt=560&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30qnz7Th2lrvDXq&l=202203141418190102230791300F1F2F37&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZucDg6ZmU0ODMzNzczM0ApM2k6ZTg7OWQ2Nzw4ODk6aWdnazBhcjRvZ3BgLS1kMTZzcy0vNWBfLTViXjIxNV5iXi06Yw%3D%3D&vl=&vr=",
    },
  ];
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video, index) => (
          <Video video={video} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
