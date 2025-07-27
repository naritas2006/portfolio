import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip, Stack, CardMedia, Divider, Paper, useTheme, Badge } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

function Projects() {
  const theme = useTheme();
  const [hoveredId, setHoveredId] = useState(null);
  
  // Animation for card hover
  const pulseAnimation = keyframes`
    0% { transform: scale(1); box-shadow: ${theme.shadows[3]}; }
    50% { transform: scale(1.02); box-shadow: ${theme.shadows[8]}; }
    100% { transform: scale(1); box-shadow: ${theme.shadows[3]}; }
  `;
  
  const projects = [
    {
      id: 1,
      title: 'Cloud Mystery Game',
      description: 'An interactive web-based puzzle game with progressive levels that challenges players to solve cryptography, visual puzzles, and file manipulation challenges.',
      technologies: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      githubLink: 'https://github.com/metatarsals/cloud-mystery-game',
      imageUrl: 'https://via.placeholder.com/600x300/3f51b5/ffffff?text=Cloud+Mystery+Game',
      color: '#3f51b5',
      featured: true
    },
    {
  id: 5,
  title: 'Book Condition Checker',
  description: 'A Python ML-powered web app that analyzes uploaded book images to estimate and display the physical condition as a percentage. This project uses a AI model to classify book conditions and provides a user-friendly interface for uploading images and displaying results.',
  technologies: ['Python', 'Machine Learning', 'Flask', 'OpenCV'],
  githubLink: 'https://github.com/amrithab07/Book-Condition-Checker',
  imageUrl: 'https://via.placeholder.com/600x300/4caf50/ffffff?text=Book+Condition+Checker',
  color: '#4caf50'
},

    {
      id: 2,
      title: 'Scheduler Visualizer',
      description: 'A simple Python GUI application to visualize CPU scheduling algorithms. Built with PyQt5, it supports process arrival, idle time visualization, and timeline generation.',
      technologies: ['Python', 'PyQt5', 'GUI Development'],
      githubLink: 'https://github.com/naritas2006/fairytale-scheduler/tree/main',
      imageUrl: 'https://via.placeholder.com/600x300/FF5722/ffffff?text=Scheduler+Visualizer',
      color: '#FF5722'
    },
    {
      id: 3,
      title: 'Automated Meeting Note Generator',
      description: 'Automatically generate and email meeting summaries from uploaded audio files using AWS serverless services. This project eliminates manual note-taking by leveraging speech-to-text, AI summarization, and automated email delivery.',
      technologies: ['AWS Lambda', 'Amazon S3', 'Amazon Transcribe', 'Amazon Bedrock', 'Amazon DynamoDB', 'Amazon SES', 'AWS CloudWatch', 'IAM'],
      githubLink: 'https://github.com/Samriddhi903/Minutes_in_Seconds.git',
      imageUrl: 'https://via.placeholder.com/600x300/8E54E9/ffffff?text=Meeting+Note+Generator',
      color: '#8E54E9'
    },
    {
  id: 4,
  title: 'Portfolio Website',
  description: 'A personal portfolio website built with React and Material UI to showcase my projects, skills, and experience. This website serves as a digital resume and a platform to present my work to potential employers.',
  technologies: ['React', 'Material UI', 'React Router'],
  githubLink: 'https://github.com/naritas2006/portfolio', // ✅ Fixed link
  imageUrl: 'https://via.placeholder.com/600x300/00796b/ffffff?text=Portfolio+Website',
  color: '#00796b'
}

  ];

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(to bottom, #f5f5f5, #ffffff)',
      minHeight: '100vh'
    }}>
      <Container>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            mb: 6, 
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            My Projects
          </Typography>
          <Divider sx={{ width: '80px', height: '4px', mx: 'auto', mb: 4, background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} />
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            Explore my latest work and personal projects
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Badge
                badgeContent={project.featured ? "Featured" : null}
                color="secondary"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& .MuiBadge-badge': {
                    top: 20,
                    right: 20,
                    padding: '0 12px',
                    height: 24,
                    borderRadius: 12,
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }
                }}
                invisible={!project.featured}
              >
                <Card
  elevation={hoveredId === project.id ? 8 : 3}
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: '420px',
    borderRadius: 2,
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    transform: hoveredId === project.id ? 'translateY(-8px)' : 'none',
    '&:hover': {
      animation: `${pulseAnimation} 2s infinite ease-in-out`,
    },
    border: project.featured
      ? `2px solid ${project.color}`
      : `1px solid ${theme.palette.grey[200]}`,
    boxShadow: project.featured
      ? `0 4px 20px ${project.color}40`
      : theme.shadows[hoveredId === project.id ? 8 : 3],
  }}
  onMouseEnter={() => setHoveredId(project.id)}
  onMouseLeave={() => setHoveredId(null)}
>

               
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      fontWeight: 'bold',
                      color: project.color
                    }}
                  >
                    <CodeIcon sx={{ mr: 1 }} /> {project.title}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip 
                        key={tech} 
                        label={tech} 
                        size="small" 
                        color="primary" 
                        sx={{ 
                          mb: 1, 
                          fontWeight: 'medium',
                          background: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}40`
                        }} 
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, justifyContent: 'center' }}>
                  <Button 
                    variant="outlined"
                    size="medium" 
                    startIcon={<GitHubIcon />} 
                    href={project.githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      borderColor: project.color,
                      color: project.color,
                      '&:hover': {
                        borderColor: project.color,
                        backgroundColor: `${project.color}10`,
                      }
                    }}
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
              </Badge>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;