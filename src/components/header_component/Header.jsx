import React,{useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Menu, MenuItem } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Chip from '@material-ui/core/Chip';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import {IconButton, Drawer} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DirectorMessage from '../../Pages/DirectorMessage';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withRouter , Route , Switch } from 'react-router-dom';

import './Header.css';

const com_logo = process.env.PUBLIC_URL + '/assets/images/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor:'#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: '100px',
    alignItems: 'flex-end',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  button:{
    backgroundColor:'#2995ff',
    border: 0,
    fontSize: 11,
    borderRadius: 10,
    fontWeight:'normal',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '1px 10px',
    position:"absolute",
    right:"50px",
    top:"0px"

  },
  breadCrumbs:{
    

  },
  breadCrumbs1:{
    position:"absolute",
    top:"0px",
    right:"125px",

  },
  drawerContainer: {
    marginTop: '20px',
    width:'200px',
  },
  mobileLogo:{
    marginTop:'20px',
    display: "flex",
    justifyContent:'center',
    alignItems:'center',
  },
  deskTopLogo:{
    margin:'10px 0',
    float:'left',
  }
}));

const themeInstance = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: 550, 
    seperator:">",
    '&:hover, &:focus': {
      background: '#fff',
      color:'#2995ff',
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);


const Header = props => {
   const { history,location } = props;
   const { pathname } = location;
   //console.log(pathname);

   const pathnames = pathname.split("/").filter(x => x);
   console.log(pathnames);
  const [menuPosition, setMenuPosition] = useState(null);
  const [menuPositionnews, setMenuPositionnews] = useState(null);
  const [menuPositionform, setMenuPositionform] = useState(null);
  const [menuPositionnew, setMenuPositionnew] = useState(null);
  const [menuPositiontesti, setMenuPositiontesti] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const classes = useStyles();

  const nestedMenu = () => {
    setOpen(!open);
  };
  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPositionnew(null);
    setMenuPositionnews(null);
    setMenuPositiontesti(null);
    setMenuPositionform(null);
    setMenuPosition({
      top: event.pageY+20,
      left: event.pageX-50
    });
  };

  const opennextMenunews = (event) => {
    if (menuPositionnews) {
      return;
    }
    event.preventDefault();
    setMenuPosition(null);
    setMenuPositionform(null);
    setMenuPositionnew(null);
    setMenuPositiontesti(null);
    setMenuPositionnews({
      top: event.pageY+20,
      left: event.pageX-50
    });
  };

  const opennextMenu = (event) => {
    if (menuPositionnew) {
      return;
    }
    event.preventDefault();
    setMenuPosition(null);
    setMenuPositionnews(null);
    setMenuPositionform(null);
    setMenuPositiontesti(null);
    setMenuPositionnew({
      top: event.pageY+20,
      left: event.pageX-50
    });
  };

  const opennextMenucontact = (event) => {
    if (menuPositionform) {
      return;
    }
    event.preventDefault();
    setMenuPosition(null);
    setMenuPositionnews(null);
    setMenuPositionnew(null);
    setMenuPositiontesti(null);
    setMenuPositionform({
      top: event.pageY+20,
      left: event.pageX-50
    });
  }; 

  const opennextMenutesti = (event) => {
    if (menuPositiontesti) {
      return;
    }
    event.preventDefault();
    setMenuPosition(null);
    setMenuPositionnews(null);
    setMenuPositionnew(null);
    setMenuPositionform(null);
    setMenuPositiontesti({
      top: event.pageY+20,
      left: event.pageX-50
    });
  }; 

  const hidemenuf = (event) => {
    setMenuPosition(null);
    setMenuPositionnews(null); 
    setMenuPositionform(null); 
    setMenuPositionnew(null);
    setMenuPositiontesti(null);
  };

  const handleClick = (event) => {
    event.preventDefault();
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className="row_full">
          <Typography className={classes.deskTopLogo} component="a">
              <img style={{width:'65%'}} src={`${com_logo}logo.png`}/>
          </Typography>
          <IconButton style={{float:'right',marginTop:'25px'}}
            {...{
              edge: "end",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
          <MenuIcon style={{fontSize:'36px',color:'#4ec477'}} />
          </IconButton>
        </div>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Typography className={classes.mobileLogo} component="a">
            <img style={{width:'45%'}} src={`${com_logo}logo.png`}/>
          </Typography>
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <List component="nav">
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Director Message"/>
      </ListItem>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="School Partner's" />
      </ListItem>
      <ListItem className="mobmenuItem" button onClick={nestedMenu}>
        <ListItemText primary="Domains" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText style={{padding:'0 10px'}} primary="Pathsala" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{padding:'0 10px'}} primary="E - Gyan" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{padding:'0 10px'}} primary="Cambridge Program" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{padding:'0 10px'}} primary="Content Development" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Course Details" />
      </ListItem>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Student's Corner" />
      </ListItem>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Offerings" />
      </ListItem>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Results" />
      </ListItem>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Career" />
      </ListItem>
      <ListItem className="mobmenuItem" button>
        <ListItemText primary="Sign In" />
      </ListItem>
    </List>
    );
};

  const displayDesktop = () => {
    return (
        <div>{getMenuBottom()}</div>
    );
  };

  const Routes = () => {

      
    // <Switch>
        {/* <Route exact path = '/' component={Header}></Route> */}
        <Route path="/director" component={DirectorMessage} />
    // </Switch>


  }
  const getMenuBottom = () => {
    return (
      <Toolbar className={classes.toolbar} > 
          <Typography component="a">
            <img style={{width:'60%'}} src={`${com_logo}logo.png`}/>
          </Typography>
          <Breadcrumbs className={classes.breadCrumbs} aria-label="breadcrumb" separator="|" style={{padding:"23px 0px 10px 23px"}}>
              <StyledBreadcrumb className="menuList" component="a" href="/director" label="Director Message"  style={{textDecoration:"none"}} />
              <StyledBreadcrumb className="menuList" component="a" href="/spartners" label="School Partner's" style={{textDecoration:"none"}}/>
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Domains" onClick={handleRightClick} style={{textDecoration:"none"}}/>  
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Course Details"  style={{textDecoration:"none"}} />
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Student's Corner" onClick={opennextMenu} style={{textDecoration:"none"}}/>  
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Free Study Material"  style={{textDecoration:"none"}} />
              <StyledBreadcrumb className="menuList" component="a" href="#" label="News & Events" onClick={opennextMenunews} style={{textDecoration:"none"}}/>  
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Reach Us" onClick={opennextMenucontact} style={{textDecoration:"none"}}/>  
          </Breadcrumbs>
          
          <Menu
            open={!!menuPositionform}
            onClose={() => setMenuPositionform(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPositionform}>
            <MenuItem onClick={hidemenuf}>Enquiry Forms</MenuItem>
          </Menu>

          <Menu
            open={!!menuPositiontesti}
            onClose={() => setMenuPositiontesti(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPositiontesti}>
            <MenuItem onClick={hidemenuf}>Testimonials</MenuItem>
          </Menu>

          <Menu
            open={!!menuPositionnews}
            onClose={() => setMenuPositionnews(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPositionnews}>
            <MenuItem onClick={hidemenuf}>Blogs</MenuItem>
          </Menu>

          <Menu
            open={!!menuPosition}
            onClose={() => setMenuPosition(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPosition}
          >
            <MenuItem onClick={hidemenuf}>Pathsala</MenuItem>
            <MenuItem onClick={hidemenuf}>E - Gyan</MenuItem>
            <MenuItem onClick={hidemenuf}>Cambridge Program</MenuItem>
            <MenuItem onClick={hidemenuf}>Content Development</MenuItem>
            
          </Menu>

          <Menu
            open={!!menuPositionnew}
            onClose={() => setMenuPositionnew(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPositionnew}
          >
            <MenuItem onClick={hidemenuf}>Ask Your Question</MenuItem>
            <NestedMenuItem
              label="Exams"
              parentMenuOpen={!!menuPositionnew}
              onClick={hidemenuf}
            >
              <MenuItem onClick={hidemenuf}>NEET</MenuItem>
              <NestedMenuItem
                label="JEE"
                parentMenuOpen={!!menuPositionnew}
                onClick={hidemenuf}
              >
                <MenuItem onClick={hidemenuf}>MAINS</MenuItem>
                <MenuItem onClick={hidemenuf}>ADVANCE</MenuItem>
              </NestedMenuItem>

              <MenuItem onClick={hidemenuf}>KVPY</MenuItem>
              <MenuItem onClick={hidemenuf}>NTSE</MenuItem>
              <MenuItem onClick={hidemenuf}>NSE</MenuItem>
              <MenuItem onClick={hidemenuf}>OlYMPLADS</MenuItem>
            </NestedMenuItem>
            <MenuItem onClick={hidemenuf}>Expert Counselling</MenuItem>
            <MenuItem onClick={hidemenuf}>College Rankings</MenuItem>
            <MenuItem onClick={hidemenuf}>Ranki Predictor</MenuItem>
            <MenuItem onClick={hidemenuf}>College Predictors</MenuItem>

            <NestedMenuItem
              label="Exam Results"
              parentMenuOpen={!!menuPositionnew}
              onClick={hidemenuf}
            >
              <MenuItem onClick={hidemenuf}>NEET</MenuItem>
              <NestedMenuItem
                label="JEE"
                parentMenuOpen={!!menuPositionnew}
                onClick={hidemenuf}
              >
                <MenuItem onClick={hidemenuf}>MAINS</MenuItem>
                <MenuItem onClick={hidemenuf}>ADVANCE</MenuItem>
              </NestedMenuItem>

              <MenuItem onClick={hidemenuf}>KVPY</MenuItem>
              <MenuItem onClick={hidemenuf}>NTSE</MenuItem>
              <MenuItem onClick={hidemenuf}>NSE</MenuItem>
              <MenuItem onClick={hidemenuf}>OlYMPLADS</MenuItem>
            </NestedMenuItem>
          </Menu>

          <Breadcrumbs className={classes.breadCrumbs1} aria-label="breadcrumb" separator="|" >
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Offerings"  style={{textDecoration:"none"}} />
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Our Result" onClick={opennextMenutesti} style={{textDecoration:"none"}}/>  
              <StyledBreadcrumb className="menuList" component="a" href="#" label="Career"  style={{textDecoration:"none"}} />
          </Breadcrumbs>
          <Link to="/signin">
          <Button className={classes.button}>Sign In</Button>
          </Link>
      </Toolbar>
    );
  };


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
              {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </div> 
    )
}

export default withRouter(Header);