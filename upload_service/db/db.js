import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function addVideoDetailsToDB(title, description, author, url) {
  try {
    const VideoData = await prisma.VideoData.create({
      data: {
        title: title,
        description: description,
        author: author,
        url: url,
      },
    });
    console.log(VideoData);
    return VideoData;
  } catch (error) {
    throw error;
  }
}
