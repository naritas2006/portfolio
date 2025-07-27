import { Container, Typography, Box, Grid, TextField, Button, Paper, Stack, Divider, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Define animations
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;
  
  const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  `;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      <Container>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            mb: 6, 
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.9)',
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
              background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            Get In Touch
          </Typography>
          <Divider sx={{ width: '80px', height: '4px', mx: 'auto', mb: 4, background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)' }} />
          <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, animation: `${fadeIn} 1.2s ease-out` }}>
            Have a question or want to work together? Feel free to contact me!
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6} sx={{ animation: `${fadeIn} 1.4s ease-out` }}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 40px rgba(31, 38, 135, 0.2)',
                }
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  color: theme.palette.primary.main,
                  mb: 3
                }}
              >
                Send Me a Message
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit"
                  sx={{ 
                    mt: 3,
                    py: 1.5,
                    px: 4,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
                    boxShadow: '0 4px 15px rgba(71, 118, 230, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 7px 20px rgba(71, 118, 230, 0.4)',
                      animation: `${pulse} 1s infinite`,
                    }
                  }}
                  endIcon={<SendIcon />}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6} sx={{ animation: `${fadeIn} 1.6s ease-out` }}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 40px rgba(31, 38, 135, 0.2)',
                }
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  color: theme.palette.primary.main,
                  mb: 3
                }}
              >
                Contact Information
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Typography paragraph sx={{ mb: 4 }}>
                Feel free to reach out to me through any of the following channels:
              </Typography>
              
              <Stack spacing={3}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    background: 'rgba(71, 118, 230, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(71, 118, 230, 0.1)',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Typography>
                      <a href="mailto:narita.sanjeev2023@vitstudent.ac.in" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                        narita.sanjeev2023@vitstudent.ac.in
                      </a>
                    </Typography>
                  </Box>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    background: 'rgba(71, 118, 230, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(71, 118, 230, 0.1)',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinkedInIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Typography>
                      <a href="https://shorturl.at/4hO2T" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                        https://shorturl.at/4hO2T
                      </a>
                    </Typography>
                  </Box>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    background: 'rgba(71, 118, 230, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(71, 118, 230, 0.1)',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <GitHubIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Typography>
                      <a href="https://github.com/naritas2006" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                       https://github.com/naritas2006
                      </a>
                    </Typography>
                  </Box>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    background: 'rgba(71, 118, 230, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(71, 118, 230, 0.1)',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Typography fontWeight={500}>
                      Chennai, Tamil Nadu, India
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;