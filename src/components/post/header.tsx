import Link from "@/components/link";

interface Props {
  title: string;
  date?: string;
}

export function PostHeader({ title, date }: Props) {
  return (
    <div className="border-b-4 border-gray-300 font-bold">
      <Link href="/writing" noUnderline>
        <i className="nf nf-md-keyboard_backspace" />{" "}Back
      </Link>
      <h1>{title}</h1>
      <span>{date}</span>
    </div>
  );
}
