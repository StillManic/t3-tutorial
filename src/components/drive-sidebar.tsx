"use client"

import type React from "react"

import {
  Clock,
  Computer,
  FileHeart,
  FileImage,
  FileText,
  HardDrive,
  Share2,
  Star,
  Trash2,
  Upload,
  Users,
} from "lucide-react"
import { Button } from "~/components/ui/button"

interface DriveSidebarProps {
  onUploadClick: () => void
}

export function DriveSidebar({ onUploadClick }: DriveSidebarProps) {
  return (
    <aside className="w-64 border-r border-gray-800 bg-gray-900 p-4">
      <div className="mb-6">
        <Button onClick={onUploadClick} className="w-full gap-2 cursor-pointer bg-blue-600 hover:bg-blue-800">
          <Upload className="h-4 w-4" />
          New Upload
        </Button>
      </div>
      <nav className="space-y-1">
        <SidebarItem icon={<HardDrive className="h-4 w-4" />} label="My Drive" active />
        <SidebarItem icon={<Computer className="h-4 w-4" />} label="Computers" />
        <SidebarItem icon={<Share2 className="h-4 w-4" />} label="Shared with me" />
        <SidebarItem icon={<Clock className="h-4 w-4" />} label="Recent" />
        <SidebarItem icon={<Star className="h-4 w-4" />} label="Starred" />
        <SidebarItem icon={<Trash2 className="h-4 w-4" />} label="Trash" />
      </nav>
      <div className="mt-6 border-t pt-6">
        <h3 className="mb-2 text-sm font-medium text-gray-400">Categories</h3>
        <nav className="space-y-1">
          <SidebarItem icon={<FileImage className="h-4 w-4" />} label="Images" />
          <SidebarItem icon={<FileText className="h-4 w-4" />} label="Documents" />
          <SidebarItem icon={<FileHeart className="h-4 w-4" />} label="Favorites" />
          <SidebarItem icon={<Users className="h-4 w-4" />} label="Shared" />
        </nav>
      </div>
      <div className="mt-6 border-t border-gray-800 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Storage</span>
          <span className="text-xs text-gray-400 font-medium">7.5 GB of 15 GB used</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-700">
          <div className="h-full w-1/2 bg-blue-600"></div>
        </div>
      </div>
    </aside>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm ${
        active ? "bg-blue-900 text-blue-300" : "text-gray-300 hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}
