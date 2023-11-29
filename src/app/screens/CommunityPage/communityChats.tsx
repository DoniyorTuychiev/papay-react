import React, {useState,} from "react";
  import { Avatar, Box, Stack } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send"; 

  export function CommunityChats() {
    /** INITIALIZATIONS **/
    const [messagesList, setMessagesList] = useState([]);

    return (
      <Stack className={"chat_frame"}>
        <Box className={"chat_top"}>Jonli Muloqot</Box>
        <Box className={"chat_content"}>
          <Stack className={"chat_main"}>
            <Box
              flexDirection={"row"}
              style={{ display: "flex" }}
              sx={{ m: "10px 0px" }}
            >   
                <Avatar alt={'doni'} src = {'/community/mirzabek.jpg'}/>
              <div className={"msg_left"}>Assalomu alaykum</div>
            </Box>
            <Box>
                <div className="msg_right">Salom berdik Mirzajon</div>
            </Box>
            <Box 
            flexDirection={'row'}
            style= {{display:'flex'}}
            sx = {{m: '10px 0px'}}
            >
                <Avatar alt={'doni'} src = {'/community/mirzabek.jpg'}/>
                <div className="msg_left">Hardoim kirsam shetta ekansizda</div>
            </Box>
            <Box>
                <div className="msg_right">Shuni ayting</div>
            </Box>
          </Stack>
        </Box>
        <Box className={"chat_bott"}>
          <input
            className={"msg_input"}
            type={"text"}
            name={"message"}
            placeholder={"Xabar jo'natish"}
          />
          <button className={"send_msg_btn"}>
            <SendIcon style={{ color: "#fff" }} />
          </button>
        </Box>
      </Stack>
    );
  }
  