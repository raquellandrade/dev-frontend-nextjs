'use client'
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-900/10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/produtos" className="text-sm/6 font-semibold text-gray-900">
                Produtos
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Athena App</span>
          <Image className="h-[50px] w-auto" src="/logo-athena-app.png" alt="Logo" width={150} height={100} priority/>
        </Link>
        <div className="flex flex-1 justify-end">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Athena App</span>
              <Image className="h-[50px] w-auto" src="/logo-athena-app.png" alt="Logo" width={150} height={100}/>
            </Link>
            <div className="flex flex-1 justify-end">
              <Link href="#" className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <Link href="/produtos" className="text-sm/6 font-semibold text-gray-900">
                Produtos
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
