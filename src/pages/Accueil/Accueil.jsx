import "../../styles/common.scss";
import styles from "../../styles/accueil.module.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../datas/logements.json";
import ModelFactory from "../../models/modelfactory.jsx";
import imgBanner from "../../assets/banner.png";

/**
 * Page Accueil
 *
 * Affiche :
 * - Une bannière principale avec slogan
 * - La liste des logements sous forme de cartes
 *
 * Fonctionnement :
 * - Les données JSON sont transformées via ModelFactory
 * - Chaque logement est instancié via le modèle métier
 * - Les cartes sont générées dynamiquement avec .map()
 *
 * Architecture :
 * - Séparation données (JSON)
 * - Transformation métier (ModelFactory + LogementService)
 * - Présentation via composants (Banner, Card)
 *
 * @component
 * @returns {JSX.Element} Page d’accueil contenant la bannière et la grille des logements
 */

function Accueil() {
  const logements = ModelFactory.createLogements(data);
  const slogan = (
    <>
      Chez vous, <span className={styles.mobileBreak}> </span>
      partout et ailleurs
    </>
  );

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
