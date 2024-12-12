import { Project } from '../types';
import { 
  Cloud, Database, Server, Shield, 
  GitBranch, Monitor, Terminal, Container 
} from 'lucide-react';

export const projects: Project[] = [
  {
    title: 'Enterprise Cloud Infrastructure at Yahoo',
    company: 'Yahoo',
    period: '2023 - Present',
    description: 'Led architecture and deployment of large-scale Kubernetes clusters across AWS and GCP for Sports, Fantasy, and Finance divisions, managing infrastructure for 2500+ applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    icon: Cloud,
    tech: ['AWS EKS', 'GCP GKE', 'Terraform', 'OpenTelemetry'],
    achievements: [
      'Managed infrastructure for 2500+ applications with 99.99% uptime',
      'Handled 2M+ requests/second at peak load',
      'Reduced deployment time by 60%',
      'Implemented zero-trust security architecture'
    ]
  },
  {
    title: 'Enterprise Observability Platform',
    company: 'Yahoo',
    period: '2023 - Present',
    description: 'Architected comprehensive observability solution using OpenTelemetry across 200+ AWS services with advanced monitoring capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    icon: Monitor,
    tech: ['OpenTelemetry', 'Prometheus', 'Grafana', 'AWS CloudWatch'],
    achievements: [
      'Implemented distributed tracing with 100% coverage',
      'Reduced MTTR by 60% through correlated data',
      'Created unified visualization dashboards',
      'Automated alert response workflows'
    ]
  },
  {
    title: 'Cloud Security Framework',
    company: 'Yahoo',
    period: '2023 - Present',
    description: 'Implemented enterprise-wide security framework and compliance measures across multi-cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    icon: Shield,
    tech: ['AWS Security Hub', 'GuardDuty', 'IAM', 'CloudTrail'],
    achievements: [
      'Reduced security incidents by 45%',
      'Implemented zero-trust architecture',
      'Automated security responses',
      'Enhanced compliance reporting'
    ]
  },
  {
    title: 'Large-Scale AWS Infrastructure',
    company: 'ATMOS Energy',
    period: '2022 - 2023',
    description: 'Led implementation of comprehensive cloud infrastructure with 250+ servers using AWS services, focusing on automation and security.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    icon: Server,
    tech: ['AWS', 'Terraform', 'Ansible', 'Python'],
    achievements: [
      'Automated deployment for 100+ microservices',
      'Reduced deployment time from 60 to 15 minutes',
      'Implemented infrastructure as code',
      'Enhanced security with automated scanning'
    ]
  },
  {
    title: 'DevOps Automation Pipeline',
    company: 'Tech Mahindra',
    period: '2018 - 2021',
    description: 'Developed comprehensive CI/CD pipelines and automated infrastructure provisioning using modern DevOps practices.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1200',
    icon: GitBranch,
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
    achievements: [
      'Automated 90% of deployment processes',
      'Reduced deployment failures by 75%',
      'Implemented container orchestration',
      'Created reusable CI/CD templates'
    ]
  },
  {
    title: 'Container Orchestration Platform',
    company: 'Tech Mahindra',
    period: '2018 - 2021',
    description: 'Architected and implemented enterprise-grade container orchestration platform using Kubernetes and Docker.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1200',
    icon: Container,
    tech: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'],
    achievements: [
      'Managed 1000+ microservices deployment',
      'Achieved 99.99% platform uptime',
      'Reduced resource utilization by 40%',
      'Implemented automated scaling policies'
    ]
  }
];