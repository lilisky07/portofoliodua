import React from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialList.css';

const testimonials = [
  {
    id: 1,
    text: "Layanan luar biasa dan sangat profesional. Selalu memuaskan!",
    name: "Budi Santoso",
    rating: 5,
    image: "/ClientImage.png"
  },
  {
    id: 2,
    text: "Pengalaman yang sangat positif",
    name: "Siti Aisyah",
    rating: 5,
    image: "/ClientImage.png"
  },
  {
    id: 3,
    text: "Kualitas kerja sangat baik dan tepat waktu.",
    name: "Ahmad Rizal",
    rating: 5,
    image: "/ClientImage.png"
  },
  {
    id: 4,
    text: "Sangat memuaskan! Pelayanan sangat cepat dan ramah.",
    name: "Lia Sari",
    rating: 5,
    image: "/ClientImage.png"
  },
  {
    id: 5,
    text: "Hasil kerja melebihi ekspektasi. Terima kasih!",
    name: "Joko Widodo",
    rating: 5,
    image: "/ClientImage.png"
  },
  {
    id: 6,
    text: "Prosesnya sangat mudah dan hasilnya fantastis.",
    name: "Maya Fitri",
    rating: 5,
    image: "/ClientImage.png"
  }
  // Testimonial lainnya
];

const TestimonialList = () => {
  return (
    <div className="testimonial-section">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          text={testimonial.text}
          image={testimonial.image}
          name={testimonial.name}
          rating={testimonial.rating}
        />
      ))}
    </div>
  );
};

export default TestimonialList;
