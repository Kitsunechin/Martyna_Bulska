'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, forwardRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  tags?: string[];
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  tags?: string[];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  tags,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const [isClient, setIsClient] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        ref={container}
        className='h-screen flex items-center justify-center sticky top-0'
      >
        <div
          className={`flex flex-col relative -top-[25%] h-auto md:h-[450px] w-[95%] md:w-[70%] rounded-2xl p-4 md:p-8 lg:p-12 origin-top bg-card border border-border backdrop-blur-sm`}
          style={{ top: `calc(-5vh + ${i * 25}px)` }}
        >
          {/* Mobile Layout: Vertical Stack */}
          <div className={`flex flex-col md:hidden h-full mt-4 gap-4`}>
            {/* Image Section - Mobile */}
            <div className={`relative w-full h-[200px] rounded-lg overflow-hidden`}>
              <a
                href={
                  title === "Guided tour" ? "/projects/guided-tour" :
                  title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                  title === "Productivity and fill rate" ? "/projects/productivity" :
                  title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                  title === "Gamification" ? "/projects/gamification" :
                  title === "Requesting time off" ? "/projects/time-off" :
                  title === "Web redesign" ? "/projects/web-redesign" :
                  title === "Revamping internal management system" ? "/projects/humadroid" :
                  '#'
                }
                target={
                  title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Gamification" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
                }
                className="block w-full h-full cursor-pointer"
              >
                <div className={`w-full h-full`}>
                  <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
                </div>
              </a>
            </div>

            {/* Content Section - Mobile */}
            <div className={`w-full`}>
              <h2 className='text-xl font-display font-bold text-foreground mb-3'>{title}</h2>
              <p className='text-sm text-foreground leading-relaxed mb-4'>{description}</p>
              {tags && tags.length > 0 && (
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium font-sans'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <span className='flex items-center gap-2 pt-2 min-h-[44px]'>
                <a
                  href={
                    title === "Guided tour" ? "/projects/guided-tour" :
                    title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                    title === "Productivity and fill rate" ? "/projects/productivity" :
                    title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                    title === "Requesting time off" ? "/projects/time-off" :
                    title === "Web redesign" ? "/projects/web-redesign" :
                    title === "Revamping internal management system" ? "/projects/humadroid" :
                    '#'
                  }
                  target={
                    title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
                  }
                  className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2'
                >
                  View project
                </a>
                <ArrowRight className="w-4 h-4 text-primary" />
              </span>
            </div>
          </div>

          {/* Desktop Layout: Horizontal */}
          <div className={`hidden md:flex h-full mt-6 gap-10`}>
            <div className={`w-[40%] relative top-[10%]`}>
              <h2 className='text-2xl md:text-3xl font-display font-bold text-foreground mb-4'>{title}</h2>
              <p className='text-base text-foreground leading-relaxed mb-6'>{description}</p>
              {tags && tags.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-4'>
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium font-sans'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <span className='flex items-center gap-2 pt-2'>
                <a
                  href={
                    title === "Guided tour" ? "/projects/guided-tour" :
                    title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                    title === "Productivity and fill rate" ? "/projects/productivity" :
                    title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                    title === "Requesting time off" ? "/projects/time-off" :
                    title === "Web redesign" ? "/projects/web-redesign" :
                    title === "Revamping internal management system" ? "/projects/humadroid" :
                    '#'
                  }
                  target={
                    title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
                  }
                  className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
                >
                  View project
                </a>
                <ArrowRight className="w-4 h-4 text-primary" />
              </span>
            </div>
            <div className={`relative w-[60%] h-full rounded-lg overflow-hidden `}>
              <a
                href={
                  title === "Guided tour" ? "/projects/guided-tour" :
                  title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                  title === "Productivity and fill rate" ? "/projects/productivity" :
                  title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                  title === "Gamification" ? "/projects/gamification" :
                  title === "Requesting time off" ? "/projects/time-off" :
                  title === "Web redesign" ? "/projects/web-redesign" :
                  title === "Revamping internal management system" ? "/projects/humadroid" :
                  '#'
                }
                target={
                  title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Gamification" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
                }
                className="block w-full h-full cursor-pointer"
              >
                <div className={`w-full h-full`}>
                  <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-auto md:h-[450px] w-[95%] md:w-[70%] rounded-2xl p-4 md:p-8 lg:p-12 origin-top bg-card border border-border backdrop-blur-sm`}
      >
        {/* Mobile Layout: Vertical Stack */}
        <div className={`flex flex-col md:hidden h-full mt-4 gap-4`}>
          {/* Image Section - Mobile */}
          <div className={`relative w-full h-[200px] rounded-lg overflow-hidden`}>
            <a
              href={
                title === "Guided tour" ? "/projects/guided-tour" :
                title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                title === "Productivity and fill rate" ? "/projects/productivity" :
                title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                title === "Gamification" ? "/projects/gamification" :
                title === "Requesting time off" ? "/projects/time-off" :
                title === "Web redesign" ? "/projects/web-redesign" :
                title === "Revamping internal management system" ? "/projects/humadroid" :
                '#'
              }
              target={
                title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Gamification" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
              }
              className="block w-full h-full cursor-pointer"
            >
              <motion.div
                className={`w-full h-full`}
                style={{ scale: imageScale }}
              >
                <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
              </motion.div>
            </a>
          </div>

          {/* Content Section - Mobile */}
          <div className={`w-full`}>
            <h2 className='text-xl font-display font-bold text-foreground mb-3'>{title}</h2>
            <p className='text-sm text-foreground leading-relaxed mb-4'>{description}</p>
            {tags && tags.length > 0 && (
              <div className='flex flex-wrap gap-1.5 mb-4'>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium font-sans'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span className='flex items-center gap-2 pt-2 min-h-[44px]'>
              <a
                href={
                  title === "Guided tour" ? "/projects/guided-tour" :
                  title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                  title === "Productivity and fill rate" ? "/projects/productivity" :
                  title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                  title === "Requesting time off" ? "/projects/time-off" :
                  title === "Web redesign" ? "/projects/web-redesign" :
                  title === "Revamping internal management system" ? "/projects/humadroid" :
                  '#'
                }
                target={
                  title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
                }
                className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2'
              >
                View project
              </a>
              <ArrowRight className="w-4 h-4 text-primary" />
            </span>
          </div>
        </div>

        {/* Desktop Layout: Horizontal */}
        <div className={`hidden md:flex h-full mt-6 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <h2 className='text-2xl md:text-3xl font-display font-bold text-foreground mb-4'>{title}</h2>
            <p className='text-base text-foreground leading-relaxed mb-6'>{description}</p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-4'>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium font-sans'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <span className='flex items-center gap-2 pt-2'>
              <a
                href={
                  title === "Guided tour" ? "/projects/guided-tour" :
                  title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                  title === "Productivity and fill rate" ? "/projects/productivity" :
                  title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                  title === "Gamification" ? "/projects/gamification" :
                  title === "Requesting time off" ? "/projects/time-off" :
                  title === "Web redesign" ? "/projects/web-redesign" :
                  title === "Revamping internal management system" ? "/projects/humadroid" :
                  '#'
                }
                target={
                  title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Gamification" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
                }
                className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
              >
                View project
              </a>
              <ArrowRight className="w-4 h-4 text-primary" />
            </span>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <a
              href={
                title === "Guided tour" ? "/projects/guided-tour" :
                title === "Introducing AI recruiter Clara" ? "/projects/clara" :
                title === "Productivity and fill rate" ? "/projects/productivity" :
                title === "Shift satisfaction" ? "/projects/shift-satisfaction" :
                title === "Requesting time off" ? "/projects/time-off" :
                title === "Web redesign" ? "/projects/web-redesign" :
                title === "Revamping internal management system" ? "/projects/humadroid" :
                '#'
              }
              target={
                title === "Guided tour" || title === "Introducing AI recruiter Clara" || title === "Productivity and fill rate" || title === "Shift satisfaction" || title === "Requesting time off" || title === "Web redesign" || title === "Revamping internal management system" ? '_self' : '_blank'
              }
              className="block w-full h-full cursor-pointer"
            >
              <motion.div
                className={`w-full h-full`}
                style={{ scale: imageScale }}
              >
                <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
              </motion.div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
      <main className='bg-transparent -mt-20' ref={container}>
        <section className='text-foreground w-full bg-transparent'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                tags={project.tags}
                progress={scrollYProgress}
                range={[Math.min(i * 0.25, 0.9), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
  );
});

Component.displayName = 'StackingCard';

export default Component;