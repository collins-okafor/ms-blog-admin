import React from "react";
import { StyledOverView } from "./styles/styles";
import { CiNoWaitingSign } from "react-icons/ci";
import { MdPublishedWithChanges, MdOutlineArticle } from "react-icons/md";
import Ads from "../../../universal-Components/postAdsStructure/ads";
import Post from "../../../universal-Components/postAdsStructure/post";
import PostVerify from "../../../universal-Components/postAdsStructure/postVerify";
import Link from "next/link";
// { logo: CiNoWaitingSign, title: "Pending", link: "#" },
// { logo: MdPublishedWithChanges, title: "Published Post", link: "#" },
// { logo: MdOutlineArticle, title: "All post", link: "#" },
const CardOverview = () => {
  return (
    <StyledOverView>
      <div className="left">
        <div className="cardContainer">
          <Link href="/dashboard/allPosts" className="card">
            <div className="text">
              <h5>All posts</h5>
              <h3>20</h3>
              <p>20 For the last month</p>
            </div>
            <div className="iconNum">
              <MdOutlineArticle className="icon" />
            </div>
          </Link>
          <Link href="/dashboard/pending" className="card">
            <div className="text">
              <h5>Pending posts</h5>
              <h3>20</h3>
              <p>20 For the last month</p>
            </div>
            <div className="iconNum">
              <CiNoWaitingSign className="icon" />
            </div>
          </Link>
          <Link href="/dashboard/published" className="card">
            <div className="text">
              <h5>Published posts</h5>
              <h3>20</h3>
              <p>20 For the last month</p>
            </div>
            <div className="iconNum">
              <MdPublishedWithChanges className="icon" />
            </div>
          </Link>
        </div>
        <PostVerify />
      </div>
      <div className="adsDisplay">
        <Ads />
      </div>
    </StyledOverView>
  );
};

export default CardOverview;
