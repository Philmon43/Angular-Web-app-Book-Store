export interface BookModel {
  id: Number;
  ISBN: Number;
  title: string;
  author: string;
  summary: String;
  image: String;
  price: {
    currency: String;
    value: Number;
    displayValue: String;
  };
  available: Number;
}
