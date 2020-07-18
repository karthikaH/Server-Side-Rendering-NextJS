import Card from '../../components/card/card';
import css from './index.module.scss';

const ImageCard = ({allImages = []}) => (
    <>
         {allImages.map(imgDet => {
            return (
                <Card key={imgDet.id}>
                    <img
                        src={imgDet.url}
                        alt={imgDet.title}
                        style={{ width: "100%"}}
                        loading="lazy"   // not working in static site generation
                    />
                    <div className={css.container}>
                        <h2><b>John Doe</b></h2> 
                        <p>{imgDet.title}</p> 
                    </div>
                </Card>
            )
        })}
    </>
);

export default ImageCard;