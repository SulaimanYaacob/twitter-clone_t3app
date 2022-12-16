import React from "react";

export function Container({
  children,
  classNames = "",
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div className={`m-auto max-w-xl ${classNames} bg-slate-300`}>
      {children}
    </div>
  );
}
