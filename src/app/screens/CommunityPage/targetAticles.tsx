import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Label } from "@mui/icons-material";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";

export function TargetArticles(props: any) {
  const { setArticlesRebuild } = props;

  /** HANDLERS */
  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      console.log("99999", like_result);
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/default_user.png";
        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={"/auth/default_user.svg"}
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                  alt=""
                />
                <span className="all_article_author_user">
                  {article?.member_data?.mb_nick}
                </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">{article?.bo_id}</span>
                <p className={"all_article_desc"}>{article?.art_subject}</p>
              </Box>
              <Box
                flexDirection={"row"}
                style={{ display: "flex" }}
                justifyContent={"flex-end"}
              >
                <Box
                  flexDirection={"row"}
                  style={{ display: "flex" }}
                  justifyContent={"space-between"}
                  marginRight={"14px"}
                >
                  <div className="article_date">
                    {moment().format("YY-MM-DD HH:mm")}
                  </div>
                  <div className="evaluation_box">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}
                    >
                      <Checkbox
                        sx={{ ml: "40px" }}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        id={article?._id}
                        onClick={targetLikeHandler}
                        checked={
                          article?.me_liked && article.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      />

                      <span style={{ marginRight: "10px" }}>
                        {article?.art_likes}
                      </span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                        <span>{article?.art_views}</span>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
