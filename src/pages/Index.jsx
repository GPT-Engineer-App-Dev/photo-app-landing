import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const features = [
  {
    icon: "📸",
    title: "High Quality Photos",
    description: "Capture stunning photos with our advanced camera features.",
  },
  {
    icon: "🌐",
    title: "Share Instantly",
    description: "Share your photos instantly on social media platforms.",
  },
  {
    icon: "🎨",
    title: "Edit with Ease",
    description: "Edit your photos with our powerful editing tools.",
  },
  {
    icon: "☁️",
    title: "Cloud Storage",
    description: "Store your photos securely in the cloud.",
  },
];

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <Typography variant="h1" className="text-4xl font-bold mb-4">
          Welcome to PhotoApp
        </Typography>
        <Typography variant="body1" className="text-lg mb-8">
          Capture, edit, and share your moments with ease.
        </Typography>
        <Button variant="primary" size="lg" className="mr-4">
          Download Now
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <Typography variant="h2" className="text-3xl font-bold text-center mb-12">
          Features
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <Typography variant="h3" className="text-2xl mb-2">
                  {feature.icon}
                </Typography>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">{feature.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-16 bg-gray-100">
        <Typography variant="h2" className="text-3xl font-bold mb-4">
          Get Started Today
        </Typography>
        <Typography variant="body1" className="text-lg mb-8">
          Download PhotoApp and start capturing your moments.
        </Typography>
        <Button variant="primary" size="lg" className="mr-4">
          Download Now
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="mb-4">
          <a href="/privacy-policy" className="mr-4">
            Privacy Policy
          </a>
          <a href="/terms-of-service">
            Terms of Service
          </a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img width="24" height="24" src="/placeholder.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img width="24" height="24" src="/placeholder.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img width="24" height="24" src="/placeholder.svg" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;