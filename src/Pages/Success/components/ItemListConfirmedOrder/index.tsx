import { ReactNode } from 'react'
import { ContainerItemListConfirmedOrder, ContentIcon, IconVariant } from "./styles";

interface ItemListConfirmedOrderProps {
  children: ReactNode;
  variant: IconVariant; 
} 

export function ItemListConfirmedOrder({ children,  variant }: ItemListConfirmedOrderProps) {
  return (
    <ContainerItemListConfirmedOrder>
      <ContentIcon variant={variant}>
        { children }
      </ContentIcon>
    </ContainerItemListConfirmedOrder>
  );
}