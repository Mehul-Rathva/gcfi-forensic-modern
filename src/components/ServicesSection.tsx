import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Monitor, 
  Network, 
  Smartphone, 
  Camera, 
  Database, 
  HardDrive, 
  Usb, 
  Disc,
  Shield,
  FileText,
  Eye,
  Search
} from 'lucide-react';

const ServicesSection = () => {
  const forensicServices = [
    {
      icon: Monitor,
      title: 'Computer Forensics',
      description: 'In-depth analysis of computer systems to identify digital evidence and trace cyber attacks.',
      details: 'Our computer forensics services include comprehensive analysis of desktops, laptops, servers, and workstations. We examine file systems, registry entries, browser history, email communications, and deleted data recovery. Our experts use advanced forensic tools to maintain chain of custody and provide court-admissible evidence.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Network Forensics',
      description: 'Investigation of network traffic and communications to identify security breaches.',
      details: 'Network forensics involves capturing, recording, and analyzing network events to discover security incidents. We monitor network traffic patterns, analyze logs from firewalls, routers, and switches, and identify unauthorized access attempts, data exfiltration, and malicious activities across your network infrastructure.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Forensics',
      description: 'Comprehensive analysis of smartphones and tablets for digital evidence recovery.',
      details: 'Mobile forensics covers iOS and Android devices, extracting data from internal memory, SD cards, and SIM cards. We recover deleted messages, call logs, photos, videos, app data, location history, and social media communications while maintaining forensic integrity throughout the process.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Camera,
      title: 'Digital Media Forensics',
      description: 'Analysis of digital images, audio, and video files for authenticity and evidence.',
      details: 'Digital media forensics includes authentication of digital photos, videos, and audio recordings. We detect tampering, editing, and manipulation using advanced algorithms. Our services cover metadata analysis, timestamp verification, and enhancement of poor-quality media for evidence purposes.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Memory Forensics',
      description: 'Analysis of system memory to uncover hidden processes and malware.',
      details: 'Memory forensics involves capturing and analyzing volatile memory (RAM) to identify running processes, network connections, encryption keys, and malware. This technique is crucial for detecting advanced persistent threats (APTs) and rootkits that may not leave traces on disk storage.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Incident Response',
      description: 'Swift response to security breaches including containment and recovery.',
      details: 'Our incident response team provides 24/7 emergency response to security breaches. Services include threat assessment, containment strategies, evidence preservation, malware analysis, system recovery, and detailed incident reporting with recommendations for preventing future occurrences.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const dataRecoveryServices = [
    {
      icon: HardDrive,
      title: 'Hard Drive Recovery',
      description: 'Desktop, laptop, and enterprise hard drive data recovery services.',
      details: 'Professional hard drive recovery from mechanical failures, electronic damage, firmware corruption, and logical errors. We handle all major brands including Seagate, Western Digital, Toshiba, and Hitachi. Our cleanroom facilities ensure safe recovery from physically damaged drives.',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      icon: Usb,
      title: 'USB Data Recovery',
      description: 'Recovery of lost data from USB drives, flash drives, and memory cards.',
      details: 'USB and flash drive recovery services for corrupted, formatted, or physically damaged devices. We recover data from all types of flash memory including USB sticks, SD cards, CF cards, and other portable storage devices with high success rates.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Disc,
      title: 'CD/DVD Recovery',
      description: 'Professional recovery services for damaged optical media.',
      details: 'Optical media recovery from scratched, cracked, or corrupted CDs, DVDs, and Blu-ray discs. Our specialized equipment can recover data from severely damaged optical media and convert legacy formats to modern digital formats.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'File Recovery',
      description: 'Recovery of deleted files, documents, photos, and multimedia content.',
      details: 'Comprehensive file recovery services for accidentally deleted, corrupted, or lost files. We recover documents, photos, videos, emails, and database files from various file systems including NTFS, FAT32, exFAT, HFS+, and EXT formats.',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const additionalServices = [
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Proactive monitoring and analysis of emerging cyber threats.',
      details: 'Our threat intelligence services provide real-time monitoring of cyber threats, analysis of attack patterns, and vulnerability assessments. We deliver actionable intelligence reports to help organizations prepare for and prevent cyber attacks.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Search,
      title: 'Vulnerability Assessment',
      description: 'Identification and remediation of IT infrastructure vulnerabilities.',
      details: 'Comprehensive vulnerability assessments including network scanning, penetration testing, security audits, and compliance assessments. We provide detailed reports with prioritized recommendations and remediation strategies to strengthen your security posture.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'CyberToolkit',
      description: 'A suite of essential cybersecurity tools for digital investigations and protection.',
      details: 'CyberToolkit provides a collection of powerful utilities for malware analysis, secure file handling, password auditing, and more. Designed for both professionals and organizations to enhance their cyber defense capabilities.',
      gradient: 'from-cyan-500 to-teal-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#F4F4F4] to-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4">
            Our <span className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-[#6E6E6E] max-w-3xl mx-auto">
            Comprehensive cyber forensic and data recovery solutions tailored to protect and restore your digital assets.
          </p>
        </div>

        {/* Forensic Investigation Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#2B2B2B] mb-8 text-center">
            Forensic Investigation Services
          </h3>
          <Accordion type="single" collapsible className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forensicServices.map((service, index) => (
              <AccordionItem key={index} value={`forensic-${index}`} className="border-0">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 glass-card backdrop-blur-md bg-white/80 hover:bg-white/90 hover:border-[#F45B2A]/20 hover:-translate-y-2 animate-fade-in h-full" style={{animationDelay: `${index * 0.1}s`}}>
                  <AccordionTrigger className="hover:no-underline p-0 border-0">
                    <CardHeader className="text-center relative overflow-hidden w-full">
                      <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-[#2B2B2B] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F45B2A] group-hover:to-[#FF7A4D] group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-[#6E6E6E] text-center">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="text-[#6E6E6E] text-sm leading-relaxed">
                      {service.details}
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Data Recovery Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#2B2B2B] mb-8 text-center">
            Data Recovery Services
          </h3>
          <Accordion type="single" collapsible className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataRecoveryServices.map((service, index) => (
              <AccordionItem key={index} value={`recovery-${index}`} className="border-0">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 glass-card backdrop-blur-md bg-white/80 hover:bg-white/90 hover:border-[#F45B2A]/20 hover:-translate-y-2 animate-fade-in h-full" style={{animationDelay: `${index * 0.1 + 0.6}s`}}>
                  <AccordionTrigger className="hover:no-underline p-0 border-0">
                    <CardHeader className="text-center w-full">
                      <div className={`mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-[#2B2B2B] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F45B2A] group-hover:to-[#FF7A4D] group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-[#6E6E6E] text-center text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="text-[#6E6E6E] text-sm leading-relaxed">
                      {service.details}
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-3xl font-bold text-[#2B2B2B] mb-8 text-center">
            Additional Services
          </h3>
          <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              // Only CyberToolkit should be clickable
              const isCyberToolkit = service.title === 'CyberToolkit';
              const cardContent = (
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 glass-card backdrop-blur-md bg-white/80 hover:bg-white/90 hover:border-[#F45B2A]/20 hover:-translate-y-2 animate-fade-in h-full" style={{animationDelay: `${index * 0.1 + 1}s`}}>
                  <AccordionTrigger className="hover:no-underline p-0 border-0">
                    <CardHeader className="text-center w-full">
                      <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-[#2B2B2B] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F45B2A] group-hover:to-[#FF7A4D] group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-[#6E6E6E] text-center">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="text-[#6E6E6E] text-sm leading-relaxed">
                      {service.details}
                    </div>
                  </AccordionContent>
                </Card>
              );
              return (
                <AccordionItem key={index} value={`additional-${index}`} className="border-0">
                  {isCyberToolkit ? (
                    <a href="https://osint-toolkit-central-main.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                      {cardContent}
                    </a>
                  ) : cardContent}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
