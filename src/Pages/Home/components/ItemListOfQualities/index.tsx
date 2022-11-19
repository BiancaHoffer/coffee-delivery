import { ReactNode } from 'react'
import { ContentIcon, IconVariant, ItemContainer } from "./styles";

interface listOfQualitiesProps {
    phrase: string;
    variant: IconVariant;
    Icon: ReactNode;
}

export function ItemListOfQualities({phrase, variant, Icon}: listOfQualitiesProps) {
  return (
    <ItemContainer>
        <ContentIcon variant={variant}>
          { Icon }
        </ContentIcon>
        <p>{phrase}</p>
    </ItemContainer>
  );
}