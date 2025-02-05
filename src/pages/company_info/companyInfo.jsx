import { useParams } from "react-router-dom";

export default function CompanyInfo() {
  const { id } = useParams();

  return (
    <div>
      <h3>CompanyInfo</h3>
      <p>어떤 카테고리를 선택했는지 : {id}</p>
    </div>
  );
}
