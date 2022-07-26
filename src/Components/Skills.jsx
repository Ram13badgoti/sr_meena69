import Skill from "./Skill";


function Skills() {

  return (
    <>
      <div className="skills">
        <h1 className="Heading">I have experience with these technologies</h1>

        <div
          data-aos=""
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <div className="skillsGrid">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\html.webp"
                  alt="The logo icon for HTML"
                  title="HTMl"
                />
                HTML
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\css.webp"
                  alt="The logo icon for CSS "
                  title="CSS"
                />
                CSS
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\js.png"
                  alt="The logo icon for js"
                  title="js"
                />
                JavaScript
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\react.png"
                  alt="The logo icon for react"
                  title="react"
                />
                ReactJS
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\bootstrap.jfif"
                  alt="The logo icon for Bootstrap"
                  title="Bootstrap 5"
                />
                Bootstrap 5
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\express.png"
                  alt="The logo icon for ExpressJS"
                  title="ExpressJs"
                />
                <p>ExpressJS</p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\node-512.webp"
                  alt="The logo icon for NodeJs"
                  title="Node JS"
                />
                NodeJS
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\sql.png"
                  alt="The logo icon for SQL"
                  title="SQL"
                />
                SQL
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\mongodb.png"
                  alt="The logo icon for MongoDB"
                  title="MongoDB"
                />
                MongoDB
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\jav.png"
                  title="Java"
                />
                Java
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="skillLanguages">
                <Skill
                  source="\skills\api.jfif"
                  alt="The logo icon for API"
                  title="API"
                />
                API
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
