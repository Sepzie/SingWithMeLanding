"use client";

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container max-w-screen-xl px-4">
        {/* Main Benefits */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Why Choose SingWithMe?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            A simple, focused approach to practicing your singing with any song you love
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🎼",
              title: "Any Song You Want",
              description: "Upload any MP3 file and our AI will separate the vocals so you can sing along with just the instrumental."
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
          ].map((benefit, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:neon-text transition-all duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple testimonial-style quotes */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-primary mb-12">What People Are Saying</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism p-6 rounded-lg border border-border/50">
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-primary">"</div>
                <div>
                  <p className="text-foreground/90 mb-4">
                    "Love how simple it is. Upload a song, record myself singing, and compare. That's exactly what I needed."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Alex</div>
                      <div className="text-sm text-muted-foreground">Music Enthusiast</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-6 rounded-lg border border-border/50">
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-secondary">"</div>
                <div>
                  <p className="text-foreground/90 mb-4">
                    "Finally I can practice singing to my favorite songs without the original vocals interfering."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-secondary font-semibold">J</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Jamie</div>
                      <div className="text-sm text-muted-foreground">Beginner Singer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 