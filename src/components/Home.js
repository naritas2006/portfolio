import { Container, Typography, Box, Button, Grid, Paper, Avatar, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

function Home() {
  const navigate = useNavigate();
  
  // Define animations
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;
  
  const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  `;
  
  const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        backgroundSize: '200% 200%',
        animation: `${gradientAnimation} 15s ease infinite`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
            }}
          />
          
          <Avatar
            src="https://media.licdn.com/dms/image/v2/D5603AQGqHuFyKm-IJA/profile-displayphoto-shrink_400_400/B56Zc21ZF.GQAg-/0/1748971657698?e=1756339200&v=beta&t=-nvrJwFLuAiK1pZnENMEbWp6iWp6uxjXb8IyqdDuJwU"
            alt="Narita Sanjeev Sharma"
            sx={{
              width: 150,
              height: 150,
              mb: 3,
              border: '4px solid white',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              animation: `${float} 6s ease-in-out infinite`,
            }}
          />
          
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${fadeIn} 1s ease-out`,
              mb: 1
            }}
          >
            Narita Sanjeev Sharma
          </Typography>
          
          <Divider sx={{ width: '80px', height: '4px', mx: 'auto', mb: 3, background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)' }} />
          
          <Typography 
            variant="h4" 
            color="primary" 
            gutterBottom
            sx={{
              fontWeight: 'medium',
              animation: `${fadeIn} 1.2s ease-out`,
              mb: 2
            }}
          >
            Computer Science Student
          </Typography>
          
          <Typography 
            variant="h6" 
            color="textSecondary" 
            paragraph 
            sx={{ 
              mb: 4, 
              maxWidth: '800px',
              lineHeight: 1.8,
              animation: `${fadeIn} 1.4s ease-out`,
            }}
          >
            A passionate third-year B.Tech student at VIT Chennai with interests in software development,
            web technologies, and cloud computing. Recently developed an AWS serverless application for automated meeting note generation
            that leverages AI and speech-to-text technologies. Focused on creating elegant solutions to complex problems.
          </Typography>
          
          <Grid 
            container 
            spacing={3} 
            justifyContent="center"
            sx={{ animation: `${fadeIn} 1.6s ease-out` }}
          >
            <Grid item>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                onClick={() => navigate('/projects')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
                  boxShadow: '0 4px 15px rgba(71, 118, 230, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 7px 20px rgba(71, 118, 230, 0.4)',
                  }
                }}
              >
                View My Projects
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                onClick={() => navigate('/contact')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    borderWidth: '2px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;