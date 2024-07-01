import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="pt-12 pb-24 flex flex-col items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 text-left min-h-[512px] gap-24 items-center">
        <div className="grid gap-12 items-start">
          <h1>Ideas que Vuelan, Negocios que Crecen</h1>
          <p>
            Impulsamos tu visión y construimos tu éxito. Creemos en el poder de
            las ideas y en la pasión de los emprendedores. Nuestro enfoque está
            en ayudar a alcanzar las metas con estrategias de marketing digital
            innovadoras y personalizadas.
          </p>
          <div className="items-start font-semibold">
            <Button
              link="https://wa.me/+5350692027"
              label="Habla con nosotros"
            />
          </div>
        </div>
        <Image
          src="/product-launch.svg"
          width={1052}
          height={727}
          alt="Icono del lanzamiento de un producto"
          className="w-full h-auto rounded-3xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
