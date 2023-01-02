import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

/** ボタンのサイズ限定のための型 */
type buttonSizeType = "small" | "medium" | "large" | undefined;

/**
 * 送信ボタンコンポーネント
 *
 * 送信のアイコンを示したボタンコンポーネントです。
 * @param onClickHandler クリックされたときに発火する関数
 * @param size ボタンの大きさ
 * @param disabled trueのとき、ボタアンの活性化
 * @returns 送信ボタンコンポーネントの描画情報
 */
const sendButton = (
  onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined,
  size: buttonSizeType,
  disabled: boolean
) => {
  return (
    <IconButton onClick={onClickHandler} size={size} disabled={disabled}>
      <SendIcon />
    </IconButton>
  );
};

export default sendButton;
