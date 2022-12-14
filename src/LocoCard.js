import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LightIcon from '@mui/icons-material/Light';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  export default function RecipeReviewCard(inputProps) {
    const [expanded, setExpanded] = React.useState(false);
    const [locoLight, setLocoLight] = React.useState(false);

    function callLocoLightApi() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(
            'http://172.17.0.16:8001/trains/light/'+inputProps.dcc_id+'/'+(!locoLight ? 255 : 0),
            requestOptions
        )
        .then(response => response.json())
    }

    function executeShortDCCCmd(cmd_number, value) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(
            'http://172.17.0.16:8001/trains/dcc/'+inputProps.dcc_id+'/'+cmd_number+'/'+value,
            requestOptions
        )
        .then(response => response.json())
    }


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleLocoLightClick = () => {
        setLocoLight(!locoLight);
        callLocoLightApi();
    };

    const handleHornClick = () => {
        executeShortDCCCmd(12,1);
        executeShortDCCCmd(12,0);
    };
  
    return (
        <Card variant="outlined" sx={{ minWidth: 345, maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {inputProps.dcc_id}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={inputProps.loco_title}
          />
          <CardMedia
            component="img"
            height="120"
            image={inputProps.loco_img}
            alt="Loco pic"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
                {inputProps.loco_details}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="switch lights" onClick={handleLocoLightClick}>
            <LightIcon color={locoLight ? "success" : "action"}/>
            </IconButton>
            <IconButton aria-label="horn" onClick={handleHornClick}>
            <VolumeUpIcon/>
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    );
  }

/*    
    return (
        <div>
        <Card variant="outlined" sx={{ minWidth: 345, maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                3
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Dieselov?? lokomotiva ??ady 114 Deutsche Reichsbahn"
            subheader="subheader"
          />
          <CardMedia
            component="img"
            height="120"
            image="/loco_114_298-3.jpg"
            alt="Loco pic"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Dieselov?? lokomotiva ??ady 114 Deutsche Reichsbahn
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <LightIcon color="action"/>
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Detaily:</Typography>
              <Typography paragraph>
                P??vodn?? ??ada 110 byla vyvinuta pro osobn?? a n??kladn?? vlakovou dopravu a jako 
              varianta pro pou??it?? v posunovac??ch slu??b??ch pro DR. Maxim??ln?? rychlost byla 
              100 km / h s v??konem 1 000 kon??. V letech 1983 a?? 1991 byly do n??kter??ch 
              stroj?? instalov??ny nov?? motory s nomin??ln??m v??konem 1 500 kon?? a p??ekresleny 
              jako BR 114.        
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ minWidth: 345, maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              4
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="el. lokomotiva BR 170 DB-AG Polska"
          subheader="subheader"
        />
        <CardMedia
          component="img"
          height="120"
          image="/loco_br_170.jpg"
          alt="Loco pic"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Elektrick?? lokomotiva ??ady 170 DB Schenker Rail Polska.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <LightIcon color="action"/>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Detaily:</Typography>
            <Typography paragraph>
            Varianta lokomotivy Vectron pro DB Schenker Rail Polska je ur??ena pro provoz v polsk?? stejnosm??rn?? s??ti a je vybavena p????slu??n??m vlakov??m zabezpe??ovac??m za????zen??m.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  */
  
