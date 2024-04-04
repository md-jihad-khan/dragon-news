import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3 p-4 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline text-blue-600 rounded-none w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline rounded-none w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <Link className="flex p-4 text-lg items-center border rounded-t-lg">
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </Link>
        <Link className="flex p-4 text-lg items-center border-x">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </Link>
        <Link className="flex p-4 text-lg items-center border rounded-b-lg">
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </Link>
      </div>

      <div className="space-y-3 p-4 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
