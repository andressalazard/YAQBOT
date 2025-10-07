import NumberCircle from "../atoms/NumberCircle/NumberCircle";

interface OptionsMenuProps {
  selectedOption: number;
  onSelectOption: (option: number) => void;
  className?: string;
}

export const OptionsMenuSignIn = ({
  selectedOption,
  onSelectOption,
  className,
}: OptionsMenuProps) => {
  return (
    <div className={className}>
      <NumberCircle
        content="1"
        size={30}
        onClick={() => onSelectOption(0)}
        className={selectedOption === 0 ? "selected" : ""}
      />
      <NumberCircle
        content="2"
        size={30}
        onClick={() => onSelectOption(1)}
        className={selectedOption === 1 ? "selected" : ""}
      />
      <NumberCircle
        content="3"
        size={30}
        onClick={() => onSelectOption(2)}
        className={selectedOption === 2 ? "selected" : ""}
      />
    </div>
  );
};
