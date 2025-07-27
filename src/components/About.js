import { Container, Typography, Box, Paper, Grid, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkIcon from '@mui/icons-material/Work';
import { keyframes } from '@mui/system';

// Define animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function About() {
  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{
            textAlign: 'center',
            background: 'linear-gradient(45deg, #4776E6 30%, #8E54E9 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4
          }}
        >
          About Me
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              animation: `${fadeIn} 0.8s ease-out`
            }}>
              <Avatar
                src="https://media.licdn.com/dms/image/v2/D5603AQGqHuFyKm-IJA/profile-displayphoto-shrink_400_400/B56Zc21ZF.GQAg-/0/1748971657698?e=1756339200&v=beta&t=-nvrJwFLuAiK1pZnENMEbWp6iWp6uxjXb8IyqdDuJwU"
                alt="Narita Sanjeev Sharma"
                sx={{
                  width: 200,
                  height: 200,
                  mb: 3,
                  border: '4px solid white',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                }}
              />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Narita Sanjeev Sharma
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Computer Science Student
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                VIT Chennai | Class of 2023
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4,
                height: '100%',
                animation: `${fadeIn} 1s ease-out`,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#4776E6', fontWeight: 'medium' }}>
                My Journey
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Typography paragraph sx={{ lineHeight: 1.8 }}>
                I'm a third-year B.Tech Computer Science student at VIT Chennai, passionate about technology,
                software development, and cloud computing. I enjoy solving complex problems and creating efficient solutions.
              </Typography>
              
              <Typography paragraph sx={{ lineHeight: 1.8 }}>
                My recent focus has been on AWS serverless architecture, where I've developed an automated meeting note generator
                that uses AI and speech-to-text technologies to transform audio recordings into structured, speaker-attributed summaries.
                This project showcases my ability to integrate multiple AWS services into a cohesive solution.
              </Typography>
              
              <Typography paragraph sx={{ lineHeight: 1.8 }}>
                Currently pursuing my degree, I'm actively learning and working on various projects
                to enhance my skills in software development, cloud computing, and AI integration.
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#8E54E9', fontWeight: 'medium' }}>
                  Areas of Interest
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CloudIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Cloud Computing & Serverless Architecture" 
                      secondary="Experience with AWS services including Lambda, S3, Transcribe, Bedrock, DynamoDB, and SES"
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CodeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Software Development" 
                      secondary="Proficient in Java, JavaScript, Python, and web technologies"
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <WorkIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="AI & Machine Learning" 
                      secondary="Interested in AI applications, particularly in natural language processing and speech recognition"
                    />
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;