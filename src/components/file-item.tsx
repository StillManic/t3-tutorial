import type { DriveItem } from "~/lib/types";
import { FileImage, FileText, FileVideo, File } from "lucide-react";
import type { JSX } from "react";

function getFileIcon(fileType: string): JSX.Element {
  switch (fileType) {
    case "image":
      return <FileImage className="h-10 w-10 text-blue-500" />
    case "document":
      return <FileText className="h-10 w-10 text-green-500" />
    case "video":
      return <FileVideo className="h-10 w-10 text-red-500" />
    default:
      return <File className="h-10 w-10 text-gray-500" />
  }
}

export function FileItem(item: DriveItem) {
  return <>
    <a href={item.url ?? "#"} target="_blank" rel="noopener noreferrer">
      {getFileIcon(item.fileType ?? "unknown")}
    </a>
  </>;
}
