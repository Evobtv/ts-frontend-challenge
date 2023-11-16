import { SetStateAction } from "react";

export const updateInputValue = (
  event: React.InvalidEvent<HTMLInputElement>,
  callback: React.Dispatch<SetStateAction<string>>
) => {
  callback(event.target.value);
};
