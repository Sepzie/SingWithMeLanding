export interface Feature {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  alt: string;
}

export const siteContent = {
  hero: {
    title: "Perfect Your Voice, One Line at a Time",
    subtitle: "Upload any song and practice singing with easy recording and playback comparison",
    description: "Join singers who are already using SingWithMe to practice with their favorite songs"
  },
  downloadButtons: {
    appStore: {
      line1: "Download on the",
      line2: "App Store"
    },
    googlePlay: {
      line1: "Get it on",
      line2: "Google Play"
    },
    comingSoon: "Coming Soon!"
  },
  features: {
    sectionTitle: "How SingWithMe Works",
    subtitle: "From upload to practice, our platform helps you improve your singing with any song you love.",
    processTitle: "Simple 4-Step Process",
    processSubtitle: "Start practicing your singing in minutes",
    process: [
      {
        number: 1,
        title: "Upload Song",
        description: "Upload any MP3 file from your device - we'll handle the rest",
        icon: "🎵",
        color: "primary"
      },
      {
        number: 2,
        title: "Get Lyrics",
        description: "Our AI transcribes the lyrics so you can follow along while singing",
        icon: "📝",
        color: "secondary"
      },
      {
        number: 3,
        title: "Record Yourself",
        description: "Sing along with the instrumental and record your voice",
        icon: "🎤",
        color: "accent"
      },
      {
        number: 4,
        title: "Listen & Compare",
        description: "Switch between your recording and the original to hear the difference",
        icon: "👂",
        color: "primary"
      }
    ],
    items: [
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
  },
  benefits: {
    sectionTitle: "Why Choose SingWithMe?",
    subtitle: "A simple, focused approach to practicing your singing with any song you love",
    items: [
      {
        icon: "🎼",
        title: "Any Song You Want",
        description: "Upload any MP3 file and our AI will transcribe the lyrics so you can follow along while singing."
      },
      {
        icon: "🎤",
        title: "Simple Recording",
        description: "Record yourself singing along, then easily switch between your recording and the original to compare."
      },
      {
        icon: "🔁",
        title: "Practice Your Way",
        description: "Listen, record, and compare as many times as you want. Perfect for learning songs at your own pace."
      },
      {
        icon: "📱",
        title: "Easy to Use",
        description: "Clean, intuitive interface focused on the essentials - no complicated features to get in your way."
      },
      {
        icon: "🎵",
        title: "Line-by-Line Practice",
        description: "Focus on specific parts of the song with synchronized lyrics and easy navigation controls."
      },
      {
        icon: "💾",
        title: "Save Your Progress",
        description: "Keep your recordings and practice sessions so you can track how you're improving over time."
      }
    ],
    testimonialsTitle: "What People Are Saying",
    testimonials: [
      {
        quote: "Love how simple it is. Upload a song, record myself singing, and compare. That's exactly what I needed.",
        author: "Alex",
        role: "Music Enthusiast",
        initial: "A",
        color: "primary"
      },
      {
        quote: "Finally I can practice singing to my favorite songs without the original vocals interfering.",
        author: "Jamie",
        role: "Beginner Singer",
        initial: "J",
        color: "secondary"
      }
    ]
  },
  cta: {
    title: "Ready to Improve Your Singing?",
    subtitle: "Join singers who are already using SingWithMe to practice with their favorite songs",
    description: "Start your vocal training journey today. No subscription required to get started.",
    incentives: [
      {
        text: "Free to start",
        icon: "check"
      },
      {
        text: "No credit card required",
        icon: "check"
      },
      {
        text: "Instant access",
        icon: "check"
      }
    ],
    statsTitle: "Simple singing practice for everyone",
    stats: [
      {
        value: "Easy",
        label: "Upload & Practice"
      },
      {
        value: "Clear",
        label: "Audio Separation"
      },
      {
        value: "Compare",
        label: "Your Progress"
      }
    ]
  },
  notFound: {
    title: "Page Not Found",
    description: "Oops! The page you're looking for seems to have gone off-key. Let's get you back to the main stage.",
    buttonText: "🏠 Go Home"
  },
  footer: {
    copyright: "© 2025 SingWithMe. All rights reserved.",
    tagline: "Practice singing with any song you love"
  }
} 