import React from 'react';
import { Cloud, Container, GitBranch, Server, Shield, Terminal } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Observability Platform',
    description: 'Architected comprehensive observability solution using OpenTelemetry across 200+ AWS services with advanced monitoring capabilities',
    icon: <Server className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    tech: ['OpenTelemetry', 'Grafana', 'Prometheus', 'AWS CloudWatch'],
    achievements: [
      'Implemented distributed tracing with 100% coverage',
      'Reduced MTTR by 60% through correlated data',
      'Created unified visualization dashboards',
      'Automated alert response workflows'
    ]
  },
  {
    title: 'Cloud Security Framework',
    description: 'Implemented enterprise-wide security framework and compliance measures across multi-cloud infrastructure',
    icon: <Shield className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    tech: ['AWS Security Hub', 'GuardDuty', 'IAM', 'CloudTrail'],
    achievements: [
      'Reduced security incidents by 45%',
      'Implemented zero-trust architecture',
      'Automated security responses',
      'Enhanced compliance reporting'
    ]
  },
  {
    title: 'Infrastructure Monitoring',
    description: 'Developed comprehensive monitoring solution for cloud infrastructure with real-time alerting and analytics',
    icon: <Terminal className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    tech: ['Prometheus', 'Grafana', 'ELK Stack', 'Custom Dashboards'],
    achievements: [
      'Monitored 1000+ infrastructure components',
      'Implemented predictive alerting',
      'Reduced false positives by 70%',
      'Created custom monitoring solutions'
    ]
  },
  {
    title: 'Security Operations Center',
    description: 'Built and managed enterprise SOC with advanced threat detection and automated response capabilities',
    icon: <Shield className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    tech: ['AWS GuardDuty', 'Security Hub', 'CloudWatch', 'Lambda'],
    achievements: [
      'Implemented automated threat response',
      'Reduced incident response time by 65%',
      'Enhanced security posture',
      'Automated compliance reporting'
    ]
  },
  {
    title: 'Kubernetes Platform',
    description: 'Led implementation of enterprise-grade Kubernetes platform with advanced observability and security',
    icon: <Container className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600',
    tech: ['Kubernetes', 'Prometheus', 'Grafana', 'OpenTelemetry'],
    achievements: [
      'Managed 1000+ microservices',
      'Implemented zero-downtime deployments',
      'Enhanced security controls',
      'Automated scaling policies'
    ]
  },
  {
    title: 'AWS Infrastructure',
    description: 'Architected and deployed large-scale AWS infrastructure with comprehensive monitoring and security',
    icon: <Cloud className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    tech: ['AWS', 'CloudWatch', 'Security Hub', 'GuardDuty'],
    achievements: [
      'Implemented infrastructure monitoring',
      'Enhanced security controls',
      'Automated compliance checks',
      'Reduced security incidents'
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, icon, image, tech, achievements }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  tech: string[];
  achievements: string[];
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="space-y-2 mt-4">
          <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600 text-sm">{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}