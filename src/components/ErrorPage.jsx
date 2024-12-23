import error from "../assets/error.webp";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center m-20 text-black font-serif">
      <h1 className="mb-10">Oops! Page Not Found</h1>
      <img src={error} alt="error" className="w-1/2 h-full" />
      <br />
    </div>
  );
};
export default ErrorPage;
