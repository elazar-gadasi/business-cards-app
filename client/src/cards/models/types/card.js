import { shape, string, number, arrayOf } from "prop-types";
import addressType from "./address";
import imageType from "./image";

const cardType = shape({
  _id: string,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  like: undefined || arrayOf([string]).isRequired,
  web: undefined || string.isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

export default cardType;
