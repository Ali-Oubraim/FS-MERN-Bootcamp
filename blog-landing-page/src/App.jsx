import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "./App.css";
import { useEffect, useState } from "react";
import Email from "./Email";
import posts from "./index";

function App() {
  // const [color, setColor] = useState(true);
  // useEffect(() => {
  //   console.log("hello zorld");
  // }, [color]);

  const getPost = posts.find((post) => post.id === 4);
  return (
    <>
      <Header
        blogTitle={getPost.blogTitle}
        navigationLinks={getPost.navigationLinks}
        isLoggedIn={getPost.isloggedIn}
      />
      <MainContent posts={getPost.posts} />
      {/* <h1 style={{ color: "red" }}> This is {`${color}`}</h1> */}
      <Email
        senderName={"Ali Oubraim"}
        reciverName={"Mohamed"}
        functionName={4}
      />
      <Footer />
    </>
  );
}

export default App;
