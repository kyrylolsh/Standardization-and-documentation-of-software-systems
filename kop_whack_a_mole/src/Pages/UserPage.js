import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();

  return <h2>Користувач ID: {id}</h2>;
};

export default UserPage;