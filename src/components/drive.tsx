"use client"

import { useState } from "react"
import { DriveHeader } from "~/components/drive-header"
import { DriveSidebar } from "~/components/drive-sidebar"
import { DriveContent } from "~/components/drive-content"
import { UploadModal } from "~/components/upload-modal"
import { mockData } from "~/lib/mock-data"

export function Drive() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Get current folder content based on path
  const getCurrentContent = () => {
    let current = { ...mockData }

    for (const folder of currentPath) {
      if (current.items) {
        const foundFolder = current.items.find((item) => item.type === "folder" && item.name === folder)
        if (foundFolder && foundFolder.type === "folder") {
          current = foundFolder
        } else {
          return { items: [] }
        }
      }
    }

    return current
  }

  const currentContent = getCurrentContent()

  // Filter items based on search query
  const filteredItems =
    currentContent.items?.filter((item) =>
      searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true,
    ) ?? []

  // Navigate to a folder
  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  // Navigate up one level
  const navigateUp = () => {
    if (currentPath.length > 0) {
      setCurrentPath(currentPath.slice(0, -1))
    }
  }

  // Handle upload button click
  const handleUploadClick = () => {
    setIsUploadModalOpen(true)
  }

  return (
    <div className="flex h-screen flex-col">
      <DriveHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-1 overflow-hidden">
        <DriveSidebar onUploadClick={handleUploadClick} />
        <DriveContent
          items={filteredItems}
          currentPath={currentPath}
          onFolderClick={navigateToFolder}
          onNavigateUp={navigateUp}
          onUploadClick={handleUploadClick}
        />
      </div>
      <UploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} currentPath={currentPath} />
    </div>
  )
}
