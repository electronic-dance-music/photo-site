
import { HomeHeaderContainer, HomeHeaderImage,  } from "./home.styles"
import { Fragment } from "react"
// import { HorizontalLine } from "../../styles/globalstyles.styles";
import ImageGallery from "../../components/image-gallery/image-gallery.component.jsx";

const Home = () => { 
    return (
        <Fragment> 
            <HomeHeaderContainer>
                <HomeHeaderImage src={`${process.env.PUBLIC_URL}/images/x.svg`}  centered ui={true} />
            </HomeHeaderContainer>

            <ImageGallery imagesContext={require.context(`!!file-loader!../../../public/images/test-photos`, false, /\.(png|jpe?g|svg)$/)} />


        </Fragment>
    )
}

export default Home