import { RotatingLines } from "react-loader-spinner";
const Loading = () => {
  return (
    <RotatingLines
      visible={true}
      height="50"
      width="50"
      color="white"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loading;
