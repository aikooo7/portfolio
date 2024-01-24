import { ReactNode } from "react";

interface CenteredTitleProps {
  children: ReactNode;
}

export default function CenteredTitle(props: CenteredTitleProps) {
  return (
    <div className="mx-auto w-1/2 text-center">
      <h1 className="text-3xl mt-5 font-bold">{props.children}</h1>
    </div>
  );
}
