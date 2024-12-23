// async function getRepos(id: string) {
//   const res = await fetch(`https://api.github.com/repos/altload/${id}`, {
//     next: { revalidate: 86400 }, // Revalida a cada 60 segundos
//   })
//   const repo = await res.json()

//   return repo
// }

// export async function generateStaticParams() {
//   const repos = await fetch('https://api.github.com/users/altload/repos').then(
//     (res) => res.json()
//   )

//   const limitedRepos = repos.slice(0, 10)

//   return limitedRepos.map((repo: any) => ({
//     id: repo.name,
//   }))
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   let repo = await getRepos(params.id)

//   const repoName = formatName(repo.name)

//   return {
//     title: repoName,
//   }
// }

export default async function Portfolios({ params }) {
  // let repo = await getRepos(params.id)

  const { slug } = await params

  return <div>{slug}</div>
}

// export const dynamicParams = true
