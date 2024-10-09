import { sum } from "@repo/utils";

export default function Home() {
  return (
    <div className="underline">
      Hello world from web!
      <div>sum = {sum(1, 3)}</div>
    </div>
  );
}
