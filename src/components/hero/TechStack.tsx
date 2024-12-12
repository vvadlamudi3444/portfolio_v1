import { motion } from 'framer-motion';
import { Cloud, Container, GitBranch, Server, Shield, Terminal } from 'lucide-react';

const technologies = [
  { icon: Cloud, label: 'AWS Services', items: ['EC2', 'S3', 'RDS', 'Lambda'] },
  { icon: Container, label: 'Containers', items: ['Docker', 'Kubernetes', 'ECS'] },
  { icon: GitBranch, label: 'CI/CD', items: ['Jenkins', 'GitLab', 'GitHub Actions'] },
  { icon: Server, label: 'Infrastructure', items: ['Terraform', 'Ansible', 'CloudFormation'] },
  { icon: Shield, label: 'Security', items: ['IAM', 'Security Hub', 'GuardDuty'] },
  { icon: Terminal, label: 'Monitoring', items: ['OpenTelemetry', 'Grafana', 'Prometheus'] },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <tech.icon className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-gray-900">{tech.label}</h3>
          </div>
          <ul className="space-y-2">
            {tech.items.map((item) => (
              <li key={item} className="text-sm text-gray-600">{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}