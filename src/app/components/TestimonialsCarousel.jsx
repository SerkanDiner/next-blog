// components/TestimonialsCarousel.js
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsCarousel = ({ testimonials }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div className="min-w-full flex-shrink-0 px-4" key={index}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
