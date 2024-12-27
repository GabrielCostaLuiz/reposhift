// components/FilterBar.tsx
import { Badge } from './ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

interface FilterBarProps {
  totalItems: number
  categories: string[]
  onCategoryChange: (category: string) => void
  onSortChange: (sort: string) => void
}

export function FilterBar({
  totalItems,
  categories,
  onCategoryChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Select defaultValue="all" onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full border-gray-800 bg-[#18181B] text-gray-300 sm:w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent className="border-gray-800 bg-[#18181B]">
              <SelectItem value="all" className="text-gray-300">
                Todas Categorias
              </SelectItem>
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className="text-gray-300"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select defaultValue="recent" onValueChange={onSortChange}>
            <SelectTrigger className="w-full border-gray-800 bg-[#18181B] text-gray-300 sm:w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="border-gray-800 bg-[#18181B]">
              <SelectItem value="recent" className="text-gray-300">
                Mais Recentes
              </SelectItem>
              <SelectItem value="popular" className="text-gray-300">
                Mais Populares
              </SelectItem>
              <SelectItem value="nameAz" className="text-gray-300">
                Nome A-Z
              </SelectItem>
              <SelectItem value="nameZa" className="text-gray-300">
                Nome Z-A
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
          <Badge
            variant="secondary"
            className="w-full bg-[#18181B] px-4 py-2 text-center text-gray-300 sm:w-auto"
          >
            {totalItems}{' '}
            {totalItems === 1 ? 'modelo encontrado' : 'modelos encontrados'}
          </Badge>
        </div>
      </div>
    </div>
  )
}
