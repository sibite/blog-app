import { Box, Button, Card, Checkbox, Container, Sheet, TextField, Typography, useColorScheme } from '@mui/joy';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PracticeForms() {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode('dark');
  }, [setMode]);

  return (
    <Sheet>
      <Container
        maxWidth="sm"
        sx={{
          height: '100vh',
          display: 'flex',
          flexFlow: 'column wrap',
          justifyContent: 'center',
        }}
      >
        <Card variant="outlined">
          <Typography level="h4" textAlign="center" my={2}>
            Sign up
          </Typography>
          <form>
            <Box sx={{
              display: 'grid',
              gap: 3,
              my: 4,
            }}
            >
              <Box sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                gap: 3,
                justifyContent: 'space-between',
                '& > *': {
                  flexGrow: 1,
                },
              }}
              >
                <TextField
                  type="text"
                  name="first-name"
                  label="First name"
                  placeholder="Stephen"
                />
                <TextField
                  type="text"
                  name="last-name"
                  label="Last name"
                  placeholder="Hawking"
                />
              </Box>
              <TextField
                type="email"
                name="e-mail"
                label="E-mail address"
                placeholder="black@hole.net"
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="**********"
              />
              <TextField
                type="password"
                name="rep-password"
                label="Repeat password"
                placeholder="**********"
              />
              <Checkbox label="I accept the terms of use" />
            </Box>
            <Button sx={{
              marginTop: 1,
              width: '100%',
            }}
            >
              Create account
            </Button>
            <Box sx={{
              my: 2,
            }}
            >
              <Typography
                endDecorator={
                  <Link to="log-in">Log in</Link>
                }
                justifyContent="center"
              >
                Already have an account?
              </Typography>
            </Box>
          </form>
        </Card>
      </Container>
    </Sheet>
  );
}

export default PracticeForms;
