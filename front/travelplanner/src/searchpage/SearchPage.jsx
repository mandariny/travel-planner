import { useParams } from 'react-router-dom'
import Search from '../main/search/Search'
import PageNumber from './PageNumber'
import classes from './SearchPage.module.css'
import SearchPlan from './SearchPlan'

const SearchPage = () => {
    const {query} = useParams();
    return (
        <div className={classes.main}>
            <SearchPlan query={query}/>
        </div>
    )
}

export default SearchPage