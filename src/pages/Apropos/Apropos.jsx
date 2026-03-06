import "../../styles/common.scss";
import Banner from "../../components/Banner/Banner";
import data from "../../datas/abouttext.json";
import ModelFactory from "../../models/modelfactory.jsx";
import aproposBanner from "../../assets/apropos-banner.png";
import styles from "../../styles/apropos.module.scss";
import Collapse from "../../components/Collapse/Collapse";

/**
 * Page À propos
 *
 * Affiche :
 * - Une bannière spécifique à la page
 * - Une liste de sections repliables (Collapse)
 *
 * Fonctionnement :
 * - Les données JSON sont transformées via ModelFactory
 * - Chaque élément génère un composant Collapse
 *
 * Architecture :
 * - Séparation des données (abouttext.json)
 * - Transformation métier (ModelFactory)
 * - Présentation via composants réutilisables (Banner, Collapse)
 *
 * @component
 * @returns {JSX.Element} Page À propos contenant la bannière et les sections descriptives
 */

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
