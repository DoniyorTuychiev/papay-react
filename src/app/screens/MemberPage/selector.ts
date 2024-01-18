import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../types/screen";
import { retriveTargetBoArticles } from "../CommunityPage/selector";

const selectMemberPage = (state: AppRootState)=> state.memberPage;

export const retriveChosenMember = createSelector(
    selectMemberPage,
    (MemberPage)=> MemberPage.chosenMember
);
export const retriveChosenMemberBoArticles = createSelector(
    selectMemberPage,
    (MemberPage)=> MemberPage.chosenMemberBoArticles
);
export const retriveChosenSingleBoArticle = createSelector(
    selectMemberPage,
    (MemberPage)=> MemberPage.chosenSingleBoArticle
);
export const retriveMemberFollowers = createSelector(
    selectMemberPage,
    (MemberPage)=> MemberPage.memberFollowers
);
export const retriveMemberFollowings = createSelector(
    selectMemberPage,
    (MemberPage)=> MemberPage.memberFollowings
);


