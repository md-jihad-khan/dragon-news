import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSidenav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightsidenav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <p>main</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
