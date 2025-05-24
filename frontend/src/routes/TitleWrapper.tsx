import { useEffect } from "react";

export default function TitleWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
}

