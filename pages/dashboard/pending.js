import React from "react";
import CardOverview from "../../components/overview/overviewcards";
import PublishedComp from "../../components/postStatuses/published";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
const PublishedPosts = () => {
  return (
    <DashbaordPageWrapper>
      <h1>Pending Post</h1>
      <PublishedComp />
    </DashbaordPageWrapper>
  );
};

export default PublishedPosts;
