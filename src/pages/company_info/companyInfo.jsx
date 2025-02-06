import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PageTitle from "../../components/page_title/pageTitle";
import styles from './companyInfo.module.scss';
import { useEffect, useState } from "react";
import { getPartner } from "../../apis/apis";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Company() {

  const [partnerData, setPartnerData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [currentTab, setCurrentTab ] = useState(0);
  const [widths, setWidths] = useState(0);
 
  const handleResize = () => {
    setWidths(window.innerWidth);
  };

  const getData = async () => {
    const url = `https://api.podobot.com/api/partner/getPartner`;
    const config = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        if (response.data.result == 0) {
          setPartnerData(response.data.data.filter((el) => el.status == 2));
        }
      })
      .catch((error) => {});
  };

  const getData2 = async () => {
    const url = `https://api.podobot.com/api/history/getHistory?type=2`
    const config = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
  
    axios.get(url,  config).then((response) => {
  
      if(response.data.result == 0){
          setHistoryData(response.data.data);
          console.log(response.data.data)
      }
    }).catch((error) => {
     
    })
  }


  useEffect(() => {
    getData();
    getData2();
    //  getPartnerItem();
  }, []);

  useEffect(() => {
    setWidths(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widths]);

  const menuArr = [
    { krName: '대표이사 인사말', enName: '대표이사 인사말영어'},
    { krName: '회사 연혁', enName: '연혁 영어' },
    { krName: '오시는 길', emName: '오시는 길 영어'},
    { krName: '제휴사', emName: '제휴사 영어'},
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  }

  const getDescription = () => {
    if(currentTab == 0) {
      return(
        <div className={styles.ceo_greeting}>
        <p>
       <strong>포도씨 방문을 환영합니다.</strong>
     </p>

       <p>포도씨는 서로 다른 배경과 경험을 가진 사람들이 모인 곳입니다.
         <br></br>그러나 같은 방향을 바라보고 있습니다.
         <br></br>그 속에서 각자의 꿈을 이루기 위해 함께 노력하고 있습니다.</p>
         <p>
       <strong style={{color:'#8A41F0'}}>Think free, thank all !</strong>
     </p>

     <p>포도씨의 기업이념은 개개인의 생각을 자유롭게 표현하여 모두에게 기여할 수 있는 
     <br></br>상품과 서비스를 제공함으로써 세상에 감사할 수 있는 기회를 만드는 것입니다.
         <br></br>변화하는 시대속에서 삶의 가치를 높이고 행복을 추구하겠습니다.
         <br></br>최선의 노력으로 성장해 나가겠습니다.

         <br></br>홈페이지를 방문해 주신 모든 분들께 건강과 행운이 함께 하시길 기원합니다.
        그 속에서 각자의 꿈을 이루기 위해 함께 노력하고 있습니다.
       
        <br></br>
        <br></br>
        <br></br>감사합니다.
        <br></br>
        <br></br>
        <br></br>대표이사 모신희

        </p>
         <p></p>

     </div>
      )
    }else if(currentTab == 1){
      return(
        <div style={{ width: 
        widths > 991 ?
        "60%" : "100%", padding: "20px", fontFamily: "Pretendard"}}>
        {Object.keys(historyData)
          .sort((a, b) => b - a)
          .map((year, i) => (
            <div
              key={year}
              style={{
                display: "grid",
                gridTemplateColumns: "0.3fr 1fr",
                gap: "20px",
                paddingBottom: "2vw",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: widths > 991 ? "1.5vw" : "4.5vw",
                }}
              >
                {year}
              </div>
              <div style={{ display: "flex", flexDirection: "column", fontSize: "1vw" }}>
                {Object.keys(historyData[year])
                  .sort((a, b) => a - b) 
                  .map((month) => (
                    <div key={month} style={{ marginBottom: "1vw" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start", 
                          fontSize: "1vw",
                          flexDirection: widths > 991 ? "row" : "column"
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 400,
                            marginRight: "1vw",
                            fontSize: widths > 991 ? "1vw" : "4vw",
                            width:widths > 991 ? '10%' : '100%'
                          }}
                        >
                          {month}월
                        </div>
                        <div>
                          {historyData[year][month].kr.map((detail, k) => (
                            <div
                              key={k}
                              style={{
                                fontWeight: 400,
                                fontSize: widths > 991 ? "1vw" : "4vw",
                                marginBottom: k === historyData[year][month].kr.length - 1 ? "1.5vw" : "1vw",
                              }}
                            >
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
      )
    }else if(currentTab == 2){
      return(
        <div className="row">
          <div className={styles.events_details_location}>
            <iframe
            style={{
              width:'100%',
              height:400
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.103666917419!2d126.88647623196432!3d37.517796980052985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e8af0bbfb8b%3A0x8e5a3c8588c58e41!2zKOyjvCntj6zrj4TslKg!5e0!3m2!1sko!2skr!4v1712015536755!5m2!1sko!2skr"></iframe>

            <div style={{
               width: '100%',
               backgroundColor: "rgb(245, 245, 245)",
               display: 'flex',
              alignItems:'center',
              flexDirection: widths > 991 ? 'row' : 'column',
              gap:'2vw',
              paddingBottom:20,
              paddingTop:20
            }}>
              <div style={{display:'flex', flex:1, alignItems:'center', flexDirection: widths > 991 ? "row" : "column"}}>
                <div style={{fontSize: widths > 991 ? '2vw' : '5vw', fontWeight:'bold', marginRight: '2vw'}}>ADDRESS</div>
                <div style={{fontSize: widths > 991 ? '1.3vw' : '4vw', fontWeight:400}}>
                  서울시 영등포구 선유로 9길 10, 709호 (문래 SK V1 Center)
                </div>
              </div>

              <div style={{display:'flex', flex:1, alignItems:'center', flexDirection: widths > 991 ? "row" : "column"}}>
              <div style={{fontSize: widths > 991 ? '2vw' : '5vw', fontWeight:'bold', marginRight:'2vw'}}>TEL</div>
              <div style={{fontSize: widths > 991 ? '1.3vw' : '4vw', fontWeight:400}}>070-8959-2960</div>
                </div>
            </div>
          </div>
        </div>
      )
    }else if(currentTab == 3){
      return(

        <div style={widths > 991 ? {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16
        }: {
          display:'flex', flexDirection:'column',
          alignItems:'center'
        }}>
       {partnerData.map((con, i) => {
          return (
            <div style={{ width: 
            widths > 991 ? 
            "calc(33.33% - 16px)" : '80%', borderRadius:10, height:400, border: '1px solid rgb(245, 245, 245)'}}>
                <a 
                target="_blank"
                href={con.url[0]}>
                    <div className={styles.partner_imgbox}>
                      <img
                        // src={`http://61.97.190.39:3535/getImgs/${con.img}`}
                        src={`https://api.podobot.com/public/img/${con.img}`}
                        alt="image"
                        style={{objectFit:'contain', width:'70%'}}
                      />
                    </div>

                    <div
                      className="partner_content_box"
                      style={{
                        height: "auto",
                        minHeight: 200,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor:'rgb(245, 245, 245)',
                        paddingLeft:20,
                      }}
                    >
                      <p
                        className="parter_title_text"
                        style={{
                          color: "#030303",
                          fontFamily: "Pretendard",
                          fontWeight: 700,
                        }}
                      >
                          {con.title}
                      </p>
                    
                      <div style={{paddingBottom:20}}>
                        {con.url.map((link, i) => {
                          return (
                            <a
                            key={i}
                            style={{
                              fontFamily: "Pretendard",
                              color: "#030303",
                              fontWeight: 400,
                              display: "inline-block",
                              maxWidth: "100%",
                              overflow: "hidden",
                              textOverflow: "ellipsis", 
                              whiteSpace: "nowrap",
                            }}
                            // href={link}
                            className="partner_link_text"
                            title={link} 
                          >
                              {link}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </a>
              </div>
          );
        })
      }
        </div>
      )
      
    }
  }

  return (
    <>
    <Header />
    <div className='company'>
      <section className='page_title'>
        <PageTitle title={"메롱"}/>
      </section>

      <div className={styles.container}>
    <>
    <div className={widths <= 991 ? styles.mobile_tabbox : styles.tabbox}>
    {menuArr.map((ele, index)=>{
      return (
      <li
      style={{fontSize:widths > 991 ? '1.2vw' : '2.5vw', padding:'10px 10px'}}
      key={index}
      className={currentTab === index ? styles.submenu_focused : styles.submenu}
      onClick={()=> selectMenuHandler (index)}
      >
        {ele.krName}
      </li>

    )
    })}

          </div>
        <div className={styles.box}>
          {getDescription()}

</div>

    </>
        
      
      </div>

     
    </div>
    <Footer />
  </>
  );
}
