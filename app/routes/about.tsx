import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to About!" },
  ];
};

export default function Countdown() {
  return (
    <div>
      <div className="flex justify-center">
        <h1>About Page</h1>
      </div>
    </div>
  );
}
