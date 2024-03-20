import {HeroList} from "../components/index.js";

const publisher = 'DC Comics'
export const DcPage = () => {
    return (
        <>
            <h1>{publisher}</h1>
            <hr/>

            <HeroList publisher={publisher}/>
        </>
    )
}
