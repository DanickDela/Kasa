import "../../styles/common.scss";
import Banner from "../../components/Banner/Banner";
import data from "../../datas/abouttext.json";
import ModelFactory from "../../models/modelfactory.jsx";
import aproposBanner from "../../assets/apropos-banner.png";
import styles from "../../styles/apropos.module.scss";
import Collapse from "../../components/collapse/collapse";

function Apropos() {
  const service = ModelFactory.createAproposServices(data);

  return (
    <>
      <Banner image={aproposBanner} overlayColor="0,0,0" overlayOpacity={0.3} />

      <section className={styles.ServContainer}>
        {service.map((serv) => (
          <Collapse
            key={serv.id}
            id={serv.id}
            aboutTitle={serv.title}
            aboutText={serv.aserv}
            className={styles.ServItem}
          />
        ))}
      </section>
    </>
  );
}

export default Apropos;
