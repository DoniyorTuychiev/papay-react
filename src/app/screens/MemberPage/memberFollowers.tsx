import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followers = [
  { mb_nick: "doni ", following: true },
  { mb_nick: "alisa", following: false },
  { mb_nick: "sardor", following: true },
];

export function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/icons/default_user_pictures.svg";
        return (
          <Box className={"follow_box"}>
            <Avatar src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{follower.mb_nick}</span>
            </div>
              {props.actions_enabled && (follower.following ? ( 
                <Button
                  variant="contained"
                  className="following_already"
                  disabled
                >
                  FOLLOWING
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={
                    <img src="/auth/lianardo.jpg" style={{ width: "40px", borderRadius: '100px' }} />
                  }
                  className="follow_btn"
                >
                  Follow back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}
