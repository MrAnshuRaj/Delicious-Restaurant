import TestimonialsHero from "../components/Testimonials/TestimonialsHero";
import TestimonialsGrid from "../components/Testimonials/TestimonialsGrid";
import TestimonialsStats from "../components/Testimonials/TestimonialsStats";
import TestimonialsCTA from "../components/Testimonials/TestimonialsCTA";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "An exceptional dining experience — from the thoughtfully crafted menu to the warm ambience and impeccable service. Every visit feels special.",
      author: "Sarah Mitchell",
      role: "CEO, Tech Innovations Inc.",
      rating: 5,
    },
    {
      quote:
        "The culinary excellence and attention to detail are unmatched. This restaurant has become our favorite destination for special occasions.",
      author: "James Chen",
      role: "Food Critic",
      rating: 5,
    },
    {
      quote:
        "Outstanding flavors, beautiful presentation, and staff that genuinely cares. Worth every penny and every minute of the drive.",
      author: "Emma Rodriguez",
      role: "Entrepreneur",
      rating: 5,
    },
    {
      quote:
        "A culinary masterpiece! The wine pairings were perfect, and the sommelier's knowledge was impressive. Truly world-class.",
      author: "Michael Thompson",
      role: "Restaurant Consultant",
      rating: 5,
    },
    {
      quote:
        "We celebrated our anniversary here and it was magical. The staff made us feel like royalty throughout the evening.",
      author: "Lisa & David Wong",
      role: "Valued Guests",
      rating: 5,
    },
    {
      quote:
        "Every course was a revelation. The chef's creativity and execution are at the highest level. A true gem in the culinary world.",
      author: "Chef Antoine Dubois",
      role: "Michelin Star Chef",
      rating: 5,
    },
    {
      quote:
        "From reservation to departure, everything was perfectly orchestrated. The service team anticipates your needs before you realize them.",
      author: "Victoria Hartley",
      role: "Hospitality Professional",
      rating: 5,
    },
    {
      quote:
        "Brought my parents for their 50th wedding anniversary. They haven't stopped talking about it. Absolutely magnificent!",
      author: "Christopher Lee",
      role: "Regular Guest",
      rating: 5,
    },
    {
      quote:
        "The tasting menu is a journey through flavor and technique. Each plate tells a story. An absolute must-visit restaurant.",
      author: "Dr. Patricia Kumar",
      role: "Food Writer",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <TestimonialsHero />
      <TestimonialsStats />
      <TestimonialsGrid testimonials={testimonials} />
      <TestimonialsCTA />
    </div>
  );
};

export default Testimonials;
