import "../../styles/common.scss";
import styles from "../../styles/card.module.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../datas/logements.json";
import ModelFactory from "../../models/modelfactory.jsx";
import imgBanner from "../../assets/banner.png";

function Accueil() {
  const logements = ModelFactory.createLogements(data);
  const slogan = "Chez vous, partout et ailleurs";

  return (
    <>
      <Banner
        image={imgBanner}
        title={slogan}
        overlayColor="0,0,0"
        overlayOpacity={0.6}
      />

      <div className={styles.card__container}>
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            imageUrl={logement.cover}
          />
        ))}
      </div>
    </>
  );
}

export default Accueil;
