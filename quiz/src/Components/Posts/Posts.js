import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { Button, TableCell } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const Posts = () => {
  const navigate = useNavigate();
  const blogPosts = [
    {
      title: "JAVASCRIPT",
      body: `JavaScript is the world most popular
	lightweight, interpreted compiled programming
	language. It is also known as scripting
	language for web pages. It is well-known for
	the development of web pages, many non-browser
	environments also use it. JavaScript can be
	used for Client-side developments as well as
	Server-side developments`,
      author: "Hardiksinh Rajput ",
      imgUrl:
        "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg",
    },
    {
      title: "Data Structure ",
      body: `There are many real-life examples of
	a stack. Consider an example of plates stacked
	over one another in the canteen. The plate
	which is at the top is the first one to be
	removed, i.e. the plate which has been placed
	at the bottommost position remains in the
	stack for the longest period of time. So, it
	can be simply seen to follow LIFO(Last In
	First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Rai",
      imgUrl: "https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg",
    },
    {
      title: "React js",
      body: `React 18 was years in the making,
       and with it brought valuable lessons for the React team.
        
         Some of those paths were successful; many more were dead-ends that led to new insights.
          One lesson we’ve learned is that it’s frustrating for the community to wait
           for new features without having insight into these paths that we’re exploring.
           React was created by Jordan Walke `,
      author: "Tirth",
      imgUrl:
        "https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg",
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices,
	also known as hosts, that are connected using
	multiple paths for the purpose of sending/
	receiving data media. Computer networks can
	also include multiple devices/mediums which
	help in the communication between two different
	devices; these are known as Network devices
	and include things such as routers, switches,
	hubs, and bridges. `,
      author: "Shraddha Rajpt",
      imgUrl: "https://img.brainkart.com/subject/221.jpg",
    },
  ];

  return (
    <div>
      {/*HEADER  */}

      <div className="posts-header">
        <h1>
          <b>BLOG POSTS</b>
        </h1>
      </div>
      <div>
        <h3>
          For Play Quiz Go On <b>HOME</b> page.&nbsp;&nbsp;
          <Link onClick={() => navigate("/home")}>Click Me.</Link>
        </h3>
      </div>
      <div className="posts-container">
        {blogPosts.map((post, index) => (
          <Post key={index} index={index} post={post} />
        ))}
      </div>
      <div>
        <TableRow>
          <TableCell>
            <img
              style={{ width: "90%", height: "1%" }}
              src={
                "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
              }
            ></img>
          </TableCell>
          <TableCell>
            <p>
              <h1>
                <b>What are props?</b>
              </h1>
              Props is short for properties and they are used to pass data
              between React components. React’s data flow between components is
              uni-directional (from parent to child only).
              <br />
              <h1>
                <b>How do you update a component’s state?</b>
              </h1>
              State should not be modified directly, but it can be modified with
              a special method called setState( ).
            </p>
          </TableCell>
        </TableRow>
      </div>
      <div className="card">
        <TableRow>
          <TableCell>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "red" }}>P</Avatar>}
                title="PYTHON"
                subheader="July 3, 2022"
              />

              <CardMedia
                component="img"
                height="194%"
                style={{ width: "95%", padding: "2%" }}
                src={
                  "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?crop=4:3"
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Python is a high-level, interpreted, general-purpose
                  programming language. Its design philosophy emphasizes code
                  readability with the use of significant indentation.
                  <br /> Python is dynamically-typed and
                  garbage-collected.&nbsp;&nbsp;
                  <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)">
                    Wikipedia
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </TableCell>

          <TableCell>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "red" }}>P</Avatar>}
                title="PYTHON"
                subheader="July 3, 2022"
              />

              <CardMedia
                component="img"
                height="194%"
                style={{ width: "95%", padding: "2%" }}
                src={
                  "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?crop=4:3"
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Python is a high-level, interpreted, general-purpose
                  programming language. Its design philosophy emphasizes code
                  readability with the use of significant indentation.
                  <br /> Python is dynamically-typed and
                  garbage-collected.&nbsp;&nbsp;
                  <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)">
                    Wikipedia
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </TableCell>
          <TableCell>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "red" }}>P</Avatar>}
                title="PYTHON"
                subheader="July 3, 2022"
              />

              <CardMedia
                component="img"
                height="194%"
                style={{ width: "95%", padding: "2%" }}
                src={
                  "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?crop=4:3"
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Python is a high-level, interpreted, general-purpose
                  programming language. Its design philosophy emphasizes code
                  readability with the use of significant indentation.
                  <br /> Python is dynamically-typed and
                  garbage-collected.&nbsp;&nbsp;
                  <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)">
                    Wikipedia
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </TableCell>
          <TableCell>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194%"
                style={{ width: "95%", padding: "2%" }}
                src={
                  "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?crop=4:3"
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  PYTHON
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Python is a high-level, interpreted, general-purpose
                  programming language. Its design philosophy emphasizes code
                  readability with the use of significant indentation. Python is
                  dynamically-typed and garbage-collected.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </TableCell>
        </TableRow>
      </div>

      <div>
        <TableRow>
          <TableCell style={{ width: "60%" }}>
            <h3>
              <h1>
                <b>Toyota</b>
              </h1>
              has just unveiled the Urban Cruiser Hyryder in India, it's first
              mass and mid-size Hybrid SUV in India, taking on the giants like
              Hyundai Creta, Kia Seltos, as well as the upcoming Maruti Suzuki
              Vitara (Hyryder-based hybrid mid-SUV). Toyota and Maruti Suzuki
              has collaborated for the Hyryder and the Vitara and the SUV is
              being produced at the Toyota's Karnataka plant. Not just the
              strong hybrid, the Hyryder is also the first SUV to feature an
              all-wheel drive system in its class. Toyota will be offering the
              Urban Cruiser Hyryderin four trims namely E, S, G and V trims,
              with the Strong-hybrid powertrain available on top three variants.
            </h3>
          </TableCell>
          <TableCell>
            <img
              style={{ width: "90%", height: "1%" }}
              src={
                "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZ8gp6.img?h=1080&w=1920&m=6&q=60&o=f&l=f"
              }
            ></img>
          </TableCell>
        </TableRow>
      </div>
      
{/* FOOTER */}

      <div className="posts-footer">
        @Coppyright2022. All Rights Reserved.
        <div className="phone">
          <Button>
            <LocalPhoneIcon style={{ color: "blue" }} />
            <Link underline="hover" style={{ color: "white" }}>
              8140187327
            </Link>
          </Button>
        </div>
        <div className=" email">
          <Button>
            <EmailIcon style={{ color: "blue" }} />
            <Link
              href="https://mail.google.com/mail/u/0/#inbox"
              underline="hover"
              style={{ color: "white" }}
            >
              hardiksinhrajput98@gmail.com
            </Link>
          </Button>
        </div>
        <div className="address">
          <HomeIcon />
          <br />
          Rajput Hardiksinh,
          <br />
          VijaycrossRoad,
          <br />
          380009,Ahmedabad
          <br />
          Gujarat
        </div>
        <div className="Button">
          <Button href="https://www.facebook.com/profile.php?id=100008539207073">
            <FacebookIcon />
          </Button>
          <Button href="https://wa.me/918140187327?text=">
            <WhatsAppIcon />
          </Button>
          <Button href="https://twitter.com/HardiksinhRajp4">
            <TwitterIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
