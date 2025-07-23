import { HeartIcon } from '@heroicons/react/24/solid'
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <p className="mt-8 text-center items-center text-sm/6 text-gray-400 md:order-1 md:mt-0 flex">
            &copy; 2025 Athena App - Feito com <HeartIcon aria-hidden="true" className="size-4 ml-1.5" />
          </p>
        </div>
      </footer>
    )
  }
  