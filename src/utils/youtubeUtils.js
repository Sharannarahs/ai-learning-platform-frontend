export function parseYouTubeLink(link) {
  let result = {};

  try {
    if (!link) return result;

    // If someone passes only a playlist ID
    if (link.startsWith("PL") && link.length > 10) {
      result.playlistId = link; // result = { playlistId: 'PLabcd1234xyz' }
      return result;
    }

    const url = new URL(link);

    // url.hostname	 // 	"youtube.com"

    const listParam = url.searchParams.get("list"); // "PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" //playlist
    const videoParam = url.searchParams.get("v");  // video
    
    if (listParam) {
      result.playlistId = listParam; // { playlistId: "PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" }

    }

    if (videoParam) {
      result.videoId = videoParam; //   videoId: "abc123",

    }

    // If it’s a short link like: https://youtu.be/abc123

    if (!result.videoId && url.hostname === "youtu.be") {
      const parts = url.pathname.split("/"); // url.pathname → '/abc123' // splits to ['', 'abc123'] → so take parts[1].
      if (parts.length > 1) {
        result.videoId = parts[1];
      }
    }
  } catch (err) {
    console.error("Invalid YouTube link:", link);
  }

  return result;
}
