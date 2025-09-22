import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "My experience has been fantastic. They understood our requirements to close. They stepped up and ensured we were ready to fund a couple of days before we closed. They made it a very stress-free experience. Highly recommend!",
    author: "Orlando C.",
    date: "11/01/24",
    source: "Google",
    rating: 5
  },
  {
    quote: "The website interaction was smooth and straightforward as well which is something that I never experienced with traditional banks. Shout out to Cityscape as well for running such an effective and efficient business.",
    author: "Peyman K.",
    date: "12/13/23",
    source: "Trustpilot",
    rating: 5
  },
  {
    quote: "Cityscape was quick and easy to work with. I look forward to closing more deals with them soon.",
    author: "Elyse G.",
    date: "03/07/24",
    source: "Google",
    rating: 5
  },
  {
    quote: "Fast and easy process. Everything was done in a timely manner. They were easy to reach when I had questions, and there were no surprises. Highly recommend!",
    author: "Kaveh N.",
    date: "03/25/24",
    source: "Trustpilot",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why 17,000+ real estate investors trust Cityscape Finance. From first-time flippers to seasoned pros, we provide the support, expertise, and capital to make real estate investing easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.date} via {testimonial.source}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$9B+</div>
              <div className="text-muted-foreground text-lg">Loans Funded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4,600+</div>
              <div className="text-muted-foreground text-lg">Clients Nationwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15.00%</div>
              <div className="text-muted-foreground text-lg">Average Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;