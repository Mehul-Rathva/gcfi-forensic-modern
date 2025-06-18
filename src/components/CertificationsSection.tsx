
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      icon: Award,
      details: 'International standard for quality management systems'
    },
    {
      title: 'ISO/IEC 27037:2012',
      description: 'Digital Evidence Guidelines',
      icon: Shield,
      details: 'Guidelines for identification, collection, acquisition and preservation of digital evidence'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-[#F7F7F7] to-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            Our <span className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-[#6E6E6E] max-w-3xl mx-auto">
            Our commitment to excellence is validated by internationally recognized certifications and standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 glass-card hover:-translate-y-1 hover:border-[#F45B2A]/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] rounded-full w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <cert.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">{cert.title}</h3>
                <p className="text-lg text-[#F45B2A] font-semibold mb-4">{cert.description}</p>
                <p className="text-[#6E6E6E]">{cert.details}</p>
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-600">Certified & Verified</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F45B2A]">1000+</div>
              <div className="text-[#6E6E6E]">Cases Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F45B2A]">24/7</div>
              <div className="text-[#6E6E6E]">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F45B2A]">99.9%</div>
              <div className="text-[#6E6E6E]">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F45B2A]">15+</div>
              <div className="text-[#6E6E6E]">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
