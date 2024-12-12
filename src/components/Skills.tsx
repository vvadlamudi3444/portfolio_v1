import React from 'react';
import { Cloud, Server, Database, Cog, Shield, Terminal } from 'lucide-react';

const skills = {
  cloud: [
    'AWS (EC2, S3, RDS, Lambda)',
    'Google Cloud Platform',
    'Infrastructure as Code',
    'Serverless Architecture'
  ],
  devops: [
    'Kubernetes/Docker',
    'Jenkins/GitLab CI',
    'Terraform',
    'Ansible'
  ],
  monitoring: [
    'OpenTelemetry',
    'Grafana',
    'CloudWatch',
    'Prometheus'
  ],
  automation: [
    'Python',
    'Bash/Shell',
    'Golang',
    'Infrastructure Automation'
  ],
  security: [
    'IAM/RBAC',
    'Security Groups',
    'AWS Security Hub',
    'Cloud Security'
  ],
  tools: [
    'Git/GitHub',
    'JIRA/Confluence',
    'Maven/Gradle',
    'ELK Stack'
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Cloud Services"
            skills={skills.cloud}
            icon={<Cloud className="w-6 h-6" />}
          />
          <SkillCard
            title="DevOps & CI/CD"
            skills={skills.devops}
            icon={<Server className="w-6 h-6" />}
          />
          <SkillCard
            title="Monitoring & Observability"
            skills={skills.monitoring}
            icon={<Cog className="w-6 h-6" />}
          />
          <SkillCard
            title="Automation"
            skills={skills.automation}
            icon={<Terminal className="w-6 h-6" />}
          />
          <SkillCard
            title="Security"
            skills={skills.security}
            icon={<Shield className="w-6 h-6" />}
          />
          <SkillCard
            title="Tools & Platforms"
            skills={skills.tools}
            icon={<Database className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactNode }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-600">{skill}</li>
        ))}
      </ul>
    </div>
  );
}