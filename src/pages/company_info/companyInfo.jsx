import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPartner, getHistory } from "../../apis/apis";

export default function CompanyInfo() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id === "partners") {
      getPartnerData();
    } else if (id === "history") {
      getHistoryData();
    }
  }, [id]);

  const getPartnerData = async () => {
    const response = await getPartner();
    console.log(response);
  };

  const getHistoryData = async () => {
    const response = await getHistory();
    console.log(response);
  };

  return (
    <div>
      <h3>CompanyInfo</h3>
      <p>어떤 카테고리를 선택했는지 : {id}</p>
    </div>
  );
}
