import {HeroCard} from "../components/index.js";
import {useForm} from "../../hooks/useForm.js";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {getHeroesByName} from "../helpers/index.js";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {q=''} = queryString.parse(location.search);
    const heroes = getHeroesByName(q);
    const conditionError = heroes.length === 0 && q !== '';
    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`)
    }

    const {searchText, onInputChange} = useForm({
        searchText: q,
    });

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        q === '' && (
                            <div className="alert alert-primary animate__animated animate__fadeIn">
                                Search Hero
                            </div>
                        )
                    }

                    {
                        conditionError && (
                            <div aria-label='danger-element' className="alert alert-danger animate__animated animate__fadeIn">
                                No hero with <b>{q}</b>
                            </div>
                        )
                    }

                    {
                        heroes.map((hero) => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
