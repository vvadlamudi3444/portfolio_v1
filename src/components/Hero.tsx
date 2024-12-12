import React from 'react';
import { ArrowRight, Award, Cloud, Container, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Available for Senior DevOps Positions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Viswanath Vadlamudi</span>
            </h1>
            <p className="text-xl text-gray-600">
              Senior Cloud Infrastructure Engineer specializing in AWS, Kubernetes, and DevOps automation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Award className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">AWS Solutions Architect</h3>
                  <p className="text-sm text-gray-600">Certified Professional</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Container className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Kubernetes Administrator</h3>
                  <p className="text-sm text-gray-600">CKA Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Cloud className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">GCP Associate</h3>
                  <p className="text-sm text-gray-600">Cloud Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Server className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Infrastructure as Code</h3>
                  <p className="text-sm text-gray-600">Terraform Expert</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600&h=600"
              alt="DevOps Infrastructure"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}