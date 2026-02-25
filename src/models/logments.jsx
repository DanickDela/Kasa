/**
 * Représente un logement Kasa
 */
export class LogementService {
  /**
   * @param {object} acc - Données brutes du JSON
   */
  constructor(acc) {
    this._id = acc.id;
    this._title = acc.title;
    this._cover = acc.cover;
    this._pictures = acc.pictures ?? [];
    this._description = acc.description ?? "";
    this._host = acc.host ?? { name: "", picture: "" };
    this._rating = Number(acc.rating ?? 0);
    this._location = acc.location ?? "";
    this._equipments = acc.equipments ?? [];
    this._tags = acc.tags ?? [];
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get cover() {
    return this._cover;
  }
  get pictures() {
    return this._pictures;
  }
  get description() {
    return this._description;
  }
  get hostName() {
    return this._host?.name ?? "";
  }
  get hostPicture() {
    return this._host?.picture ?? "";
  }
  get rating() {
    return this._rating;
  }
  get location() {
    return this._location;
  }
  get equipments() {
    return this._equipments;
  }
  get tags() {
    return this._tags;
  }

  get ratingStars() {
    const r = Math.min(5, Math.max(0, this._rating));
    return Array.from({ length: 5 }, (_, i) => i < r);
  }
}