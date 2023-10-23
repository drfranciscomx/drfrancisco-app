import ContainerComponent from "@/components/containers/ContainerComponent";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import noPageImage from "@/images/DrFRodriguez-logo.png"

const NotFoundPage = () => {
  return (
    <ContainerComponent className="flex items-center justify-center py-20 px-10">
      <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <Image src={noPageImage} alt="404 Page Not Found" width={400}/>
        <h2 className="text-4xl sm:text-2xl font-bold text-center text-white">Tu página no fue encontrada</h2>
        <p className="text-base font-medium text-center text-white">
        ¡Ups! La página que buscas no existe. Podría haber sido
           movido o eliminado.
        </p>
        <Link
          href={"/"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-yellow-600 hover:text-white duration-200"
        >
          Regresar al Inicio
        </Link>
        
      </div>
    </ContainerComponent>
  );
};

export default NotFoundPage;