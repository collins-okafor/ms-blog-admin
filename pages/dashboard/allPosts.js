import React from "react";
import CardOverview from "../../components/overview/overviewcards";
import PublishedComp from "../../components/postStatuses/published";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
const AllPosts = () => {
  return (
    <DashbaordPageWrapper>
      <h1>All Post</h1>
      <PublishedComp />
    </DashbaordPageWrapper>
  );
};

export default AllPosts;
