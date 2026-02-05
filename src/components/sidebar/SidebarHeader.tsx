"use client";
import { FlaskConical, LogOut } from "lucide-react";
import { useModal } from "@/context/modal/ModalContext";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function SidebarHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { modal } = useModal();
  const router = useRouter();

  const handleLogout = () => {
    modal.showModal({
      title: "Desconectar",
      message: "¿Estas seguro que deseas desconectarte?",
      okText: "Si, seguro!",
      cancelText: "No",
      variant: "warning",
      onOk: async () => {
        router.push("/login");
      },
    });
  };

  const mockUser = {
    id: "1234",
    email: "gbarrerasaezgonzalo@gmail.com",
    user_metadata: {
      full_name: "Gonzalo Barrera",
      avatar_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjW2P0jIOiGU6Llornqb3DDhqbbOZoLIOBjvz6UcvOAMsacqTwWCZFTGVFR_I9b6QDeJaetafZ9KkdFmegs-pmfxgn4lSTotL7zg0ru7ZZEjm3bPzKpQ7NIYwpCtUs5k6kFDs3rtWd-XJW0JxeK8AUWqg6Fa65komYHdDH8p1qFp4R-Omr5HoTGDOyNo6zN8RDBqfc1oMpD764WtqPDNECusrzD7__NwTomKik3p-eB3cQ2FvMpXGZTtSkDS548p8IUFGjofLcXu1S_FHcwHqjfw7h2TVDNFzRjfRcrwJQkMtNpJzLH4EUH0SNURDP7qvRwm_pFTo7TOfbMx7gTAF58kV8At88LZXpf_yDcqb68lHGlfdrZN7J7UzQe5iMe7Nk9Pxpmmzgj1ZUPAwNjpfH6C9GO2TxkrmWrUAzOASVbndaS-b5V2AC0E92Tk9wyhzsP2B3yiC6oVk3wX3eIig8WD_H8OsVg2ZY_6U4zjx6BIycsBIpKUsBWPkJEsVNl3JOCenarVD7JhO3-DKMZQMiaPyYE92hqXytpYByqrcD87ljpfdY9oVvJq9t4ayITsI7yfQnTQjOGHhiQWy5zARV1shF7OZsemf1Cr4CajKluWgmpKUCHBkrsr4M-ptKjg1KmKH21_DaTs4NfZ2KEzr0CdTXD6myKlIuFmLM8Zj29lRCAKlAKa_9XJJrZNy3_Yv7Oik6gomW3cyucHJSfQcsB37UDE0H4OKmPBVzaBxYMmnvrVug3dx4_IbcCEFQI_ExXkZi5pdfP6z_62PztAVcYYAvzlHuTZB0hRfwutIFt1YJkz6b857s3p60oxsNnA_dJPez9DDC_RUEeyuDoGA2pPKedOOTw3oq03ebfQ2aBFPt-gkoGQSogr2hMVlTCXFYrmi17L_1BpfAkWmDC4JdTvZfTyhzoIkg9YfVuK_e8RqqhGNLGaAF60jlOOWL6LLV6QuFvrJssh51zYmmZsaUOklImDy5qIRkh6Z2WWWebj2U69Bul40fUf-NnevVg5ZAupQrxEka1_6zG5qmysM6Hl7mxfCoQKKsBsNGx06CYfOTe191-o6g=s400-c",
    },
  };

  return (
    <div className="flex gap-4 justify-between">
      <Link href="/">
        <div className="flex gap-4 cursor-pointer" onClick={() => {}}>
          <FlaskConical size={32} />
          <h2 className="mb-6 text-2xl font-bold text-white">Prompt Lab</h2>
        </div>
      </Link>

      <div
        className="relative inline-block"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div
          className={`w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center 
                    ${menuOpen ? "ring-2 ring-blue-500" : ""} `}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-zinc-300">
            {mockUser.user_metadata.full_name.charAt(0)}
          </span>
        </div>

        <div
          className={`
              absolute right-0 mt-2 w-60 bg-zinc-800 text-gray-200 rounded-lg shadow-lg
              transition-all duration-200 transform origin-top border border-blue-500
              ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
              z-50
            `}
        >
          <div className="flex flex-col p-3 gap-1">
            <span className="font-semibold text-blue-400">
              {mockUser.user_metadata.full_name}
            </span>
            <span className="text-gray-400 text-sm truncate">
              {mockUser.email}
            </span>
            <button
              className="mt-2 w-full flex items-center justify-center gap-2 bg-transparent border cursor-pointer text-white text-sm py-1 rounded hover:bg-zinc-700 "
              onClick={handleLogout}
            >
              <LogOut size={14} /> Desconectar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
