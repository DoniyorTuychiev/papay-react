import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tablist from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TabList from "@mui/lab/TabList";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
import TViewer from "../../components/tuiEditor/TViewer";
import { TuiEditor } from "../../components/tuiEditor/TuiEditor";
import { Member } from "../../../types/user";
import { BoArticle, SearchMemberArticlesObj } from "../../../types/boArticle";

//REDUX
import { useDispatch, useSelector } from "react-redux";

import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoArticles,
  retrieveChosenSingleBoArticle,
} from "./selector";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticle[]) =>
    dispach(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispach(setChosenSingleBoArticle(data)),
});

// REDUX SELECTOR
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenMemberBoArticlesRetriever = createSelector(
  retrieveChosenMemberBoArticles,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);
const chosenSingleBoArticleRetriever = createSelector(
  retrieveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({
    chosenSingleBoArticle,
  })
);
export function VisitMyPage(props: any) {
  //INITIALIZIATION
  const { verifiedMemberData } = props;
  const {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetriever
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriever);
  const [value, setValue] = useState("1");
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const [followRebuild, setFollowRebuild] = useState<boolean>(false);
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({
      mb_id: "none",
      page: 1,
      limit: 4,
    });

  useEffect(() => {
    if (!localStorage.getItem("member_data")) {
      sweetFailureProvider("Pleas login first", true, true);
    }
    const communityService = new CommunityApiService();
    const memberService = new MemberApiService();
    //setChosenMemberBoArticles
    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setChosenMemberBoArticles(data))
      .catch((err) => console.log(err));
    //setChosenMember
    memberService
      .getChosenMember(verifiedMemberData?._id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [
    memberArticleSearchObj,
    articlesRebuild,
    followRebuild,
    verifiedMemberData,
  ]);

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
  };

  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getChosenArticle(art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("5");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value="1">
                  <Box className="menu_name">Mening Maqolalarim</Box>
                  <Box className="menu_content">
                    <MemberPosts
                      chosenMemberBoArticles={chosenMemberBoArticles}
                      renderChosenArticleHandler={renderChosenArticleHandler}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={
                            memberArticleSearchObj.page >= 3
                              ? memberArticleSearchObj.page + 1
                              : 3
                          }
                          page={memberArticleSearchObj.page}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color="secondary"
                            />
                          )}
                          onChange={handlePaginationChange}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className={"menu_name"}>Followers</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowers
                      actions_enabled={true}
                      followRebuild={followRebuild}
                      setFollowRebuild={setFollowRebuild}
                      mb_id={props.verifiedMemberData?._id}
                    />
                  </Box>
                </TabPanel>

                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>Following</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowing
                      actions_enabled={true}
                      followRebuild={followRebuild}
                      setFollowRebuild={setFollowRebuild}
                      mb_id={props.verifiedMemberData?._id}
                    />
                  </Box>
                </TabPanel>

                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>Maqola Yozish</Box>
                  <Box className={"write_content"}></Box>
                  <TuiEditor setValue={setValue} setArticlesRebuild={setArticlesRebuild}/>
                </TabPanel>

                <TabPanel value={"5"}>
                  <Box className={"menu_name"}>Tanlangan Maqola</Box>
                  <Box className={"menu_content"}></Box>
                  <TViewer chosenSingleBoArticle={chosenSingleBoArticle} />
                </TabPanel>

                <TabPanel value={"6"}>
                  <Box className={"menu_name"}>Ma'lumotlarni O'zgartirish</Box>
                  <Box className={"menu_content"}>
                    <MySettings />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right">
              <Box className="order_info_box">
                <a onClick={() => setValue("6")} className="settings_btn">
                  <SettingsIcon />
                </a>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className="order_user_img">
                    <img
                      src={
                        verifiedMemberData?.mb_image ?? "/icons/default_img.svg"
                      }
                      className="order_user_avatar"
                      alt=""
                    />
                    <div className="order_user_icon_box">
                      <img
                        src={
                          verifiedMemberData?.mb_type === "RESTAURANT"
                            ? "/icons/default_restaurant.png"
                            : "/icons/user_icon.svg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <span className={"order_user_name"}>
                    {chosenMember?.mb_nick}
                  </span>
                  <span className={"order_user_prof"}>
                    {chosenMember?.mb_type}
                  </span>
                </Box>
                <Box className={"user_media_box"}>
                  <IconButton
                    href={
                      "https://www.facebook.com/profile.php?id=100015388206725"
                    }
                    target="_blank"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href={"https://www.instagram.com/doni0101195/"}
                    target="_blank"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href={"https://telegram.org/"} target="_blank">
                    <TelegramIcon />
                  </IconButton>
                  <IconButton href={"https://www.youtube.com/"} target="_blank">
                    <YouTubeIcon />
                  </IconButton>
                </Box>
                <Box className={"user_follow_box"}>
                  <p className="follows">
                    Followers: {chosenMember?.mb_subscriber_cnt}
                  </p>
                  <p className="follows">
                    Following: {chosenMember?.mb_follow_cnt}
                  </p>
                </Box>
                <p className="user_desc">
                  {chosenMember?.mb_description ??
                    "Qo'shimcha ma'lumot kiritilmagan"}
                </p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <Tablist
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"4"}
                      component={() => (
                        <Button
                          variant="contained"
                          onClick={() => setValue("4")}
                        >
                          Maqola Yozish
                        </Button>
                      )}
                    />
                  </Tablist>
                </Box>
              </Box>

              <Box className={"my_page_menu"}>
                {/*@ts-ignore*/}
                <TabList
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider", width: "95%" }}
                >
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"1"}
                    component={() => (
                      <div className={`menu_box`} onClick={() => setValue("1")}>
                        <img src="/icons/pencil.svg" alt="" />
                        <span>Maqolalarim</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                      <div className={`menu_box`} onClick={() => setValue("2")}>
                        <img src="/icons/group.svg" alt="" />
                        <span>Followers</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"3"}
                    component={() => (
                      <div className={`menu_box`} onClick={() => setValue("3")}>
                        <img src="/icons/user.svg" alt="" />
                        <span>Following</span>
                      </div>
                    )}
                  />
                </TabList>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
