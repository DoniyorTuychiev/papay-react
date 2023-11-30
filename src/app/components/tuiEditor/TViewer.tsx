import React, {useEffect, useRef, useState} from "react";
import { Box, Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";  //bu packegni documentation asosida yarn add orqali install qilindi to use refEditor
import "@toast-ui/editor/dist/toastui-editor.css";


const TViewer = (props: any) => {
    const editorRef = useRef();

    return(
        <Stack sx={{background:"white", mt:"30px", borderRadius:"10px"}}>
            <Box sx={{m:"40px"}}>
                <Viewer
                    //@ts-ignore
                    ref={editorRef}  /*} Editor ishlamayapti shuning uchun ts-ignore ishlatildi va darsda ham yozilgan*/
                    initialValue={props.text}
                    height={"600px"}
                />
            </Box>
        </Stack>
    );
}

export default TViewer;