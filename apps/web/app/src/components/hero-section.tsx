export default function HeroSection({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-[#121214]">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="space-y-4 text-center sm:space-y-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="text-base text-gray-400 sm:text-lg md:text-xl">
            {description}
          </p>
          {/* <div className="mx-auto max-w-2xl px-4">
              <Input
                placeholder="Procure pelo modelo ideal para o seu portfolio"
                className="h-10 w-full rounded-full border-gray-800 bg-black/50 px-4 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:h-12 sm:px-6"
              />
            </div> */}
        </div>
      </div>
    </div>
  )
}
