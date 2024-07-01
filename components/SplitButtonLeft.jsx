import Image from "next/image";
import Button from "./Button";

const SplitButtonLeft = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-grey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 min-h-[514px] items-center py-24">
        <div className="flex flex-col gap-4 items-start">
          <h3>Diseñamos Tu Presencia Digital</h3>
          <p>
            Transformamos tus ideas en realidad digital. Creamos sitios web que
            no solo lucen espectaculares, sino que también ofrecen una
            experiencia de usuario excepcional. <br></br> Nos enfocamos en la
            funcionalidad, el diseño responsive y la optimización SEO para
            asegurar que tu sitio web destaque en la era digital. Conecta con
            nosotros y da el primer paso hacia una presencia online inolvidable.
          </p>
          <Button
            link="https://wa.me/+5363669268"
            label="Empieza tu Proyecto Web"
          />
        </div>
        <Image
          src="/web-design.svg"
          width={1054}
          height={719}
          alt="Diseño web"
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SplitButtonLeft;
