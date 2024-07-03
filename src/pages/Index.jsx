import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Camera, Download, Info } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to PhotoApp</h1>
        <p className="text-lg text-muted-foreground">
          Capture, edit, and share your moments with ease.
        </p>
        <Button size="lg" className="mt-4">
          Download Now
        </Button>
      </header>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary" />
              <CardTitle>Easy to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our app is designed with simplicity in mind, making it easy for anyone to use.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Camera className="h-8 w-8 text-primary" />
              <CardTitle>High Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Capture high-quality photos and videos with our advanced camera features.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Download className="h-8 w-8 text-primary" />
              <CardTitle>Offline Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access your photos and videos even when you're offline.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Get Started Today</h2>
        <p className="text-lg text-muted-foreground">
          Download PhotoApp now and start capturing your moments.
        </p>
        <div className="space-x-4">
          <Button size="lg">Download Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center space-y-4">
        <div className="space-x-4">
          <a href="/privacy-policy" className="text-muted-foreground hover:text-primary">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-muted-foreground hover:text-primary">
            Terms of Service
          </a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground hover:text-primary">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-muted-foreground hover:text-primary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-muted-foreground hover:text-primary">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;