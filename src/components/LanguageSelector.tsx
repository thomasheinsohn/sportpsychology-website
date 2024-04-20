// 'use client'

// import { usePathname, useRouter } from 'next/navigation'
// import React from 'react'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

// type Props = {
//   readonly locale: string
// }

// const languageMap = {
//   en: '🇬🇧 English',
//   de: '🇩🇪 Deutsch',
// }

// const LanguageSelector = ({ locale }: Props) => {
//   const router = useRouter()
//   const pathname = usePathname()

//   const language = React.useMemo(() => {
//     return languageMap[locale as keyof typeof languageMap]
//   }, [locale])

//   const onChange = (key: string) => {
//     const splitPath = pathname.split('/').splice(2)
//     const reducedPath = splitPath.join('/')
//     router.push(`/${key}/${reducedPath}`)
//   }

//   return (
//     <Select onValueChange={onChange}>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder={language} />
//       </SelectTrigger>
//       <SelectContent>
//         {Object.entries(languageMap).map(([key, value]) => (
//           <SelectItem key={key} value={key} className="hover:cursor-pointer">
//             {value}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   )
// }

// export default LanguageSelector
