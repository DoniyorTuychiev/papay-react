import React, {useState } from "react";
import { Box,Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { verifiedMemberData } from "../../apiServices/verify";
import { MemberUpdateData } from "../../../types/user";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";

export function MySettings(props: any) {
  //INITIALIZIATION
  const [file, setFile] = useState(verifiedMemberData?.mb_image);

  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_phone: "",
    mb_address: "",
    mb_description: "",
    mb_image: "",
  });

  // HANDLERS
  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberAddressHandler = (e: any) => {
    memberUpdate.mb_address = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const handlerImagePreviewer = (e: any) => {
    try {
      const file = e.target.files[0];

      const fileType = file["type"],
        validTypes = ["image/jpg", "image/jpeg", "image/png"];
      assert.ok(validTypes.includes(fileType) && file, Definer.input_err2);

      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file));
    } catch (err) {
      console.log(`ERROR ::: handlerImagePreviewer ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const handlerSubmitButton = async () => {
    try {

      const memberService = new MemberApiService();
      const result = await memberService.updateMemberData(memberUpdate);
      
      assert.ok(result, Definer.general_err1);
      await sweetTopSmallSuccessAlert(
        "Information modified successfuly!",
        700,
        false
      );
      window.location.reload();
    } catch (err) {
      console.log(`ERROR ::: handlerSubmitButton  ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <Stack className="my_settings_page">
      <Box className={"member_media_frame"}>
        <img
          src={file}
          className="mb_image"
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
          alt=""
        />
        <div className="media_change_box">
          <span>Rasm Yuklash</span>
          <p>JPG,JPEG,PNG rasmlarini yuklay olasiz!</p>
          <div className="up_del_box">
            <Button
              component="label"
              style={{ minWidth: "0" }}
              onChange={handlerImagePreviewer}
            >
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Ism</label>
          <input
            type="text"
            className="spec_input mb_nick"
            name="mb_nick"
            placeholder={verifiedMemberData?.mb_nick}
            onChange={changeMemberNickHandler}
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="short_input">
          <label className="spec_label">Telefon Raqam</label>
          <input
            type="text"
            className="spec_input mb_phone"
            name="mb_phone"
            placeholder={verifiedMemberData?.mb_phone}
            onChange={changeMemberPhoneHandler}
          />
        </div>
        <div className="short_input">
          <label className="spec_label">Manzil</label>
          <input
            type="text"
            className="spec_input mb_address"
            name="mb_address"
            placeholder={
              verifiedMemberData?.mb_address ?? "manzil kiritilmagan"
            }
            onChange={changeMemberAddressHandler}
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Ma'lumot</label>
          <textarea
            className="spec_textarea mb_description"
            name="mb_description"
            placeholder={verifiedMemberData?.mb_description ?? "mavjud emas"}
            onChange={changeMemberDescriptionHandler}
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant="contained"
        onClick={handlerSubmitButton}>Saqlash</Button>
      </Box>
    </Stack>
  );
}
