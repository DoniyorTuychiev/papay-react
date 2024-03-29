import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../types/screen";
import { retrieveTargetBoArticles } from "../CommunityPage/selector";

const selectMemberPage = (state: AppRootState) => state.memberPage;

export const retrieveChosenMember = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenMember
);
export const retrieveChosenMemberBoArticles = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenMemberBoArticles
);
export const retrieveChosenSingleBoArticle = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenSingleBoArticle
);
export const retrieveMemberFollowers = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.memberFollowers
);
export const retrieveMemberFollowings = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.memberFollowings
);
