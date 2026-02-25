import { LogementService } from "./logments.jsx";
import { AproposService } from "./services.jsx";

/**
 * Factory permettant de créer des instances
 * de modèles à partir de données brutes (JSON).
 *
 * @namespace ModelFactory
 */
const ModelFactory = {
  /**
   * Crée une instance de LogementService
   *
   * @function
   * @name ModelFactory.createLogement
   * @param {object} data - Données brutes du logement
   * @returns {LogementService}
   */
  createLogement(data) {
    return new LogementService(data);
  },

  /**
   * Crée une liste de logements à partir d’un tableau JSON
   *
   * @function
   * @name ModelFactory.createLogements
   * @param {Array<object>} dataArray
   * @returns {Array<LogementService>}
   */
  createLogements(dataArray) {
    return dataArray.map((item) => new LogementService(item));
  },

  /**
   * Crée une instance de Apropos les Service
   *
   * @param {object} data - Données brutes (JSON)
   * @returns {AproposService}
   */
  createApropos(data) {
    return new AproposService(data);
  },

  createAproposServices(dataArray) {
    return dataArray.map((item) => new AproposService(item));
  },
};

export default ModelFactory;
