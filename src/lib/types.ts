export interface DriveItem {
  name: string;
  type: "file" | "folder";
  fileType?: "document" | "image" | "video" | "audio" | "archive" | "unknown";
  size?: string;
  modified?: string;
  url?: string;
  items?: DriveItem[];
  className?: string;
}
