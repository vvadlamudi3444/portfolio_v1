import React from 'react';

const certifications = [
  {
    title: 'AWS Solutions Architect',
    image: '/images/aws-cert.png',
    alt: 'AWS Solutions Architect Certification'
  },
  {
    title: 'Google Cloud Engineer',
    image: '/images/gcp-cert.png',
    alt: 'Google Cloud Engineer Certification'
  },
  {
    title: 'Certified Kubernetes Administrator',
    image: '/images/cka-cert.png',
    alt: 'Certified Kubernetes Administrator'
  },
  {
    title: 'Terraform Associate',
    image: '/images/terraform-cert.png',
    alt: 'Terraform Associate Certification'
  }
];

export function Certifications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="flex flex-col items-center">
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}