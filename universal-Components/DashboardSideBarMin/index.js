import React, { memo } from "react";
import { DashboardMinDiv } from "./styles/dashboardSidebar.style";
import { BsBell, BsSignpost2Fill } from "react-icons/bs";
import { FaClipboardList, FaStackExchange } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { FiEdit, FiHome } from "react-icons/fi";
import { CiNoWaitingSign } from "react-icons/ci";
import {
  MdPublishedWithChanges,
  MdDashboard,
  MdOutlineArticle,
} from "react-icons/md";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const DashboardSideBarMin = () => {
  const router = useRouter();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const RouteToPage = (link) => {
    router.push(`${link}`);
  };

  return (
    <DashboardMinDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        {/* <Image src={Logo} className="firstSection__image" alt="logo" /> */}
      </div>
      <div className="secondSection">
        {sideBarLink?.map((item, key) => (
          <div
            key={key}
            className={`secondSection_dashboard ${
              router.asPath === item.link && "selected"
            }`}
            onClick={() => RouteToPage(item.link)}
          >
            <div className="secondSection_dashboardIconBody">
              <item.logo className="secondSection_dashboardIcon" />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="thirdSection">
        <div className="thirdSection__ImageDetails">
          <div className="thirdSection__ImageDetailsWrapper">
            <Image
              src={Profile}
              alt={"profile"}
              className="thirdSection__ImageDetailsImage"
            />
          </div>
        </div>
      </div> */}
    </DashboardMinDiv>
  );
};

const sideBarLink = [
  { logo: MdDashboard, title: "Overview", link: "/dashboard/overview" },
  { logo: FiHome, title: "Dashboard", link: "/dashboard" },
  { logo: BsBell, title: "Notifications", link: "/dashboard/notifications" },
  { logo: FaStackExchange, title: "Following", link: "/dashboard/followings" },
  { logo: FaClipboardList, title: "Stroies", link: "/dashboard/stories" },
  { logo: FiEdit, title: "Write", link: "/dashboard/write" },
  { logo: CiNoWaitingSign, title: "Pending", link: "/dashboard/pending" },
  {
    logo: MdPublishedWithChanges,
    title: "Published Post",
    link: "/dashboard/published",
  },
  { logo: MdOutlineArticle, title: "All post", link: "/dashboard/allPosts" },
  { logo: BsSignpost2Fill, title: "Post Media", link: "#" },
  { logo: RiAdminFill, title: "Create Admin", link: "#" },
];

export default memo(DashboardSideBarMin);
