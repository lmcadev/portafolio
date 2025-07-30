import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Database, Code, Server, BrainCircuit, Briefcase, GraduationCap, FolderGit2, Mail } from 'lucide-react';

import { developerData } from '@/data/developerData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeaderBackground from '@/components/resume/HeaderBackground';

const Section = ({ children, className }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`py-16 px-4 md:px-8 ${className}`}
  >
    {children}
  </motion.section>
);

const ResumePage = () => {
  const { personal, about, skills, experience, education, course, portfolio } = developerData;

  return (
    <>
      <Helmet>
        <title>{`${personal.name} | ${personal.title}`}</title>
        <meta name="description" content={about} />
        {/* favicon */}
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'/%3E%3Cpath d='M16 3h-8v4h8V3z'/%3E%3Cpath d='M2 13h20'/%3E%3C/svg%3E" />
      </Helmet>
      <div className="bg-background text-foreground min-h-screen">
        <main className="relative z-10 container mx-auto px-4">
          <header className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
            <HeaderBackground />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-green-300 bg-clip-text text-transparent text-glow">
                {personal.name}
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-mono">{personal.title}</p>
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild>
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Contactar
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer">
                    <FolderGit2 className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                    <Briefcase className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </header>

          <Section>
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Sobre Mí</h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground text-lg">{about}</p>
          </Section>

          <Section>
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Habilidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {skill.category === 'Lenguajes' && <Code className="h-8 w-8 text-primary" />}
                      {skill.category === 'Bases de Datos' && <Database className="h-8 w-8 text-primary" />}
                      {skill.category === 'Frameworks y Herramientas' && <Server className="h-8 w-8 text-primary" />}
                      {skill.category === 'Otros' && <BrainCircuit className="h-8 w-8 text-primary" />}
                      <CardTitle>{skill.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {skill.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Experiencia Profesional</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle>{job.title}</CardTitle>
                        <p className="text-primary font-semibold">{job.company}</p>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{job.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
          
          <Section>
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Portafolio</h2>
            <Tabs defaultValue={portfolio[0].category} className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {Array.from(new Set(portfolio.map(p => p.category))).map(cat => (
                  <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                ))}
              </TabsList>
              {Array.from(new Set(portfolio.map(p => p.category))).map(cat => (
                <TabsContent key={cat} value={cat}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.filter(p => p.category === cat).map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="glass-card h-full flex flex-col">
                          <CardHeader>
                            <img  alt={project.title} className="rounded-t-lg aspect-video object-cover" src={project.image} />
                            <CardTitle className="mt-4">{project.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono bg-secondary text-primary px-2 py-1 rounded">{tag}</span>
                              ))}
                            </div>
                          </CardContent>
                          <div className="p-6 pt-0">
                            <Button variant="outline" className="w-full" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">Detalles</a>
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                            </Button>
                            
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Section>

          <Section>
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Educación</h2>
            <div className="max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <Card className="glass-card">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="mt-1">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Cursos</h2>
            <div className="max-w-3xl mx-auto">
              {course.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <Card className="glass-card">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="mt-1">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

          <footer className="text-center py-8 text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {personal.name}. Todos los derechos reservados.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default ResumePage;