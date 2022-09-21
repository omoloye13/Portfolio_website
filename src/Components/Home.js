import Typewriter from "typewriter-effect";
import { Icon } from "@iconify-icon/react";
import { ExternalLink } from 'react-external-link';
const Home = () => {
  return (
    <section id="sect1">
      <main>
        <div className=" row m-0">
          <div className=" d-md-block d-none col-md-1 col-sm-2  icon">
            <ul className="un_home">
              <li className="li_home">
              <ExternalLink className="link" href="https://github.com/omoloye13" target ='_blank' >
              <Icon icon="akar-icons:github-outline-fill" />
                </ExternalLink>
              </li>
              <li className="li_home">
              <ExternalLink className="link" href="https://www.linkedin.com/in/fauziyat-folashade-omoloye-616876178/" target ='_blank' >
              <Icon icon="akar-icons:linkedin-fill" />
                </ExternalLink>
              </li>
              <li className="li_home">
              <ExternalLink className="link" href="https://twitter.com/adunlomooye" target ='_blank' >
              <Icon icon="ant-design:twitter-outlined" />
                </ExternalLink>
              </li>
              <li className="li_home">
              <ExternalLink className="link" href="https://instagram.com/cutie_shade" target ='_blank' >
              <Icon icon="akar-icons:instagram-fill" />
                </ExternalLink>
              </li>
            </ul>
            {/* <div className="vl"></div> */}
          </div>
          <div className="col-md-11 col-sm-10 hero">
            <h2>
              <span>
                <i>Hola, my name is</i>
              </span>
            </h2>
            <h1 className="header">Fauziyat Folashade Omoloye</h1>
            <div className="type">
            <Typewriter
              options={{
                strings: [
                  " A Frontend Developer",
                  "Occassional UI/UX Designer",

                ],
                autoStart: true,
                loop: true,
              }}
            />
            </div>
            <div className="icon d-md-none d-sm-block">
            <ul className="un_home">
              <li className="li_home">
              <ExternalLink className="link" href="https://github.com/omoloye13" target ='_blank' >
              <Icon icon="akar-icons:github-outline-fill" />
                </ExternalLink>
              </li>
              <li className="li_home">
              <ExternalLink className="link" href="https://www.linkedin.com/in/fauziyat-folashade-omoloye-616876178/" target ='_blank' >
              <Icon icon="akar-icons:linkedin-fill" />
                </ExternalLink>
              </li>
              <li className="li_home">
              <ExternalLink className="link" href="https://twitter.com/adunlomooye" target ='_blank' >
              <Icon icon="ant-design:twitter-outlined" />
                </ExternalLink>
              </li>
              <li className="li_home ">
              <ExternalLink className="link" href="https://instagram.com/cutie_shade" target ='_blank' >
              <Icon icon="akar-icons:instagram-fill" />
                </ExternalLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
