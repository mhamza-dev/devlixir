"use client";

import React from "react";
import * as simpleIcons from "simple-icons";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconNameMap: Record<string, string> = {
  "Elixir": "elixir",
  "Phoenix": "phoenixframework",
  "Python": "python",
  "Flask": "flask",
  "Laravel": "laravel",
  "Node.js": "nodedotjs",
  "NestJS": "nestjs",
  "React": "react",
  "Angular": "angular",
  "Next.js": "nextdotjs",
  "Tailwind": "tailwindcss",
  "React Native": "react",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "AWS": "amazonaws",
};

export default function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const iconSlug = iconNameMap[name];
  const gradientId = `gradient-${name.replace(/\s+/g, '-').toLowerCase()}`;

  if (!iconSlug) {
    return (
      <div className={`${className} rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white`}>
        {name.charAt(0)}
      </div>
    );
  }

  // Find icon by slug from simple-icons
  const icon = Object.values(simpleIcons).find(
    (icon: any) => icon && typeof icon === 'object' && icon.slug === iconSlug
  ) as any;

  if (!icon || !icon.path) {
    return (
      <div className={`${className} rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white`}>
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center tech-icon-wrapper"
      style={{ width: '1.25rem', height: '1.25rem' }}
      data-gradient-id={gradientId}
    >
      <svg
        viewBox="0 0 24 24"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <title>{icon.title}</title>
        <path
          d={icon.path}
          fill={`#${icon.hex}`}
          className="tech-icon-path transition-all duration-300"
        />
      </svg>
    </span>
  );
}
