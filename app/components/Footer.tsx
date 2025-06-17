"use client";

import { Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logomithari.png"
                alt="Espaço Mithari Logo"
                width={200}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300">Transformando vidas através de terapias holísticas desde 2015.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+55 11 98911 3465</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rua Ana Pereira Melo, 253 - cj 814. Vila Campesina, Osasco - São Paulo, 06023-080, Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>@espacomithari</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <div className="space-y-2 text-gray-300">
              <div>Fisioterapia</div>
              <div>Musicoterapia</div>
              <div>Nutrição Online</div>
              <div>Ginecologia</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Desenvolvido por</h4>
            <Image
              src="/logo02.png"
              alt="Logo HW Desenvolvimento"
              width={100}
              height={50}
              className="w-auto"
            />
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Espaço Mithari. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 