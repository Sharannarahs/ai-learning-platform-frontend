export function parseYouTubeLink(link) {
  let result = {};

  try {
    if (!link) return result;

    // If someone passes only a playlist ID
    if (link.startsWith("PL") && link.length > 10) {
      result.playlistId = link;
      return result;
    }

    const url = new URL(link);

    const listParam = url.searchParams.get("list");
    const videoParam = url.searchParams.get("v");

    if (listParam) {
      result.playlistId = listParam;
    }

    if (videoParam) {
      result.videoId = videoParam;
    }

    if (!result.videoId && url.hostname === "youtu.be") {
      const parts = url.pathname.split("/");
      if (parts.length > 1) {
        result.videoId = parts[1];
      }
    }
  } catch (err) {
    console.error("Invalid YouTube link:", link);
  }

  return result;
}
