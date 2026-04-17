import "tailwindcss";

type info = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({ type, placeholder, value, onChange }: info) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mb-3 p-2 border-2 rounded"
    />
  );
}

export default Input;