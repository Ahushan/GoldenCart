const LayoutContainer = ({ children, className = "" }) => {
  return (
    <div
      // className={`mx-auto px-2 sm:px-4 w-full max-w-screen-xl ${className}`}
    >
      {children}
    </div>
  );
};
export default LayoutContainer;