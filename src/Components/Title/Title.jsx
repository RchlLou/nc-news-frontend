import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();
    return (
      <header onClick={()=>navigate(`articles`)}>
        <h1>NC NEWS</h1>
      </header>
    );
  }
  