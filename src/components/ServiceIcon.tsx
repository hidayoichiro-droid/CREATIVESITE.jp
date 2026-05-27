import {
  FaLaptopCode,
  FaRobot,
  FaWindows,
  FaWifi,
  FaShieldHalved,
  FaPuzzlePiece,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const MAP: Record<string, IconType> = {
  FaLaptopCode,
  FaRobot,
  FaWindows,
  FaWifi,
  FaShieldHalved,
  FaPuzzlePiece,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? FaPuzzlePiece;
  return <Cmp className={className} />;
}
