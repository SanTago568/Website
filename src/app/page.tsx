import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

export default function Home() {
  const phoneNumber = "+15551234567";
  const whatsappMessage = "Hello, I need phone repair service!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="container mx-auto py-10">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">FixMyPhone</h1>
        <p className="text-lg text-muted-foreground">Your trusted phone repair service. We fix all kinds of phone issues!</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Screen Repair</CardTitle>
              <CardDescription>Cracked screen? We replace it quickly!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Starting from $79</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Battery Replacement</CardTitle>
              <CardDescription>Is your battery draining fast? Get a new one!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Starting from $49</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Water Damage Repair</CardTitle>
              <CardDescription>Accidentally dropped your phone in water? We can help!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contact for a quote</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Charging Port Repair</CardTitle>
              <CardDescription>Having trouble charging your phone?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Starting from $59</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Camera Repair</CardTitle>
              <CardDescription>Is your camera not working?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Starting from $69</p>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle>Other Repairs</CardTitle>
              <CardDescription>We fix all kinds of issues!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contact for a quote</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Request a Repair</h2>
        <Card>
          <CardHeader>
            <CardTitle>Repair Request Form</CardTitle>
            <CardDescription>Please fill out the form below to request a repair.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Model</Label>
                <Input type="text" id="phone" placeholder="iPhone 13" />
              </div>
              <div>
                <Label htmlFor="issue">Issue Description</Label>
                <Textarea id="issue" placeholder="Describe the issue with your phone" />
              </div>
              <Button>Submit Request</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Contact us for any questions or to schedule a repair.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>support@fixmyphone.com</p>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>123 Main Street, Anytown, USA</p>
              </div>
               <div>
                <Button asChild>
                  <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                    Contact us on WhatsApp
                  </a>
                </Button>
              </div>
              <div>
                <p className="font-semibold">Business Hours:</p>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
