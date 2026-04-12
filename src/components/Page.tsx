import { TextAttributes } from "@opentui/core"

export const Page = () => {
  return (
    <box width="100%" height="100%">
      <ascii-font font="tiny" text="lunchbox" />
      <text attributes={TextAttributes.DIM}>What will you build?</text>
    </box>
  )
}
