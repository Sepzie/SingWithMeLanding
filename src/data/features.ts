export interface Feature {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  alt: string;
}

export const features: Feature[] = [
  {
    id: "upload",
    title: "Upload Any Song",
    description: "Upload an MP3 and our AI transcribes the lyrics so you can follow along while practicing",
    screenshot: "/screenshots/upload.png",
    alt: "SingWithMe upload interface"
  },
  {
    id: "compare",
    title: "Record & Compare",
    description: "Record yourself singing, then play back your recording and the original side-by-side to hear exactly where to improve",
    screenshot: "/screenshots/player_recording.png",
    alt: "SingWithMe playback comparison interface"
  },
  {
    id: "practice",
    title: "Focused Practice",
    description: "Practice challenging parts with line-by-line controls for precision training",
    screenshot: "/screenshots/player_lineByLine.png",
    alt: "SingWithMe lyrics display with line highlighting"
  },
  {
    id: "multiple-takes",
    title: "Perfect Every Line",
    description: "Record unlimited takes for each line and track your progress over time",
    screenshot: "/screenshots/player_showingRecordingTakes.png",
    alt: "SingWithMe multiple recordings interface"
  }
] 