import { FaMapMarkerAlt,  FaRegClock, FaRegSnowflake } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";

export const iconList = {
  Mapa: FaMapMarkerAlt,
  Relogio:  FaRegClock,
  Telefone: BsTelephone,
  CheckFill: RiShieldCheckFill,
  RegSnowflake: FaRegSnowflake,
} as const;

export type IconName = keyof typeof iconList;