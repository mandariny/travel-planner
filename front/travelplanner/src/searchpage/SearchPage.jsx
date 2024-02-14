import Search from '../main/search/Search'
import PageNumber from './PageNumber'
import classes from './SearchPage.module.css'
import SearchPlan from './SearchPlan'

const SearchPage = () => {
    return (
        <div className={classes.main}>
            <Search/>
            {/* <div className={classes.result}>전체 결과 00건</div>
            <SearchPlan/>
            <div className={classes.pages}>
                <PageNumber startNum="1" endNum="5" nowNum="1"/>
            </div> */}
        </div>
    )
}

export default SearchPage