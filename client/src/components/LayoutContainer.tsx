import { ReactNode } from "react";

type LayoutContainerPropTypes = {
  children: ReactNode,
  className?: string
}

const LayoutContainer = ({ children, className = "" } : LayoutContainerPropTypes) => {
  return (
    <div
      className={`mx-auto px-2 sm:px-4 w-full max-w-screen-xl ${className}`}
    >
      {children}
    </div>
  );
};
export default LayoutContainer;