import { Skill } from '../types';
import { 
  Cloud, Database, Lock, GitBranch, 
  Monitor, Container, Server, Terminal 
} from 'lucide-react';

export const skills: Skill[] = [
  {
    category: 'Cloud Services',
    icon: Cloud,
    items: [
      'AWS (EC2, S3, Lambda, RDS)',
      'Google Cloud Platform',
      'Serverless Architecture',
      'Cloud Formation'
    ]
  },
  {
    category: 'DevOps & CI/CD',
    icon: GitBranch,
    items: [
      'Jenkins Pipeline',
      'GitLab CI/CD',
      'GitHub Actions',
      'Continuous Deployment'
    ]
  },
  {
    category: 'Infrastructure',
    icon: Server,
    items: [
      'Terraform',
      'Ansible',
      'Infrastructure as Code',
      'Configuration Management'
    ]
  },
  {
    category: 'Containers',
    icon: Container,
    items: [
      'Kubernetes (EKS/GKE)',
      'Docker',
      'Container Orchestration',
      'Microservices'
    ]
  },
  {
    category: 'Monitoring',
    icon: Monitor,
    items: [
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'ELK Stack'
    ]
  },
  {
    category: 'Security',
    icon: Lock,
    items: [
      'AWS Security Hub',
      'IAM/RBAC',
      'GuardDuty',
      'Security Automation'
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    items: [
      'RDS/Aurora',
      'DynamoDB',
      'MongoDB',
      'PostgreSQL'
    ]
  },
  {
    category: 'Scripting',
    icon: Terminal,
    items: [
      'Python',
      'Bash/Shell',
      'Golang',
      'Infrastructure Automation'
    ]
  }
];