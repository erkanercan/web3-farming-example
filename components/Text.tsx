import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  textSize?: string;
  lineHeight?: string;
  color?: string;
  fontWeight?: number;
}

const Text: React.FC<TextProps> = ({
  text,
  textSize,
  lineHeight,
  color = "#efefef",
  fontWeight,
}) => {
  return (
    <p
      style={{
        fontSize: textSize,
        lineHeight: lineHeight,
        color: color,
        fontWeight: fontWeight,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
