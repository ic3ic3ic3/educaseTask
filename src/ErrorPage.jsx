import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div>Somthing went wrong! Maybe a wrong url </div>
      <Link to={"/"}> Home </Link>
    </div>
  );
}

export default ErrorPage;
