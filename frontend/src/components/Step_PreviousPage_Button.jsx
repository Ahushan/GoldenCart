import { Link } from "react-router-dom";

const Step_PreviousPage_Button = () => {
  return (
    <>
      <div className="prev_btn absolute left-4 top-4">
        <Link
          className="text-black font-mono font-bold bg-slate-400 rounded-full text-2xl px-4 py-2"
          to={"/"}
        >
          {" < "}
        </Link>
      </div>
    </>
  );
};

export default Step_PreviousPage_Button;
