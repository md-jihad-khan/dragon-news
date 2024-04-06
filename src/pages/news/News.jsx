import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNav from "../shared/rightsidenav/RightSideNav";
import Navbar from "../shared/navbar/Navbar";

const News = () => {
  const { id } = useParams();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">{id}</div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
