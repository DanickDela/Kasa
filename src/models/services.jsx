/**
 * Représente le  à propos de Kasa
 */
export class AproposService {
  /**
   * @param {object} apropos - Données brutes du JSON
   */
  constructor(apropos) {
    this._id = apropos.id;
    this._title = apropos.title;
    this._aserv = apropos.aserv;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get aserv() {
    return this._aserv;
  }
}
