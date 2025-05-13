"use client"

import {
  ArrowUp,
  ChevronRight,
  File,
  FileImage,
  FileText,
  FileVideo,
  Folder,
  MoreVertical,
  Upload,
  FolderOpen,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import type { DriveItem } from "~/lib/types"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { FileItem } from "~/components/file-item";

interface DriveContentProps {
  items: DriveItem[]
  currentPath: string[]
  onFolderClick: (folderName: string) => void
  onFileClick: (fileName: string) => void
  onNavigateUp: () => void
  onUploadClick: () => void
  setCurrentPath: (path: string[]) => void
}

export function DriveContent({
  items,
  currentPath,
  onFolderClick,
  onFileClick,
  onNavigateUp,
  onUploadClick,
  setCurrentPath,
}: DriveContentProps) {
  return (
    <div className="flex-1 overflow-auto bg-gray-900 p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onNavigateUp}
            disabled={currentPath.length === 0}
            className="h-8 w-8 p-0 text-gray-300 hover:text-black"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Go up</span>
          </Button>

          <div className="flex items-center text-sm text-gray-300">
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setCurrentPath([])}
            >
              My Drive
            </span>

            {currentPath.map((folder, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span
                  className="cursor-pointer hover:text-blue-400"
                  onClick={() =>
                    setCurrentPath(currentPath.slice(0, index + 1))
                  }
                >
                  {folder}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={onUploadClick} size="sm" className="gap-2 cursor-pointer bg-blue-600 hover:bg-blue-800">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center text-center">
          <FolderOpen className="mb-2 h-12 w-12 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-300">
            This folder is empty
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Upload files or create folders to get started
          </p>
          <Button onClick={onUploadClick} className="mt-4 gap-2 cursor-pointer bg-blue-600 hover:bg-blue-800">
            <Upload className="h-4 w-4" />
            Upload files
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col cursor-pointer items-center rounded-lg border border-gray-700 p-4 transition-all hover:border-blue-700 hover:bg-gray-800"
              onClick={() =>
                item.type === "folder"
                  ? onFolderClick(item.name)
                  : onFileClick(item.name)
              }
            >
              {item.type === "folder" ? (
                <div
                  onClick={() => onFolderClick(item.name)}
                >
                  <Folder className="h-10 w-10 text-yellow-500" />
                </div>
              ) : (
                <div
                  onClick={() => onFolderClick(item.name)}
                >
                  <FileItem
                    className="h-10 w-10 text-yellow-500"
                    name={""}
                    type={"file"}
                  />
                </div>
              )}

              <div className="mt-2 w-full truncate text-center text-sm font-medium text-gray-200">
                {item.name}
              </div>

              <div className="mt-1 text-xs text-gray-400">
                {item.size && `${item.size}`}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-1 right-1 h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                  >
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Download</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
