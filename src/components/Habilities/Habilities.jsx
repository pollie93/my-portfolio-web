import CardTechnology from '../CardTechnology/CardTechnology';
import * as techImgs from '../../assets/technologyImg/index';
import './styles.css';

const Habilities = () => {
  const technlogyArrs = [
    {
      img: techImgs.reactImg,
      text: 'React',
    },
    {
      img: techImgs.javascriptImg,
      text: 'Javascript',
    },
    {
      img: techImgs.typescriptImg,
      text: 'TypeScript',
    },
    {
      img: techImgs.sassImg,
      text: 'Sass',
    },
    {
      img: techImgs.styledcomponentsImg,
      text: 'Styled components',
    },
    {
      img: techImgs.graphqlImg,
      text: 'GraphQL',
    },
    {
      img: techImgs.vtexImg,
      text: 'Vtex io',
    },
  ];
  return (
    <div className="container-technology">
      {technlogyArrs.map((techInfo, idx) => {
        return (
          <CardTechnology
            key={idx}
            imgTechnology={techInfo.img}
            textTechnology={techInfo.text}
          />
        );
      })}
    </div>
  );
};

export default Habilities;
