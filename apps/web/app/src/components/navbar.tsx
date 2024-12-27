'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
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
  // {
  //   name: 'Portfólios',
  //   href: '/portfolios',
  //   icon: <FaRegFolderOpen size={24} />,
  //   iconCurrentLink: <FaFolderOpen size={24} />,
  // },
  {
    name: 'Favoritos',
    href: '/favoritos',
    icon: <FaRegHeart size={24} />,
    iconCurrentLink: <FaHeart size={24} />,
  },
]

export default function NavBar() {
  const pathName = usePathname()
  const user = useStore(useUserStore, (state) => state.user)

  return (
    <div className="flex h-16 flex-row items-center justify-between p-3 md:h-full md:flex-col md:p-5">
      <nav className="flex-1">
        <ul className="flex flex-row items-center justify-center gap-8 md:flex-col md:gap-4">
          {itemsNavBar.map((item) => {
            const currentLink = pathName === item.href

            return (
              <li
                key={item.name}
                className={`${
                  currentLink ? 'border border-purple-500 bg-gray-500' : ''
                } w-20 rounded-xl p-2 transition-all hover:scale-105 hover:cursor-pointer`}
              >
                <Link href={item.href}>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs md:text-sm">
                      {currentLink ? item.iconCurrentLink : item.icon}
                    </span>
                    <span className="text-xs md:text-sm ">{item.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage
                src={user?.avatarUrl || '/default-avatar.png'}
                alt={user?.name || 'Avatar'}
              />
              <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            className="bg-white text-black"
            align="end"
            sideOffset={5}
          >
            <DropdownMenuLabel>
              {user ? user.name : 'Minha Conta'}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="mb-2 bg-gray-300" />
            {user?.admin && (
              <DropdownMenuItem>
                <Link href="/admin/templates" className="w-full">
                  Adicionar Portfolio
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="rounded-md bg-red-500 font-bold text-white focus:bg-red-500 focus:text-white">
              <FormSignOutGithub />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
