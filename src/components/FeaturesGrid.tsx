import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Skeleton,
    Stack,
    Typography,
} from "@suid/material"
import FeatureCard from "~/components/FeatureCard";

import SevenTVIcon from "~/components/icon/SevenTVIcon";
import TwitchIcon from "~/components/icon/TwitchIcon";
import BTTVIcon from "~/components/icon/BTTVIcon";
import FFZIcon from "~/components/icon/FFZIcon";
import ChatterinoIcon from "~/components/icon/ChatterinoIcon";
import SevenTVNamepaint from "~/components/SevenTVNamepaint";


export default function FeaturesGrid(props) {
    return (
        <Grid container spacing={2} {...props}>

            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Stack direction="column" spacing={2}>

                    <FeatureCard title="Emotes!">
                        <Typography variant="body1">
                            The following emote providers are supported:
                        </Typography>
                        <List dense sx={{"paddingBottom": 0}}>
                            <ListItem>
                                <ListItemIcon>
                                    <TwitchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Twitch" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SevenTVIcon />
                                </ListItemIcon>
                                <ListItemText primary="7TV" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BTTVIcon />
                                </ListItemIcon>
                                <ListItemText primary="BTTV" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FFZIcon />
                                </ListItemIcon>
                                <ListItemText primary="FFZ" />
                            </ListItem>
                        </List>
                    </FeatureCard>

                    <FeatureCard title="Name paints!">
                        <Typography variant="body1">
                            Say hello to name paints from 7TV! 
                            Like <SevenTVNamepaint
                                style={{"font-weight": "700"}}
                                paintColor="-676318977"
                                paintBackground="radial-gradient(circle, rgba(215, 176, 48, 1.000) 0%, rgba(255, 247, 182, 1.000) 100%)"
                                paintFilter="drop-shadow(0.6px 0px 0.2px rgba(120, 120, 120, 1.000)) drop-shadow(-0.6px 0px 0.2px rgba(120, 120, 120, 1.000)) drop-shadow(0px 0.6px 0.2px rgba(120, 120, 120, 1.000)) drop-shadow(0px -0.6px 0.2px rgba(120, 120, 120, 1.000)) drop-shadow(0px 0px 1.5px rgba(120, 120, 120, 1.000))"
                            >Festive Gold</SevenTVNamepaint>, <SevenTVNamepaint
                                style={{"font-weight": "700"}}
                                paintColor=""
                                paintBackground="linear-gradient(360deg, rgba(10, 182, 255, 1.000) 0%, rgba(10, 182, 255, 1.000) 25%, rgba(153, 224, 255, 1.000) 25%, rgba(153, 224, 255, 1.000) 50%, rgba(153, 0, 255, 1.000) 50%, rgba(153, 0, 255, 1.000) 75%, rgba(255, 0, 200, 1.000) 75%)"
                                paintFilter="drop-shadow(0px 0px 1px rgba(255, 102, 102, 1.000))"
                            >80's Pool</SevenTVNamepaint> and many more!
                        </Typography>
                    </FeatureCard>

                </Stack>
            </Grid>

            <Grid item lg={3} md={4} sm={6} xs={12}>
                <FeatureCard title="Badges!">
                    <Typography variant="body1">
                        The following badge providers are supported:
                        <List dense>
                        <ListItem>
                            <ListItemIcon>
                                <TwitchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitch" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SevenTVIcon />
                            </ListItemIcon>
                            <ListItemText primary="7TV" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <BTTVIcon />
                            </ListItemIcon>
                            <ListItemText primary="BTTV" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FFZIcon />
                            </ListItemIcon>
                            <ListItemText primary="FFZ" secondary="And FFZ:AP too!" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChatterinoIcon htmlColor="white" />
                            </ListItemIcon>
                            <ListItemText primary="Chatterino" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChatterinoIcon htmlColor="white" />
                            </ListItemIcon>
                            <ListItemText primary={
                                    <span>Chatterino <span style={{
                                        "background-clip": "text",
                                        "-webkit-background-clip": "text",
                                        "-webkit-text-fill-color": "transparent",
                                        "background-image": "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
                                        // "font-weight": "bold",
                                    }}>Homies</span></span>
                                } secondary="(optional)" />
                        </ListItem>
                    </List>
                    </Typography>
                </FeatureCard>
            </Grid>

            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Stack direction="column" spacing={2}>

                    <FeatureCard title="Fonts!">
                        <Typography variant="body1">
                            <span>Any font</span> you have on your system can be used!
                            We have some sweet defaults though, check out the <span style={{"font-family": "'Alsina'", "font-size": "1.2em"}}>VSauce font</span> for example.
                        </Typography>
                    </FeatureCard>

                    <FeatureCard title="Hide bot messages" >
                        <Typography variant="body2" gutterBottom color="text.secondary">And commands!</Typography>
                        <Typography variant="body1">
                            Hide messages from bots and messages with commands. No more gambling addicts in your chat!
                        </Typography>
                    </FeatureCard>

                </Stack>
            </Grid>

            {/* <Grid item xs={4}>
                <FeatureCard title="Fonts!">
                    <Typography variant="body1">
                        <span>Any font</span> you have on your system can be used!
                        We have some sweet defaults though, check out the <span style={{"font-family": "'Alsina'", "font-size": "1.2em"}}>VSauce font</span> for example.
                    </Typography>
                </FeatureCard>
            </Grid>

            <Grid item xs={4}>
                <FeatureCard title="Fonts!">
                    <Typography variant="body1">
                        <span>Any font</span> you have on your system can be used!
                        We have some sweet defaults though, check out the <span style={{"font-family": "'Alsina'", "font-size": "1.2em"}}>VSauce font</span> for example.
                    </Typography>
                </FeatureCard>
            </Grid>

            <Grid item xs={4}>
                <FeatureCard title="Fonts!">
                    <Typography variant="body1">
                        <span>Any font</span> you have on your system can be used!
                        We have some sweet defaults though, check out the <span style={{"font-family": "'Alsina'", "font-size": "1.2em"}}>VSauce font</span> for example.
                    </Typography>
                </FeatureCard>
            </Grid> */}
            
        </Grid>
    );
}