import { LockRounded, MailRounded } from '@mui/icons-material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Box, Button, Card, Checkbox, Container, Sheet, TextField, Typography, useColorScheme } from '@mui/joy';
import { FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInputControl from '../hooks/useInputControl';
import { emailValidator, passwordValidator } from '../shared/validators';

const PracticeForms: React.FC = () => {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode('dark');
  }, [setMode]);

  const firstNameControl = useInputControl('', (value) => value.length > 0);
  const lastNameControl = useInputControl('', () => true);
  const emailControl = useInputControl<string>('', emailValidator);
  const passwordControl = useInputControl<string>('', passwordValidator);
  const repeatPasswordControl = useInputControl<string>('', (value) => passwordControl.value === value);
  const acceptTOUControl = useInputControl(false, (value) => value === true);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const controls = [
      firstNameControl,
      lastNameControl,
      emailControl,
      passwordControl,
      repeatPasswordControl,
      acceptTOUControl,
    ];

    controls.forEach((control) => control.touch());
  };

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
          <form onSubmit={submitHandler}>
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
                '& > *': {
                  flex: 1,
                },
              }}
              >
                <TextField
                  type="text"
                  name="first-name"
                  label="First name"
                  placeholder="Stephen"
                  startDecorator={<PersonRoundedIcon />}
                  value={firstNameControl.value}
                  error={firstNameControl.showError}
                  onBlur={firstNameControl.touch}
                  onChange={(event) => firstNameControl.updateValue(event.currentTarget.value)}
                  helperText={firstNameControl.showError && 'Name must be at least 1 character long'}
                />
                <TextField
                  type="text"
                  name="last-name"
                  label="Last name"
                  placeholder="Hawking"
                  value={lastNameControl.value}
                  error={lastNameControl.showError}
                  onBlur={lastNameControl.touch}
                  onChange={(event) => lastNameControl.updateValue(event.currentTarget.value)}
                />
              </Box>
              <TextField
                type="email"
                name="e-mail"
                label="E-mail address"
                placeholder="black@hole.net"
                startDecorator={<MailRounded />}
                value={emailControl.value}
                error={emailControl.showError}
                onBlur={emailControl.touch}
                onChange={(event) => emailControl.updateValue(event.currentTarget.value)}
                helperText={emailControl.showError && 'E-mail must be in correct format'}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="**********"
                startDecorator={<LockRounded />}
                value={passwordControl.value}
                error={passwordControl.showError}
                onBlur={passwordControl.touch}
                onChange={(event) => passwordControl.updateValue(event.currentTarget.value)}
                helperText={passwordControl.showError && 'Password must contain minimum eight characters, one uppercase letter, one lowercase letter and one number'}
              />
              <TextField
                type="password"
                name="rep-password"
                label="Repeat password"
                placeholder="**********"
                startDecorator={<LockRounded />}
                value={repeatPasswordControl.value}
                error={repeatPasswordControl.showError}
                onBlur={repeatPasswordControl.touch}
                onChange={(event) => repeatPasswordControl.updateValue(event.currentTarget.value)}
                helperText={repeatPasswordControl.showError && 'Passwords must match'}
              />
              <Checkbox
                label="I accept the terms of use"
                checked={acceptTOUControl.value}
                color={acceptTOUControl.showError ? 'danger' : 'primary'}
                onBlur={acceptTOUControl.touch}
                onChange={(event) => acceptTOUControl.updateValue(event.currentTarget.checked)}
              />
            </Box>
            <Button
              sx={{
                marginTop: 1,
                width: '100%',
              }}
              type="submit"
            >
              Create account
            </Button>
            <Box sx={{
              my: 2,
            }}
            >
              <Typography
                endDecorator={<Link to="log-in">Log in</Link>}
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
};

export default PracticeForms;
