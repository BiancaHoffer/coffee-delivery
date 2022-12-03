import { BarLoader } from "react-spinners";
import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <BarLoader
        color='#DBAC2C'
        width={280}
      />
    </LoadingContainer>
  )
}