import { Eye, Heart, Send } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const BlogInfo: React.FC = () => {
  return (
    <div className="col-span-3">
      <div className="flex items-center justify-center min-[1440px]:justify-start space-x-3.5 py-5 lg:py-10 lg:pl-[60px] lg:justify-start min-[1440px]:pl-10 min-[1440px]:py-[50px]">
        <Button
          variant="link"
          className="bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8"
        >
          <Heart className="w-4 h-4 mr-1 fill-red-500 stroke-none" />
          24.5k
        </Button>
        <Button
          variant="link"
          className="bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8"
        >
          <Eye className="w-4 h-4 mr-1" />
          50k
        </Button>
        <Button
          variant="link"
          className="bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8"
        >
          <Send className="w-4 h-4 mr-1" />
          206
        </Button>
      </div>

      <Separator />
      
      <div className="py-10 min-[1440px]:pl-10">
        <div className="grid grid-cols-2 text-sm gap-x-5">
          <div className="space-y-1">
            <h5 className="text-[#98989A]">Data de publicação</h5>
            <p className="font-medium">16 de Abril, 2024</p>
          </div>
          <div className="space-y-1">
            <h5 className="text-[#98989A]">Categoria</h5>
            <p className="font-medium">React</p>
          </div>
          <div className="space-y-1 mt-5 xl:mt-7">
            <h5 className="text-[#98989A]">Tempo de leitura</h5>
            <p className="font-medium">5 min</p>
          </div>
          <div className="space-y-1 mt-5 xl:mt-7">
            <h5 className="text-[#98989A]">Nome do autor</h5>
            <p className="font-medium">Vinicius O. Rubia</p>
          </div>
        </div>

        <div className="mt-[30px]">
          <h3 className="text-[#98989A] mb-2.5">Tabela de conteúdo</h3>
          <ul className="p-[18px] rounded bg-[#1A1A1A] text-sm space-y-4 list-disc [&>li]:ml-[18px]">
            <li>Introdução</li>
            <li>O que é o useState?</li>
            <li>Por que o useState é Importante?</li>
            <li>Exemplo Prático</li>
            <li>Conclusão</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
