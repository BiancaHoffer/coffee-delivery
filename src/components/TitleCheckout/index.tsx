import { ReactNode } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TitleAddress } from "./styles";

interface TitleCheckoutProps {
  title: string;
  subtitle: string;
  icon: ReactNode
}

export function TitleCheckout({ title, subtitle, icon }: TitleCheckoutProps) {
  return (
    <TitleAddress>
      {icon}
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </TitleAddress>
  )
}