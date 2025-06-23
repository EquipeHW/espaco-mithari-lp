"use client";

import { Button } from "@/components/ui/button";
import { Phone, Instagram, Facebook, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Rotas das landing pages
  const isLanding = [
    "/fisioterapia",
    "/musicoterapia",
    "/nutricao",
    "/ginecologia"
  ].includes(pathname);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`w-full border-b-inherit bg-white`}>
      {/* Faixa Superior com Redes Sociais */}
      <div className="border-b border-gray-100 bg-[#e8566c] text-white">
        <div className="container flex h-10 items-center justify-end">
          <div className="flex items-center gap-4">
            <Link
              href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              className="flex items-center gap-1 text-xs hover:text-white/80 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="h-3 w-3" />
              WhatsApp
            </Link>
            <Link
              href="https://instagram.com/espacomithari"
              target="_blank"
              className="flex items-center gap-1 text-xs hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-3 w-3" />
              Instagram
            </Link>
            <Link
              href="https://facebook.com/espacomithari"
              target="_blank"
              className="flex items-center gap-1 text-xs hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-3 w-3" />
              Facebook
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Fixo */}
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logomithari.png"
              alt="Espaço Mithari Logo"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        {!isLanding && (
          <nav className="hidden md:flex gap-6 mx-auto">
            <Link
              href="/"
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/fisioterapia"
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Fisioterapia
            </Link>
            <Link
              href="/musicoterapia"
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Musicoterapia
            </Link>
            <Link
              href="/nutricao"
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Nutrição
            </Link>
            <Link
              href="/ginecologia"
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Ginecologia
            </Link>
          </nav>
        )}

        <Button asChild className="hidden md:flex border-[#e8566c] text-[#fff] hover:bg-[#e8566c] hover:text-[white] font-bold rounded-xl">
          <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
            <Phone className="mr-2 h-5 w-5" />
            AGENDAR CONSULTA
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isLanding && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="/"
              className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/fisioterapia"
              className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Fisioterapia
            </Link>
            <Link
              href="/musicoterapia"
              className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Musicoterapia
            </Link>
            <Link
              href="/nutricao"
              className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Nutrição
            </Link>
            <Link
              href="/ginecologia"
              className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Ginecologia
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
              <Button className="w-full bg-[#e8566c] hover:bg-[#d64560] text-white font-bold">
                AGENDAR CONSULTA
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 