interface Props {
  name: string
  selected: boolean
}

export const ProcessListItem = ({ name, selected }: Props) => {
  if (selected) {
    return <text bg="#2a2a2a" fg="#ffffff">{`> ${name}`}</text>
  }

  return <text fg="#888888">{`  ${name}`}</text>
}
