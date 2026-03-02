import { useParams, Navigate } from "react-router-dom";
import styles from "../../styles/annonce.module.scss";
import data from "../../datas/logements.json";
import Collapse from "../../components/collapse/collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import Personne from "../../components/Personne/Personne";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";

function Annonce() {
  const { id } = useParams();
  const logement = data.find((l) => l.id === id);

  if (!logement) return <Navigate to="/404" replace />;

  const equipement =
    logement.equipments &&
    logement.equipments.map((item, index) => (
      <li key={index} className={styles.equipList}>
        {item}
      </li>
    ));

  return (
    <>
      <Carrousel slides={logement.pictures} />
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
              <Rating rating={parseInt(logement.rating)} />
            </span>
          </div>
        </div>
        <div className={styles.details}>
          <Collapse
            id={`${logement.id}-desc`}
            aboutTitle="Description"
            aboutText={logement.description}
          />
          <Collapse
            id={`${logement.id}-equip`}
            aboutTitle="Équipements"
            aboutText={equipement}
          />
        </div>
      </section>
    </>
  );
}

export default Annonce;
