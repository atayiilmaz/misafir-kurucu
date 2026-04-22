import * as React from "react";
import SubtleButton from "@/components/ui/subtle-button";

type SecondaryButtonProps = React.ComponentProps<typeof SubtleButton>;

export default function SecondaryButton(props: SecondaryButtonProps) {
  return <SubtleButton theme="secondary" {...props} />;
}
