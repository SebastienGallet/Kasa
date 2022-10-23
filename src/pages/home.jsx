import React  from 'react';
import { Link } from 'react-router-dom';
import homeBanner from "../assets/banniere.png";
import Card from '../components/Card/card';
import lodgingList from "../datas/logements.json"
import Banner from '../components/Banniere/banniere';


function Home() {
    return (
      <div id="homepage">
        <Banner
          src={homeBanner}
          title={"Chez vous, partout et ailleurs"}
          alt="bannière paysage"
        />
        <section id="listhouse">
          {lodgingList.map((lodging) => (
            <Link 
              key={lodging.id} to ={'/lodging/'+ lodging.id}>
              <Card
                key={lodging.id}
                id={lodging.id}
                image={lodging.cover}
                title={lodging.title}
                />
            </Link>
          ))}
        </section>
      </div>

    )
  }

  export default Home