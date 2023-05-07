import { FC, ReactNode } from 'react';

interface ICustomButton {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  htmlType?: 'submit' | 'button' | 'reset' | undefined
}

const CustomButton: FC<ICustomButton> = (props) => {
  const {
    text,
    onClick = () => null,
    className,
    disabled,
    icon = <></>,
    htmlType = 'submit'
  } = props;

  const buttonClassNames = ['custom-button'];

  if (className) {
    buttonClassNames.push(className);
  }

  if (disabled) {
    buttonClassNames.push('disabled');
  }

  return (
    <button
      className={buttonClassNames.join(' ')}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {icon} {text}
    </button>
  );
};

export default CustomButton;