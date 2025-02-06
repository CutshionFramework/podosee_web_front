import { useParams } from "react-router-dom";

export default function IntegratedSolution() {
  const { id } = useParams();

  return (
    <div>
      <h3>IntegratedSolution</h3>
      <p>어떤 카테고리를 선택했는지 : {id}</p>
    </div>
  );
}
