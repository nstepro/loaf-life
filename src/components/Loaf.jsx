import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import loafImg from 'images/loaf-cut.png';
import loafTopImg from 'images/loaf-top.png';
import loafBgImg from 'images/loaf-bg.png';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player';
import rehypeRaw from 'rehype-raw';
import { useMediaQuery } from 'react-responsive'


import Footer from 'components/Footer';
import ReactMarkdown from 'react-markdown';

// IMAGE REFS
var imageList = [
    "king-arthur.png",
    "loaf.png",
    "loaf-cut.png",
    "loaf-top.png",
    "scale.png"
];
var images = {}
imageList.forEach(function(i){
    images[i] = require('images/'+i).default;
});

function imageRender(props) {
    var srcNew = images[props.src.replaceAll("'", "")];
    var rotate = Math.ceil(Math.random()*10)
    return (
      <div className="img-holder">
        <a href={srcNew} target="_blank">
            <img
                alt={props.alt}
                src={srcNew}
                style={{maxWidth: '90%', transform: 'rotate('+rotate+'deg)'}}
            />
        </a>
        <p className="img-caption">{props.alt}</p>
      </div>
    );
  };

function blockQuoteRender(props) {
    var accordionTitle = props.children.slice(0,2)[1].props.children;
    var accordionBody = props.children.slice();
    accordionBody.splice(0,2);
    return (
        <div className="section-expander">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{accordionTitle}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {accordionBody}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

function anchorRender(props) {
    console.log(props);
    if (props.children[0].startsWith("Video:")) {
        return (
            <div class="video-embed">
                <h6>{props.children[0]}</h6>
                <ReactPlayer url={props.href} width="320px" height="320px" />
            </div>
        )
    } else {
        return (
            <a href={props.href} target="_blank">{props.children}</a>
        )
    }   
}

function createTocItem(name, tag, linkTarget) {
    let li = document.createElement('li');
    li.className = 'toc-'+tag;

    let a = document.createElement('a');
    a.setAttribute('href', '#'+linkTarget);
    a.textContent = name;
    li.appendChild(a);

    return li;
}


class Home extends Component {
    
    constructor(props) { super(props); this.state = { mdText: null } }
    componentDidMount() {
        fetch('https://dl.dropboxusercontent.com/s/0j7nrlonusmvrht/Loaf%20Life.md?raw=1').then((response) => response.text()).then((text) => {
            this.setState({ mdText: text });
        })
        .then(() => {
            var tags = document.querySelectorAll('h3,h4,h5');
            var toc = document.querySelector('#table-of-contents');
            for (const tag of tags) {
                    if (tag.textContent.substring(0,3)=="[*]") {
                        console.log(tag.textContent);
                        tag.textContent = tag.textContent.replace("[*]", "").trim();
                        var href = tag.textContent.replace(" ", "_").toLowerCase();
                        tag.setAttribute('id', href);
                        toc.appendChild(createTocItem(tag.textContent, tag.tagName, href));
                    }
            }
        });
    }



  render() {
    return (
        <div id="loaf-bg" style={{backgroundImage: `url(${loafBgImg})` }}>
            <Container maxWidth="md" className="loaf-container">
                <Grid container spacing={2} alignItems="center" justifyContent="center" my={{md: 4, xs: 2}}>
                    <Grid item xs={12}>
                        <Typography textAlign="center" variant="h4" mb={0} className="header-tagline">Live, love, loaf.</Typography>
                        <Typography textAlign="center" variant="h1" mb={0}>The Loaf Life</Typography>
                        <Typography textAlign="center" variant="h4" mb={0} className="header-byline">Recipes for really good no-knead sourdough bread.</Typography>
                        <Divider />
                            <Grid container spacing={2} alignItems="left" justifyContent="left">
                                <Grid item xs={12} md={8}>
                                    <Box style={{textAlign: "center"}}><img className="loaf-image" alt="The Loaf" src={loafImg} /></Box>
                                </Grid>
                                <Grid item xs={12} md={0} className="mobile-divider">
                                    <Divider />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box style={{textAlign: "left"}} id="table-of-contents">
                                        <Typography textAlign="left" variant="h5">The Roadmap:</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            
                        <Divider />
                        
                    </Grid>
                </Grid>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.mdText} className="markdown-holder" components={{ "img": imageRender, "blockquote": blockQuoteRender, "a": anchorRender }} />
                <Box style={{textAlign: "center"}}><img className="loaf-image" alt="The Loaf" src={loafTopImg} /></Box>
                <Footer />
            </Container>
        </div>
    )
  }
}
export default Home;

