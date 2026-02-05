"use client";

import { useModal } from "@/context/modal/ModalContext";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function SidebarFooter() {
  return (
    <div className="absolute bottom-6 left-6 flex flex-col">
      <div className="text-xs text-gray-500 flex gap-2 ">
        <Link href="/legal" className="text-gray-400 hover:text-gray-300">
          Legal
        </Link>
        <Link href="/contacto" className="text-gray-400 hover:text-gray-300">
          Contacto
        </Link>
      </div>
      <div className="text-xs text-gray-500 flex gap-2 mt-2">
        <p>Versión 2.0.0. Desde chile con ❤️ </p>
      </div>
    </div>
  );
}
