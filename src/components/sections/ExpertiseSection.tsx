// components/sections/ExpertiseSection.tsx
'use client';

import InteractiveCard from '@/components/InteractiveCard';
import SkillCard from '@/components/SkillCard';
import Reveal from '@/components/Reveal';
import { Icons } from '@/utils/icons';
import { EXPERTISE } from '@/utils/constants';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-gradient mb-4">
            Expertise &amp; Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What I focus on and the technologies I build with
          </p>
        </Reveal>

        <Reveal className="mb-16" delay={0.1}>
          <h2 className="text-2xl font-bold font-display text-center mb-8 text-gray-900 dark:text-white">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERTISE.map((item, index) => (
              <InteractiveCard
                key={index}
                title={item.title}
                description={item.description}
                index={index}
                className="hover:shadow-2xl"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl font-bold font-display text-center mb-8 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <SkillCard
              icon={<Icons.python />}
              name="Python"
              level="Advanced"
              description="Backend development with FastAPI and Flask"
            />
            <SkillCard
              icon={<Icons.fastapi />}
              name="FastAPI"
              level="Advanced"
              description="Building high-performance REST APIs and ML-serving backends"
            />
            <SkillCard
              icon={<Icons.js />}
              name="JavaScript"
              level="Advanced"
              description="Full-stack development with Node.js and React"
            />
            <SkillCard
              icon={<Icons.nodejs />}
              name="Node.js"
              level="Advanced"
              description="Building scalable backend systems and APIs"
            />
            <SkillCard
              icon={<Icons.react />}
              name="React"
              level="Advanced"
              description="Creating responsive and interactive UIs"
            />
            <SkillCard
              icon={<Icons.nextjs />}
              name="Next.js"
              level="Advanced"
              description="Server-rendered React apps with the App Router"
            />
            <SkillCard
              icon={<Icons.flutter />}
              name="Flutter"
              level="Intermediate"
              description="Building cross-platform mobile applications"
            />
            <SkillCard
              icon={<Icons.mongodb />}
              name="MongoDB"
              level="Advanced"
              description="NoSQL database design and management"
            />
            <SkillCard
              icon={<Icons.postgresql />}
              name="PostgreSQL"
              level="Intermediate"
              description="Relational database design and optimization"
            />
            <SkillCard
              icon={<Icons.redis />}
              name="Redis"
              level="Intermediate"
              description="In-memory caching and message brokering for high-throughput systems"
            />
            <SkillCard
              icon={<Icons.celery />}
              name="Celery"
              level="Intermediate"
              description="Distributed task queues for async and background job processing"
            />
            <SkillCard
              icon={<Icons.websocket />}
              name="WebSocket"
              level="Advanced"
              description="Real-time bidirectional communication for live features"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
