import { Layout } from "@/components/layout/Layout";
import { LegalPage as LegalPageType, LegalSection } from "@/data/legal";

interface LegalPageProps {
  pageData: LegalPageType;
}

function renderContent(content: string | string[]) {
  if (typeof content === 'string') {
    return (
      <p className="text-foreground/80 leading-relaxed">
        {content}
      </p>
    );
  }

  // Handle array content (lists)
  const [intro, ...items] = content;
  const isContactSection = intro?.startsWith('If you have any questions');
  const hasIntro = intro && !intro.startsWith('Email:') && !intro.startsWith('Address:') && !isContactSection;
  
  return (
    <div className="space-y-4">
      {hasIntro && (
        <p className="text-foreground/80 leading-relaxed">
          {intro}
        </p>
      )}
      
      {/* Check if this is contact information */}
      {isContactSection ? (
        <div className="space-y-2">
          <p className="text-muted-foreground leading-relaxed mb-4">{intro}</p>
          <div className="glassmorphism p-4 rounded-lg border border-border/50">
            <div className="text-foreground">
              {items.map((item, index) => (
                <div key={index}>
                  {item}
                  {index < items.length - 1 && <br />}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Regular list items */
        <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
          {items.filter(item => item !== '').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      
      {/* Handle additional paragraph after lists */}
      {content.some(item => item === '') && !isContactSection && (
        <p className="text-foreground/80 leading-relaxed mt-4">
          {content[content.findIndex(item => item === '') + 1]}
        </p>
      )}
    </div>
  );
}

export function LegalPage({ pageData }: LegalPageProps) {
  return (
    <Layout>
      <div className="py-20 lg:py-32">
        <div className="container max-w-screen-md px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {pageData.title}
              </h1>
              <p className="text-muted-foreground">
                Last updated: {pageData.lastUpdated}
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {pageData.sections.map((section, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                  {renderContent(section.content)}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 