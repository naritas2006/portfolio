import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloudIcon from '@mui/icons-material/Cloud';
import { keyframes } from '@mui/system';

// Define animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function Skills() {
  const programmingSkills = ['Java', 'JavaScript', 'Python', 'C', 'C++', 'HTML', 'CSS'];

  const awsSkills = [
    'Amazon S3', 'AWS Lambda', 'Amazon Transcribe', 'Amazon Bedrock',
    'Amazon DynamoDB', 'Amazon SES', 'AWS CloudWatch', 'IAM'
  ];

  const certifications = [
    { name: 'DevOps Fundamentals', issuer: 'IBM' },
    { name: 'AI & Deep Learning', issuer: 'Infosys Springboard' }
  ];

  const certificateImages = [
    '/first.png',
    '/second.png',
    '/third.png',
    '/npl.png',
    '/aicert.png',
    '/deeplearning.png' // ✅ Make sure this file exists and has the correct name!
  ];

  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <Typography variant="h3" gutterBottom sx={{
          textAlign: 'center',
          background: 'linear-gradient(45deg, #4776E6 30%, #8E54E9 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4
        }}>
          Skills & Certifications
        </Typography>

        <Grid container spacing={4}>
          {/* Programming Skills */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{
              p: 3, height: '100%',
              animation: `${fadeIn} 0.8s ease-out`,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <CodeIcon sx={{ mr: 1 }} /> Programming Languages
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {programmingSkills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{
                      m: 0.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* AWS Skills */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{
              p: 3, height: '100%',
              animation: `${fadeIn} 0.8s ease-out`,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <CloudIcon sx={{ mr: 1 }} /> AWS Services
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {awsSkills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="secondary"
                    variant="outlined"
                    sx={{
                      m: 0.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                        color: 'white'
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Certifications Info */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{
              p: 3, mt: 2,
              animation: `${fadeIn} 1.2s ease-out`,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkspacePremiumIcon sx={{ mr: 1 }} /> Certifications
              </Typography>
              <Grid container spacing={2}>
                {certifications.map((cert) => (
                  <Grid item xs={12} sm={6} key={cert.name}>
                    <Box sx={{
                      p: 2,
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main'
                      }
                    }}>
                      <Typography variant="h6">{cert.name}</Typography>
                      <Typography color="textSecondary">Issued by {cert.issuer}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Certificate Images (All 50% width) */}
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {certificateImages.map((src, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    height: 300, // 🔧 Fixed height for consistency
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      transform: 'scale(1.03)'
                    }
                  }}>
                    <img
                      src={src}
                      alt={`Certificate ${index + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
