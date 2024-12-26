import { Skeleton } from './ui/skeleton'

export default function LoadingPortfolios({ addCss }: { addCss?: string }) {
  return (
    <div
      className={`grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 ${addCss}`}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3 ">
          <Skeleton className="h-[225px] w-[350px] rounded-xl bg-gray-700" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-700" />
            <Skeleton className="h-4 w-[200px] bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  )
}
