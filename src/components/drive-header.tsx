"use client"

import { Search } from "lucide-react"
import { Input } from "~/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

interface DriveHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function DriveHeader({ searchQuery, setSearchQuery }: DriveHeaderProps) {
  return (
    <header className="border-b border-gray-800 bg-gray-900 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-100">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
            <span className="ml-2 text-gray-300">Drive</span>
          </h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search in Drive"
              className="pl-10 bg-gray-700 text-gray-300 border-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
