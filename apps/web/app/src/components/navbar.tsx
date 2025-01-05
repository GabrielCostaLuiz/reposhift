'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoRocket, IoRocketOutline } from 'react-icons/io5'
import {
  MdSignalWifiStatusbar3Bar,
  MdSignalWifiStatusbar4Bar,
} from 'react-icons/md'
import { PiHouseBold, PiHouseFill } from 'react-icons/pi'

import FormSignOutGithub from '@/components/form-sign-out'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUserStore } from '@/store/user'
import useStore from '@/store/useStore'

const itemsNavBar = [
  {
    name: 'Home',
    href: '/',
    icon: <PiHouseBold size={24} />,
    iconCurrentLink: <PiHouseFill size={24} />,
  },
  {
    name: 'Favoritos',
    href: '/favoritos',
    icon: <FaRegHeart size={24} />,
    iconCurrentLink: <FaHeart size={24} />,
  },
  {
    name: 'Jornada',
    href: '/jornada',
    icon: <IoRocketOutline size={24} />,
    iconCurrentLink: <IoRocket size={24} />,
  },
  {
    name: 'Status',
    href: '/status',
    icon: <MdSignalWifiStatusbar3Bar size={24} />,
    iconCurrentLink: <MdSignalWifiStatusbar4Bar size={24} />,
  },
]

export default function NavBar() {
  const pathName = usePathname()
  const user = useStore(useUserStore, (state) => state.user)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 shadow-lg md:sticky md:top-0 md:h-screen md:w-20 lg:w-24">
      <div className="flex h-16 flex-row items-center justify-between p-3 md:h-full md:flex-col md:p-4">
        <nav className="flex-1 w-full">
          <ul className="flex flex-row items-center justify-around gap-2 md:flex-col md:gap-6">
            {itemsNavBar.map((item) => {
              const currentLink = pathName === item.href
              return (
                <li
                  key={item.name}
                  className={`
                    group relative flex w-16 flex-col items-center rounded-xl p-2 transition-all
                    ${currentLink ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-purple-400'}
                    md:w-full
                  `}
                >
                  <Link href={item.href} className="flex flex-col items-center">
                    <span className="text-current transition-colors">
                      {currentLink ? item.iconCurrentLink : item.icon}
                    </span>
                    <span className="mt-1 text-xs text-current transition-colors md:text-sm">
                      {item.name}
                    </span>
                    {currentLink && (
                      <span className="absolute -left-1 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-purple-500 md:left-0 md:top-0 md:h-full md:w-1 md:translate-y-0" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="relative md:mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="h-8 w-8 ring-2 ring-purple-500 ring-offset-2 ring-offset-zinc-950 transition-all hover:ring-purple-400 md:h-10 md:w-10">
                <AvatarImage
                  src={user?.avatarUrl || '/default-avatar.png'}
                  alt={user?.name || 'Avatar'}
                />
                <AvatarFallback className="bg-purple-500 text-white">
                  {user?.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="right"
              className="w-56 bg-zinc-900 text-gray-100"
              align="end"
              sideOffset={8}
            >
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-purple-400">
                    {user ? user.name : 'Minha Conta'}
                  </p>
                  {user?.email && (
                    <p className="text-xs leading-none text-gray-400">{user.email}</p>
                  )}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-800" />
              {user?.admin && (
                <DropdownMenuItem className="focus:bg-zinc-800 focus:text-purple-400">
                  <Link href="/admin/templates" className="w-full">
                    Adicionar Portfolio
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem className="focus:bg-red-500/20 focus:text-red-400">
                <FormSignOutGithub />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}