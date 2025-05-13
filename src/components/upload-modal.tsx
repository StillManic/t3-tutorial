"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog"

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
  currentPath: string[]
}

export function UploadModal({ isOpen, onClose, currentPath }: UploadModalProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files)
      setSelectedFiles((prev) => [...prev, ...filesArray])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles((prev) => [...prev, ...filesArray])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUpload = () => {
    // In a real app, you would upload the files here
    console.log("Uploading files:", selectedFiles)
    console.log("To path:", currentPath.join("/"))

    // Mock successful upload
    setTimeout(() => {
      setSelectedFiles([])
      onClose()
    }, 1000)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-800 border-gray-800">
        <DialogHeader>
          <DialogTitle className={"text-gray-300"}>Upload files</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <div
            className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
              isDragging ? "border-blue-500 bg-blue-900/30" : "border-gray-600"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="mb-2 h-8 w-8 text-gray-400" />
            <p className="mb-1 text-sm font-medium text-gray-200">Drag and drop files here</p>
            <p className="mb-4 text-xs text-gray-400">or click to browse files</p>
            <input type="file" id="file-upload" multiple className="hidden" onChange={handleFileSelect} />
            <label htmlFor="file-upload">
              <Button variant="outline" size="sm" className="cursor-pointer">
                Browse files
              </Button>
            </label>
          </div>

          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-medium">Selected files</h4>
              <div className="max-h-40 overflow-y-auto rounded-md border border-gray-700 bg-gray-800">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-700 p-2 last:border-0"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <div className="truncate text-sm text-gray-200">{file.name}</div>
                      <div className="text-xs text-gray-400">{formatFileSize(file.size)}</div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => removeFile(index)}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} disabled={selectedFiles.length === 0}>
              Upload
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
