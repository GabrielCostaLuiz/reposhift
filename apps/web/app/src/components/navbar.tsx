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
    icon: <PiHouseBold size={20} />,
    iconCurrentLink: <PiHouseFill size={20} />,
  },
  {
    name: 'Favoritos',
    href: '/favoritos',
    icon: <FaRegHeart size={18} />,
    iconCurrentLink: <FaHeart size={18} />,
  },
  {
    name: 'Jornada',
    href: '/jornada',
    icon: <IoRocketOutline size={20} />,
    iconCurrentLink: <IoRocket size={20} />,
  },
  {
    name: 'Status',
    href: '/status',
    icon: <MdSignalWifiStatusbar3Bar size={20} />,
    iconCurrentLink: <MdSignalWifiStatusbar4Bar size={20} />,
  },
]

export default function NavBar() {
  const pathName = usePathname()
  const user = useStore(useUserStore, (state) => state.user)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 shadow-lg md:sticky md:top-0 md:h-screen md:w-20 lg:w-24">
      <div className="flex h-14 flex-row items-center justify-between p-2 md:h-full md:flex-col md:p-3">
        <nav className="w-full flex-1">
          <ul className="flex flex-row items-center justify-around gap-1 md:flex-col md:gap-4">
            {itemsNavBar.map((item) => {
              const currentLink = pathName === item.href
              return (
                <li
                  key={item.name}
                  className={`
                    group relative flex w-14 flex-col items-center rounded-xl p-1.5 transition-all
                    ${currentLink ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-purple-400'}
                    md:w-full
                  `}
                >
                  <Link href={item.href} className="flex flex-col items-center">
                    <span className="text-current transition-colors">
                      {currentLink ? item.iconCurrentLink : item.icon}
                    </span>
                    <span className="mt-0.5 text-[10px] text-current transition-colors md:text-xs">
                      {item.name}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="relative md:mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="h-7 w-7 md:h-8 md:w-8">
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
                    <p className="text-xs leading-none text-gray-400">
                      {user.email}
                    </p>
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
