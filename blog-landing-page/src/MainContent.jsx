import newspaper from "./assets/newspaper.jpg";
import Post from "./Post";

function MainContent({ posts }) {
  let backgroundClr = "red";
  return (
    <>
      <main className="main-section">
        <div className="hero-section">
          <div className="hero-img">
            <img src={newspaper} alt="" srcSet="" />
          </div>
          <div className="hero-info">
            <h1>
              <span className="first-span">Write</span>.
              <span className="second-span">Rewrite</span>.
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, obcaecati labore.
            </p>
            <button className="btn-write">Write Now</button>
          </div>
        </div>
      </main>
      <Post posts={posts} backgroundClr={backgroundClr} />
    </>
  );
}

export default MainContent;
