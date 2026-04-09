interface Props {
  name: string;
  isActive: boolean;
  isFocused: boolean;
}

export const ProcessListItem = ({ name, isActive, isFocused }: Props) => {
  return (
    <text
      bg={isActive ? "#444444" : isFocused ? "#222222" : undefined}
      fg={isActive ? "#ffffff" : isFocused ? "#cccccc" : "#888888"}
    >
      {isActive ? "▶ " : "  "}{name}
    </text>
  );
};
