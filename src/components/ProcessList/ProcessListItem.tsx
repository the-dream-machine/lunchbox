interface Props {
  name: string
}

export const ProcessListItem = ({ name }: Props) => {
  return <text fg="#888888">{name}</text>
}
