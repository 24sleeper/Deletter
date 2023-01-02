import React from "react";
import TextField from "@mui/material/TextField";

type textboxStyle = "standard" | "filled" | "outlined" | undefined;

// TODO 送信するときの処理（ボタン押下時、Enter押下時）の処理を考えておくこと。
const textbox = (textboxStyle: textboxStyle, disabled: boolean) => {
  return (
    <TextField label="Filled" variant={textboxStyle} disabled={disabled} />
  );
};
