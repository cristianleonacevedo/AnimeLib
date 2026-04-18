import "tailwindcss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className ="", ...props}: InputProps) {
  return (
    <input
      {...props}
      className={`mb-3 p-2 bg-gray-300 ${className}`}
    />
  );
}

export default Input;