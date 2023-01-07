import {
    Box,
    Container,
    createTheme,
    Stack,
    ThemeProvider,
    Typography
} from "@suid/material";

import MySiteTitle from "~/components/MySiteTitle";
import FeaturesGrid from "~/components/FeaturesGrid";

export default function ChatSetup() {
    let theme = createTheme({
        palette: {
            mode: "dark",
            // primary: {
            //     main: '#3f51b5',
            // },
            // secondary: {
            //     main: '#f50057',
            // },
        }
    });

    return (
        <>
            <MySiteTitle>Setup</MySiteTitle>
            {/* <main class="text-center mx-auto text-gray-700 p-4"> */}
            <ThemeProvider theme={theme}>
                {/* <main style={{"background-color": useTheme().palette.background.default}}> */}
                <main>
                    <Container>
                        {/* A spacer. Adding a margin makes the container (document.body) move down, ew, breaks background */}
                        <Box paddingTop={4}></Box>

                        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap">
                            <img src="/img/Peepo.png" alt="ChatIS logo (mascot Peepo)" width={250} height={250} />
                            <Stack direction="column" alignItems="center">
                                <Typography variant="h1" component="h1">ChatIS</Typography>
                                <Typography variant="h6" component="h6" alignSelf="flex-end">by IS2511</Typography>
                                <Typography variant="h2" component="h2">Setup</Typography>
                            </Stack>
                        </Stack>

                        <Typography align="center" variant="h5" component="h5" margin={2} marginTop={6}>
                            ChatIS is a Twitch chat overlay for streamers. Put your chat on screen!
                        </Typography>
                        <Typography align="center" variant="h5" component="h5" margin={2}>
                            Some features:
                        </Typography>

                        <FeaturesGrid />
                    </Container>
                    
                    
                    {/* <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
                        Hello world!
                    </h1>
                    <Button variant="contained">Click me</Button> */}
                </main>
            </ThemeProvider>
        </>
    );
}
