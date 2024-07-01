import Image from "next/image";
import Button from "./Button";

const SplitImageLeft = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
        <Image
          src="/girl-influencer.svg"
          width={1054}
          height={672}
          alt="Redes sociales"
          className="w-full h-auto rounded-3xl"
        />
        <div className="flex flex-col gap-4 items-start">
          <h3>Gestión de plataformas sociales</h3>
          <p>
            Captamos la esencia de tu marca y la transmitimos a través de
            contenido visual y escrito que resuena con tu audiencia, asegurando
            que tu mensaje no solo sea visto, sino también recordado.
          </p>
          <Button
            link="https://wa.me/+5350692027"
            label="Empieza a destacar en las redes.."
            white={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitImageLeft;
