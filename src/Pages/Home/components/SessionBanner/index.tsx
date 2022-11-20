import { BannerContent, BannerSession } from "./styles";
import image from '../../../../assets/Imagem.svg';
import { BannerListOfQualities } from "../ListOfQualities";
;

export function SessionBanner() {
    return (
        <BannerSession>
        <BannerContent>
          <div>
            <section className="contentText">
              <h1>
                Encontre o café perfeito <br />
                para qualquer hora do dia
              </h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                qualquer hora
              </p>
            </section>
            
            <BannerListOfQualities />   
          </div>

          <div className="contentImage">
            <img src={image} alt="Imagem café" />
          </div>
        </BannerContent>
      </BannerSession>
    )
}