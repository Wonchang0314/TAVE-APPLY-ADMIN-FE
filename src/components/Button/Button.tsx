interface ButtonProps {
  text: string;
  width?: string;
  className?: string;
}

const Button = ({ text, width, className }: ButtonProps) => {
  return (
    <button
      className={`px-3 py-4 text-semibold text-white bg-blue-500 rounded-lg ${width} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
