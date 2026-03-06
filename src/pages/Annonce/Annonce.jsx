import { useParams, Navigate } from "react-router-dom";
import styles from "../../styles/annonce.module.scss";
import data from "../../datas/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Gallery from "../../components/Gallery/Gallery";
import Personne from "../../components/Personne/Personne";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
/**
 * Page Annonce
 *
 * Affiche le détail complet d’un logement sélectionné.
 *
 * Fonctionnement :
 * - Récupère l’id via useParams()
 * - Recherche le logement correspondant dans les données JSON
 * - Redirige vers /404 si aucun logement trouvé
 *
 * Structure :
 * - Carrousel d’images
 * - Informations principales (titre, localisation, tags)
 * - Informations hôte + notation
 * - Sections repliables (Description / Équipements)
 *
 * @component
 * @returns {JSX.Element} Page détaillée d’un logement
 */

function Annonce() {
  const { id } = useParams();
  /**
   * Recherche du logement correspondant à l’ID présent dans l’URL
   */
  const logement = data.find((l) => l.id === id);
  /**
   * Redirection vers la page 404 si le logement n’existe pas
   */
  if (!logement) return <Navigate to="/404" replace />;

  /**
   * Génération dynamique de la liste des équipements
   */

  const equipement =
    logement.equipments &&
    logement.equipments.map((item, index) => (
      <li key={index} className={styles.equipList}>
        {item}
      </li>
    ));

  return (
    <>
      <Gallery slides={logement.pictures} />
      <section>
        <div className={styles.description}>
          <div className={styles.description__infos}>
            <h1 className={styles.description__infos__title}>
              {logement.title}
            </h1>
            <p className={styles.description__infos__location}>
              {logement.location}
            </p>

            <ul className={styles.description__infos__tag}>
              {logement.tags?.map((tag, index) => (
                <Tag key={`${logement.id}-tag-${index}`} TagName={tag} />
              ))}
            </ul>
          </div>

          <div className={styles.description__host}>
            <Personne
              name={logement.host.name}
              avatar={logement.host.picture}
            />
            <span className={styles.description__host__rating}>
              <Rating rating={Number(logement.rating)} />
            </span>
          </div>
        </div>
        <div className={styles.details}>
          <Collapse
            id={`${logement.id}-desc`}
            aboutTitle="Description"
            aboutText={logement.description}
            fontdesktop="18px"
            fontmobile="13px"
          />
          <Collapse
            id={`${logement.id}-equip`}
            aboutTitle="Équipements"
            aboutText={equipement}
            fontdesktop="18px"
            fontmobile="13px"
          />
        </div>
      </section>
    </>
  );
}

export default Annonce;
