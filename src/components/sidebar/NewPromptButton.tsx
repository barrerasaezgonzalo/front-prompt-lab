import Link from "next/link";

export function NewPromptButton() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium mb-4 cursor-pointer"
    >
      + Nuevo Prompt
    </Link>
  );
}
