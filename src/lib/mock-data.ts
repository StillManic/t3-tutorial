import type { DriveItem } from "~/lib/types"

export const mockData: DriveItem = {
  name: "My Drive",
  type: "folder",
  items: [
    {
      name: "Documents",
      type: "folder",
      items: [
        {
          name: "Project Proposal.docx",
          type: "file",
          fileType: "document",
          size: "245 KB",
          modified: "May 10, 2023",
          url: "#",
        },
        {
          name: "Budget 2023.xlsx",
          type: "file",
          fileType: "document",
          size: "1.2 MB",
          modified: "Apr 28, 2023",
          url: "#",
        },
        {
          name: "Meeting Notes",
          type: "folder",
          items: [
            {
              name: "Q1 Review.docx",
              type: "file",
              fileType: "document",
              size: "125 KB",
              modified: "Mar 15, 2023",
              url: "#",
            },
            {
              name: "Team Sync.docx",
              type: "file",
              fileType: "document",
              size: "98 KB",
              modified: "Apr 2, 2023",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      name: "Images",
      type: "folder",
      items: [
        {
          name: "Vacation Photos",
          type: "folder",
          items: [
            {
              name: "Beach.jpg",
              type: "file",
              fileType: "image",
              size: "3.2 MB",
              modified: "Jul 12, 2023",
              url: "#",
            },
            {
              name: "Mountains.jpg",
              type: "file",
              fileType: "image",
              size: "2.8 MB",
              modified: "Jul 13, 2023",
              url: "#",
            },
          ],
        },
        {
          name: "Profile Picture.png",
          type: "file",
          fileType: "image",
          size: "1.5 MB",
          modified: "Jan 5, 2023",
          url: "#",
        },
        {
          name: "Company Logo.png",
          type: "file",
          fileType: "image",
          size: "845 KB",
          modified: "Feb 23, 2023",
          url: "#",
        },
      ],
    },
    {
      name: "Videos",
      type: "folder",
      items: [
        {
          name: "Product Demo.mp4",
          type: "file",
          fileType: "video",
          size: "24.5 MB",
          modified: "May 2, 2023",
          url: "#",
        },
        {
          name: "Team Building.mp4",
          type: "file",
          fileType: "video",
          size: "58.2 MB",
          modified: "Jun 10, 2023",
          url: "#",
        },
      ],
    },
    {
      name: "Project Plan.pdf",
      type: "file",
      fileType: "document",
      size: "1.8 MB",
      modified: "Apr 15, 2023",
      url: "#",
    },
    {
      name: "Presentation.pptx",
      type: "file",
      fileType: "document",
      size: "5.2 MB",
      modified: "May 5, 2023",
      url: "#",
    },
    {
      name: "Vacation.jpg",
      type: "file",
      fileType: "image",
      size: "3.5 MB",
      modified: "Jun 20, 2023",
      url: "#",
    },
  ],
}
